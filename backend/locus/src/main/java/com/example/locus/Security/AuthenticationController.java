package com.example.locus.Security;

import com.example.locus.Security.jwt.JwtUtil;
import com.example.locus.Security.jwt.UserCredentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthenticationController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("/api/login")
    public Map<String,String> login(@RequestBody UserCredentials userCredentials){
        System.out.println("Inside login method");
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userCredentials.getUsername(),userCredentials.getPassword());
        authenticationManager.authenticate(usernamePasswordAuthenticationToken);
        String jwtToken = jwtUtil.generate(userCredentials.getUsername());
        Map<String,String> payload = new HashMap<>();
        payload.put("jwt",jwtToken);
        return payload;
    }
}
