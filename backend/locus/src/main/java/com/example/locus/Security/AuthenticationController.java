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

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthenticationController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("/api/login")
    public ResponseEntity<String> login(@RequestBody UserCredentials userCredentials){
        System.out.println("Inside login method");
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userCredentials.getUsername(),userCredentials.getPassword());
        authenticationManager.authenticate(usernamePasswordAuthenticationToken);
        String jwtToken = jwtUtil.generate(userCredentials.getUsername());
        return ResponseEntity.ok(jwtToken);
    }
}
