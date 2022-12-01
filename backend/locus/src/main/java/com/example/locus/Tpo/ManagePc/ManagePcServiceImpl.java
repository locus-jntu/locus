package com.example.locus.Tpo.ManagePc;

import com.example.locus.Common.Enum.UserRole;
import com.example.locus.Security.UserModel;
import com.example.locus.Security.UserRepository;
import com.example.locus.Tpo.ManagePc.Dto.CreatePcRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class ManagePcServiceImpl implements ManagePcService{

    String PC_PREFIX = "pc.";
    String PC_POSTFIX = "@jntu.in";

    UserRepository userRepository;

    @Autowired
    public ManagePcServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public boolean createPc(CreatePcRequest createPcRequest) {
        UserModel userModel = userRepository.findUserByUsername(createPcRequest.getUsername());
        if(userModel == null){
            System.out.println("Pc Already exists.");
            return false;
        }

        userModel = new UserModel();

        Set<UserRole> roles = new HashSet<>();
        roles.add(UserRole.PC);
        String username = PC_PREFIX + createPcRequest.getUsername() + PC_POSTFIX;

        userModel.setUsername(username);
        userModel.setRoles(roles);

        // Create a random password everytime.
        userModel.setPassword("password");

        // Saving data into db.
        userRepository.save(userModel);
        return true;
    }

    @Override
    public boolean deletePc(String pcUsername) {
        UserModel userModel = userRepository.findUserByUsername(pcUsername);
        System.out.println(userModel);
        if(userModel != null && userModel.getRoles().contains(UserRole.PC)){
            userRepository.deleteById(userModel.getId().toString());
            return true;
        }
        return false;
    }

}
