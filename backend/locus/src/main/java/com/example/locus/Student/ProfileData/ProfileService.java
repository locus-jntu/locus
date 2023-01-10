package com.example.locus.Student.ProfileData;

import com.example.locus.Student.ProfileData.Dto.ProfileDataRequest;
import com.example.locus.Student.ProfileData.Model.FixedUserSchema;
import com.example.locus.Student.ProfileData.Model.ProfileData;
import com.example.locus.Student.ProfileData.Model.ProfileSchema;
import org.bson.types.ObjectId;

import java.util.List;

public interface ProfileService {
    boolean updateProfile(FixedUserSchema profileDataRequest);
    FixedUserSchema fetchProfileData();

    List<ProfileSchema> fetchProfileSchema();

    boolean createNewProfile(FixedUserSchema profileData, String userId);


}
