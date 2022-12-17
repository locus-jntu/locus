package com.example.locus.Student.ProfileData;

public interface ProfileService {
    boolean saveNewProfileData(ProfileData profileData);
    ProfileData fetchProfileData();
}
