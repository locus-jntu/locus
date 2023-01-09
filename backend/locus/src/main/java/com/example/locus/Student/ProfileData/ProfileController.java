package com.example.locus.Student.ProfileData;

import com.example.locus.Student.ProfileData.Dto.ProfileDataRequest;
import com.example.locus.Student.ProfileData.Model.FixedUserSchema;
import com.example.locus.Student.ProfileData.Model.ProfileData;
import com.example.locus.Student.ProfileData.Model.ProfileSchema;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class ProfileController {

    private ProfileService profileService;

    @Autowired
    public ProfileController(ProfileService profileService){
        this.profileService = profileService;
    }

    @GetMapping(value = "/api/shared/checkHealth")
    public String checkHealth(){
        return "Hello World";
    }

    @PostMapping(value = "/api/student/saveNewProfileData")
    public boolean createNewProfileData(@RequestBody ProfileDataRequest profileDataRequest){
        return profileService.saveNewProfileData(profileDataRequest);
    }

    @GetMapping(value = "/api/student/fetchProfileData")
    public FixedUserSchema fetchProfileData(){
        return profileService.fetchProfileData();
    }

    @GetMapping(value = "/api/shared/fetchProfileSchema")
    public List<ProfileSchema> fetchProfileSchema(){
       return profileService.fetchProfileSchema();
    }
}
