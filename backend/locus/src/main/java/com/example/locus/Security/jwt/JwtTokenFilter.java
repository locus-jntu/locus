package com.example.locus.Security.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

@Service
public class JwtTokenFilter extends OncePerRequestFilter {

    @Autowired
    JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authorizationHeader = request.getHeader("Authorization");
        System.out.println(authorizationHeader + " from JwtTokenFilter");

        if(authorizationHeader == null || !authorizationHeader.startsWith("Bearer")){
            filterChain.doFilter(request,response);
            return;
        }

        String token = authorizationHeader.split(" ")[1].trim();
        if(!jwtUtil.validate(token)){
           filterChain.doFilter(request,response);
           return;
        }

        String username = jwtUtil.getUsername(token);
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username,null,new ArrayList<>());
        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authToken);
        filterChain.doFilter(request,response);

    }
}
