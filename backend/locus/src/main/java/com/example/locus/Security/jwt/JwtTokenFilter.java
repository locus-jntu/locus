package com.example.locus.Security.jwt;

import com.example.locus.Security.UserDetailsServiceImpl;
import com.example.locus.Security.Model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class JwtTokenFilter extends OncePerRequestFilter {

    @Autowired
    UserDetailsServiceImpl userDetailsService;
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

        // Creating user information model
        // Can optimize heavily by storing userId into the jwt token.
        Map<String,Object> userInformation = new HashMap<>();
        UserModel userModel = userDetailsService.loadUser(username);
        userInformation.put("username",userModel.getUsername());
        userInformation.put("userId",userModel.getId().toString());
        List<GrantedAuthority> authorityList = jwtUtil.getAuthorities(token);

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username,null,authorityList);
        // Setting the user information details.
        authToken.setDetails(userInformation);
        SecurityContextHolder.getContext().setAuthentication(authToken);

        filterChain.doFilter(request,response);

    }
}
