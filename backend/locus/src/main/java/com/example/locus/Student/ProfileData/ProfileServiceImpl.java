package com.example.locus.Student.ProfileData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        profileRepository.save(profileData);
        return false;
    }
}
