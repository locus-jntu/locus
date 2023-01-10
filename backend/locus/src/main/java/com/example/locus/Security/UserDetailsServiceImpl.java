package com.example.locus.Security;

import com.example.locus.Security.Model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel userModel = userRepository.findUserByUsername(username);
        if(userModel == null){
            throw new UsernameNotFoundException(username);
        }

        return new User(userModel.getUsername(),userModel.getPassword(),userModel.getAuthorities());
    }

    public UserModel loadUser(String username) throws UsernameNotFoundException {
        UserModel userModel = userRepository.findUserByUsername(username);
        if(userModel == null){
            throw new UsernameNotFoundException(username);
        }

        return userModel;
    }
}
