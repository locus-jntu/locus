package com.example.locus.Tpo.ManagePc;

import com.example.locus.Common.Enum.UserRole;
import com.example.locus.Email.EmailService;
import com.example.locus.Security.UserModel;
import com.example.locus.Security.UserRepository;
import com.example.locus.Tpo.ManagePc.Dto.CreatePcRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.HashSet;
import java.util.Set;

@Service
public class ManagePcServiceImpl implements ManagePcService{

    String PC_PREFIX = "pc.";
    String PC_POSTFIX = "@jntu.in";
    int PASSWORD_LENGTH = 8;

    @Autowired
    UserRepository userRepository;

    @Autowired
    EmailService emailService;


    @Override
    public boolean createPc(CreatePcRequest createPcRequest) {
        String username = PC_PREFIX + createPcRequest.getUsername() + PC_POSTFIX;

        UserModel userModel = userRepository.findUserByUsername(username);
        if(userModel != null){
            System.out.println("Pc Already exists.");
            return false;
        }

        userModel = new UserModel();

        Set<UserRole> roles = new HashSet<>();
        roles.add(UserRole.PC);

        userModel.setUsername(username);
        userModel.setRoles(roles);

        // Create a random password everytime.
        String password = generateRandomPassword(PASSWORD_LENGTH);
        userModel.setPassword(password);

        // Saving data into db.
        userRepository.save(userModel);

        emailService.sendSimpleMessage("saimaheshtaduri6@gmail.com","Selected as PC","Username is " + username + ". Password is " + password);
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

    public String generateRandomPassword(int len){
        // ASCII range – alphanumeric (0-9, a-z, A-Z)
        final String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        SecureRandom random = new SecureRandom();
        StringBuilder sb = new StringBuilder();

        // each iteration of the loop randomly chooses a character from the given
        // ASCII range and appends it to the `StringBuilder` instance

        for (int i = 0; i < len; i++) {
            int randomIndex = random.nextInt(chars.length());
            sb.append(chars.charAt(randomIndex));
        }

        return sb.toString();
    }


}
