package com.example.locus.StudentProfile;

import org.springframework.stereotype.Service;

@Service
public class ProfileService {
    public boolean createNewProfileData(ProfileDataModel profileData) {
        // Call the Data Layer to store this in database
        System.out.println(profileData);
        return true;
    }
}
