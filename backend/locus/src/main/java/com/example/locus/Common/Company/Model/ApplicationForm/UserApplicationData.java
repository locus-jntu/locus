package com.example.locus.Common.Company.Model.ApplicationForm;

import com.example.locus.Student.ProfileData.Model.ProfileData;
import lombok.Data;

import java.util.Map;

@Data
public class UserApplicationData{
   String userId;
   Map<String,Object> fixedUserProfileSchema;
   Map<String,Object> extraUserProfileSchema;
}
