package com.example.locus.Security.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Key;
import java.util.Date;

import static java.util.Collections.emptyList;

public class JWTTokenAuthenticationService {
    final long EXPIRATIONTIME = 864_000_000; // 10 days
    final String TOKEN_PREFIX = "Bearer ";
    final String HEADER_STRING = "Authorization";

    void addAuthentication(HttpServletResponse res, String username) {

        String JWT = Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                // Need to update the secret key using env variable
                .signWith(Keys.hmacShaKeyFor("23432klrfjadslkfjlasdkjf3sadlfkasdlkfjklsdajflkdsajflkadsjflkadsjfkladsjflkadsjflkadsjflkasdjfkladsjfkldsajfkldsafjkladsfjkladsfjladksfjkladsj2".getBytes()))
                .compact();

        res.addHeader(HEADER_STRING, TOKEN_PREFIX + " " + JWT);
    }

    Authentication getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(HEADER_STRING);

        if (token != null) {
            // parse the token.
            System.out.println(token + " is token for authorization " );
            String user = Jwts.parserBuilder()
                    // Need to update the secret key using env variable
                    .setSigningKey(Keys.hmacShaKeyFor("23432klrfjadslkfjlasdkjf3sadlfkasdlkfjklsdajflkdsajflkadsjflkadsjfkladsjflkadsjflkadsjflkasdjfkladsjfkldsajfkldsafjkladsfjkladsfjladksfjkladsj2".getBytes()))
                    .build()
                    .parseClaimsJws(token.replace(TOKEN_PREFIX,""))
                    .getBody()
                    .getSubject();

            System.out.println(user);
            return user != null ?
                    new UsernamePasswordAuthenticationToken(user, null, emptyList()) :
                    null;
        }
        return null;
    }
}