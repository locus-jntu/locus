package com.example.locus.Security;

import com.example.locus.Security.jwt.JWTAuthenticationFilter;
import com.example.locus.Security.jwt.JWTAuthorizationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true, jsr250Enabled = true)
public class WebSecurityConfig{

    private final UserDetailsService userDetailsService;

    @Autowired
    public WebSecurityConfig(UserDetailsService userDetailsService){
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public AuthenticationManager customAuthenticationManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject
                (AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.userDetailsService(userDetailsService)
                .passwordEncoder(NoOpPasswordEncoder.getInstance());
        return authenticationManagerBuilder.build();
    }

    @Bean
    public PasswordEncoder bCryptPasswordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http.csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests(p -> {
                    p.antMatchers("/").permitAll();
                    p.antMatchers(HttpMethod.POST,"/api/login").permitAll();
                    p.anyRequest().authenticated();
                })
                .addFilterBefore(new JWTAuthenticationFilter("/api/login",customAuthenticationManager(http)),
                        UsernamePasswordAuthenticationFilter.class)
//                // And filter other requests to check the presence of JWT in header --> for Authorization
                .addFilterBefore(new JWTAuthorizationFilter(),
                        UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
