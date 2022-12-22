package com.example.locus.Common.Company.Model;

import com.example.locus.Student.ProfileData.ProfileData;
import lombok.Data;

import java.util.List;

@Data
public class ApplicationFormModel {
    String companyId;
    List<UserApplicationData> applicationData;
}
