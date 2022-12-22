package com.example.locus.Common.Company.Model.ApplicationForm;

import lombok.Data;

import java.util.List;

@Data
public class ApplicationFormModel {
    String companyId;
    List<UserApplicationData> applicationData;
}
