package com.example.locus.Security.Service;

import com.example.locus.Common.Enum.UserRole;
import com.example.locus.Email.EmailService;
import com.example.locus.Security.Dto.CreatePcRequest;
import com.example.locus.Security.Dto.RegisterNewStudents;
import com.example.locus.Security.Dto.UserData;
import com.example.locus.Security.Model.UserModel;
import com.example.locus.Security.UserRepository;
import com.example.locus.Student.ProfileData.Model.FixedUserSchema;
import com.example.locus.Student.ProfileData.Model.ProfileData;
import com.example.locus.Student.ProfileData.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.HashSet;
import java.util.Set;

@Service
public class UserManagerImpl implements UserManager{

    String PC_PREFIX = "pc.";
    String PC_POSTFIX = "@jntu.in";

    int PASSWORD_LENGTH = 8;

    @Autowired
    EmailService emailService;

    @Autowired
    ProfileService profileService;

    @Autowired
    UserRepository userRepository;

    @Override
    public boolean registerNewStudents(RegisterNewStudents registerNewStudents) {

        for(UserData userData: registerNewStudents.getNewStudents()){
            String rollNumber = userData.getRoll_number();
            String email = userData.getMail_id();

            if(email != null && rollNumber != null){

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

               // Creating a profile
                FixedUserSchema fixedUserSchema = new FixedUserSchema();
                fixedUserSchema.setMail_id(email);
                profileService.createNewProfile(fixedUserSchema,userModel.getId().toString());

               // Send mail after registration
                emailService.sendSimpleMessage("saimaheshtaduri6@gmail.com","Selected as PC","Username is " + rollNumber + ". Password is " + password);


            }else{
                System.out.println("Skipping registration, Invalid email: " + email + " or rollnumber: " + email);
            }
        }

        return true;
    }

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
