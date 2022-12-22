package com.example.locus.Student.ProfileData;

import com.example.locus.Student.ProfileData.Model.ProfileData;
import com.example.locus.Student.ProfileData.Model.ProfileSchema;

import java.util.List;

public interface ProfileService {
    boolean saveNewProfileData(ProfileData profileData);
    ProfileData fetchProfileData();

    List<ProfileSchema> fetchProfileSchema();
}
