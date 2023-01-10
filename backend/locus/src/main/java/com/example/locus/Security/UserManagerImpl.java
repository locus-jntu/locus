package com.example.locus.Security;

import com.example.locus.Common.Enum.UserRole;
import com.example.locus.Email.EmailService;
import com.example.locus.Security.Dto.RegisterNewStudents;
import com.example.locus.Security.Dto.UserData;
import com.example.locus.Security.Model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.HashSet;
import java.util.Set;

@Service
public class UserManagerImpl implements UserManager{

    int PASSWORD_LENGTH = 8;

    @Autowired
    EmailService emailService;

    @Autowired
    UserRepository userRepository;

    @Override
    public boolean registerNewStudents(RegisterNewStudents registerNewStudents) {

        for(UserData userData: registerNewStudents.getNewStudents()){
            if(userData.getEmail() != null && userData.getRoll_number() != null){

                String rollNumber = userData.getRoll_number();
                // Check if user exists
                if(userRepository.findUserByUsername(rollNumber) != null){
                   continue;
                }

                UserModel userModel = new UserModel();
                // Set Username
                userModel.setUsername(rollNumber);

                // Adding roles
                Set<UserRole> roles = new HashSet<>();
                roles.add(UserRole.STUDENT);
                userModel.setRoles(roles);

                // Generating password
                String password = generateRandomPassword(PASSWORD_LENGTH);
                userModel.setPassword(password);

               userRepository.save(userModel);

               // Send mail after registration
                emailService.sendSimpleMessage("saimaheshtaduri6@gmail.com","Selected as PC","Username is " + rollNumber + ". Password is " + password);
            }else{
                System.out.println("Skipping registration, Invalid email or null rollnumber");
            }
        }

        return true;
    }

    @Override
    public boolean changePassword() {
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
