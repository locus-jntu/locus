package com.example.locus.Student.ProfileData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


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
    public boolean createNewProfileData(@RequestBody ProfileData profileDataModel){
        return profileService.saveNewProfileData(profileDataModel);
    }

    @GetMapping(value = "/api/student/fetchProfileData")
    public ProfileData fetchProfileData(){
        return profileService.fetchProfileData();
    }
}
