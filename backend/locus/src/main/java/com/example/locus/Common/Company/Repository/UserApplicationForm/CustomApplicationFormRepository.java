package com.example.locus.Common.Company.Repository.UserApplicationForm;

import com.example.locus.Common.Company.Model.ApplicationForm.UserApplicationData;

import java.util.Optional;

public interface CustomApplicationFormRepository {
    Optional<UserApplicationData> findUserApplicationFormByUserId(String userId,String companyId);
    void insertNewApplicationForm(UserApplicationData userApplicationData, String companyId);
    void updateApplicationForm(UserApplicationData userApplicationData, String companyId);
}
