package com.example.locus.Student.ProfileData;

import com.example.locus.Student.ProfileData.Model.ProfileData;
import com.example.locus.Student.ProfileData.Model.ProfileSchema;
import com.example.locus.Student.ProfileData.Repository.ProfileRepository;
import com.example.locus.Student.ProfileData.Repository.ProfileSchemaRepository;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ProfileServiceImpl implements ProfileService{

    @Autowired
    ProfileRepository profileRepository;

    @Autowired
    ProfileSchemaRepository profileSchemaRepository;

    @Override
    public boolean saveNewProfileData(ProfileData profileData) {
        // Do validation before storing the data.

        Map<String,Object> details = (Map<String, Object>) SecurityContextHolder.getContext().getAuthentication().getDetails();
        String userId =(String) details.get("userId");
        Optional<ProfileData> existingProfileData = profileRepository.findProfileByUserId(userId);
        profileData.setUserId(userId);
        if(existingProfileData.isEmpty()){
            profileRepository.save(profileData);
        }else{
            // Updating the existing profile data
            profileData.set_id(existingProfileData.get().get_id());
            profileRepository.save(profileData);
        }
        return true;
    }

    @Override
    public ProfileData fetchProfileData() {
        Map<String,Object> details = (Map<String, Object>) SecurityContextHolder.getContext().getAuthentication().getDetails();
        String userId =(String) details.get("userId");
        Optional<ProfileData> userProfileData = profileRepository.findProfileByUserId(userId);
        if(userProfileData.isEmpty()){
            System.out.println("User Profile Data doesn't exist");
           return null;
        }
        // Can hide the userId and _id
        return profileRepository.findProfileByUserId(userId).get();
    }

    @Override
    public List<ProfileSchema> fetchProfileSchema(){
        return profileSchemaRepository.findAll();
    }
}
