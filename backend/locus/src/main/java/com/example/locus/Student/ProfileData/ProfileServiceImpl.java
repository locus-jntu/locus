package com.example.locus.Student.ProfileData;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class ProfileServiceImpl implements ProfileService{

    ProfileRepository profileRepository;

    @Autowired
    public ProfileServiceImpl(ProfileRepository testRepository){
        this.profileRepository = testRepository;
    }

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
}
