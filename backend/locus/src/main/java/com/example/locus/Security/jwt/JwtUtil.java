package com.example.locus.Security.jwt;


import ch.qos.logback.core.util.TimeUtil;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.sql.Date;

@Service
public class JwtUtil {

    private static final int expireInMs = 864_000_000; // Valid for 10 days

    private final static Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public String generate(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuer("jntuPlacementPortal.com")
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expireInMs))
                .signWith(Keys.hmacShaKeyFor("23432klrfjadslkfjlasdkjf3sadlfkasdlkfjklsdajflkdsajflkadsjflkadsjfkladsjflkadsjflkadsjflkasdjfkladsjfkldsajfkldsafjkladsfjkladsfjladksfjkladsj2".getBytes()))
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

    private Claims getClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(Keys.hmacShaKeyFor("23432klrfjadslkfjlasdkjf3sadlfkasdlkfjklsdajflkdsajflkadsjflkadsjfkladsjflkadsjflkadsjflkasdjfkladsjfkldsajfkldsafjkladsfjkladsfjladksfjkladsj2".getBytes()))
                .build()
                .parseClaimsJws(token).getBody();
    }
}