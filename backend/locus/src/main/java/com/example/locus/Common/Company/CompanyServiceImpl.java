package com.example.locus.Common.Company;

import com.example.locus.Common.Company.Dto.CreateCompanyRequest;
import com.example.locus.Common.Company.Model.Company;
import com.example.locus.Common.Enum.Branch;
import com.example.locus.Common.Enum.JobCategory;
import org.checkerframework.checker.units.qual.C;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService{

    @Autowired
    CompanyRepository companyRepository;

    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public boolean insertNewCompany() {
//        company.
        Company company = new Company();
        company.setName("goldman sach");
        company.setDate(new Date());
        company.setCtc("5lpa");
        company.setEligibility("2 backlogs compulsory");
        company.setAssignee(List.of("Bilal","Vasanth")); // Should be user id mapping
        company.setJobOfferType(JobCategory.SUPER_DREAM);
        company.setRole("CEO");
        company.setDescription("Need to manage all the chicks in the company");
        company.setLabels(List.of(Branch.CSE,Branch.EC,Branch.MECH));
        company.setStatus("Interview Phase");

        companyRepository.save(company);
        return true;
    }
}
