package com.example.locus.Common.Company;

import com.example.locus.Common.Company.Dto.CreateCompanyRequest;
import com.example.locus.Common.Company.Model.Company;
import com.example.locus.Common.Company.Repository.CompanyRepository;
import com.example.locus.Common.Enum.Branch;
import com.example.locus.Common.Enum.JobCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

import static com.example.locus.Common.Enum.JobCategory.DREAM;
import static com.example.locus.Common.Enum.JobCategory.NON_DREAM;
import static com.example.locus.Common.Enum.JobCategory.SUPER_DREAM;

@Service
public class CompanyServiceImpl implements CompanyService{

    @Autowired
    CompanyRepository companyRepository;

    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public boolean createNewCompany(CreateCompanyRequest companyRequest) {

        System.out.println(companyRequest);
//        company.

        Company company = new Company();
        company.setName(companyRequest.getName());
        company.setDate(new Date());
        company.setCtc(companyRequest.getCtc());
        company.setEligibility(companyRequest.getEligibility());
        company.setYear(companyRequest.getYear());

        company.setRole(companyRequest.getRole());
        company.setDescription(companyRequest.getDescription());
        company.setLabels(companyRequest.getBranches());
        company.setStatus(companyRequest.getStatus());

        // Schema for User Profile data
        company.setFixedUserProfileSchema(companyRequest.getFixedUserProfileSchema());
        company.setExtraUserProfileSchema(companyRequest.getExtraUserProfileSchema());

        // change this to dynamic
        switch (JobCategory.valueOf(companyRequest.getJobCategory())){
            case NON_DREAM:
                company.setJobOfferType(NON_DREAM);
                break;
            case DREAM:
                company.setJobOfferType(DREAM);
                break;
            case SUPER_DREAM:
                company.setJobOfferType(SUPER_DREAM);
                break;
            default:
                System.out.println("Invalid Company! Error storing data in database");
                return false;
        }

        companyRepository.save(company);
        return true;
    }
}
