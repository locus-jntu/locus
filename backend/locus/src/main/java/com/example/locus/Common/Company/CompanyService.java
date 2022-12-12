package com.example.locus.Common.Company;

import com.example.locus.Common.Company.Dto.CreateCompanyProfileTemplateDto;
import com.example.locus.Common.Company.Dto.CreateCompanyRequest;
import com.example.locus.Common.Company.Model.Company;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CompanyService{
    List<Company> getAllCompanies();
    boolean insertNewCompany(CreateCompanyRequest companyRequest);

    boolean createNewCompanyUserProfileTemplate(CreateCompanyProfileTemplateDto profileTemplate);
}
