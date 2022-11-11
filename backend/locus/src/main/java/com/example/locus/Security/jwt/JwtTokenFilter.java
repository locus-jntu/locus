package com.example.locus.Security.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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
        String cookie = request.getHeader(HttpHeaders.AUTHORIZATION);
        System.out.println(cookie);
        String jwt = null;

        //Get the jwt token from the header.
        if(cookie != null){
            String[] values = cookie.split(";");
            for(String value : values){
               if(value.startsWith("jwt")){
                   jwt = value.split("=")[1];
                   break;
               }
            }
        }

        if(cookie == null || jwt == null){
            filterChain.doFilter(request,response);
            return;
        }

        if(!jwtUtil.validate(jwt)){
           filterChain.doFilter(request,response);
           return;
        }

        String username = jwtUtil.getUsername(jwt);
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username,null,new ArrayList<>());
        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authToken);
        filterChain.doFilter(request,response);

    }
}
