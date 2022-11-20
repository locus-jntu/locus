package com.example.locus.Security.jwt;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.List;

@Service
public class JwtUtil {

    private static final int expireInMs = 864_000_000; // Valid for 10 days

    private final static Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public String generate(String username, Collection<? extends GrantedAuthority> authorities){
        return Jwts.builder()
                .setSubject(username)
                .setIssuer("jntuPlacementPortal.com")
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expireInMs))
                .signWith(Keys.hmacShaKeyFor("23432klrfjadslkfjlasdkjf3sadlfkasdlkfjklsdajflkdsajflkadsjflkadsjfkladsjflkadsjflkadsjflkasdjfkladsjfkldsajfkldsafjkladsfjkladsfjladksfjkladsj2".getBytes()))
                .claim("roles",authorities)
                .compact();
    }
    public boolean validate(String token) {
        if (getUsername(token) != null && isExpired(token)) {
            return true;
        }
        return false;
    }

    public String getUsername(String token) {
        Claims claims = getClaims(token);
        return claims.getSubject();
    }

    public boolean isExpired(String token) {
        Claims claims = getClaims(token);
        return claims.getExpiration().after(new Date(System.currentTimeMillis()));
    }

    public List<GrantedAuthority> getAuthorities(String token){
        List<GrantedAuthority> roles = new ArrayList<>();
        Claims claims = getClaims(token);
        List<LinkedHashMap<String,String>> authorityList = (List<LinkedHashMap<String, String>>) claims.get("roles");
        for(LinkedHashMap<String,String> authority : authorityList){
            roles.add(new SimpleGrantedAuthority(authority.get("authority")));
        }
        return roles;
    }

    private Claims getClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(Keys.hmacShaKeyFor("23432klrfjadslkfjlasdkjf3sadlfkasdlkfjklsdajflkdsajflkadsjflkadsjfkladsjflkadsjflkadsjflkasdjfkladsjfkldsajfkldsafjkladsfjkladsfjladksfjkladsj2".getBytes()))
                .build()
                .parseClaimsJws(token).getBody();
    }
}