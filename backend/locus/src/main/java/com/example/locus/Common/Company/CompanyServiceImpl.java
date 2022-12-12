package com.example.locus.Common.Company;

import com.example.locus.Common.Company.Dto.CreateCompanyProfileTemplateDto;
import com.example.locus.Common.Company.Dto.CreateCompanyRequest;
import com.example.locus.Common.Company.Model.Company;
import com.example.locus.Common.Company.Repository.CompanyRepository;
import com.example.locus.Common.Company.Model.CompanyUserProfileTemplate;
import com.example.locus.Common.Company.Repository.CompanyUserProfileTemplateRepository;
import com.example.locus.Common.Enum.Branch;
import com.example.locus.Common.Enum.JobCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService{

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    CompanyUserProfileTemplateRepository companyUserProfileTemplateRepository;

    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public boolean insertNewCompany(CreateCompanyRequest companyRequest) {

//        company.

        Company company = new Company();
        company.setName(companyRequest.getName());
        company.setDate(new Date());
        company.setCtc(companyRequest.getCtc());
        company.setEligibility(companyRequest.getEligibility());
        company.setAssignee(List.of("Bilal","Vasanth")); // Should be user id mapping
        company.setJobOfferType(JobCategory.SUPER_DREAM);
        company.setRole(companyRequest.getRole());
        company.setDescription(companyRequest.getDescription());
        company.setLabels(List.of(Branch.CSE,Branch.EC,Branch.MECH));
        company.setStatus(companyRequest.getStatus());

        companyRepository.save(company);
        return true;
    }

    @Override
    public boolean createNewCompanyUserProfileTemplate(CreateCompanyProfileTemplateDto profileTemplate) {
        CompanyUserProfileTemplate companyUserProfileTemplate = new CompanyUserProfileTemplate();

        companyUserProfileTemplate.setFixed(profileTemplate.getFixed());
        companyUserProfileTemplate.setExtraData(profileTemplate.getExtraData());
        companyUserProfileTemplate.setCompanyId(profileTemplate.getCompanyId());
        companyUserProfileTemplate.setDetails(profileTemplate.getDetails());

        companyUserProfileTemplateRepository.save(companyUserProfileTemplate);
        return true;
    }
}
