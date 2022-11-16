package com.example.locus.Common.Company;

import com.example.locus.Common.Company.Dto.CreateCompanyRequest;
import com.example.locus.Common.Company.Model.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CompanyController {

    @Autowired
    CompanyService companyService;

    @GetMapping(value = "/shared/getAllCompanies")
    public List<Company> getAllCompanies(){
        return companyService.getAllCompanies();
    }

    // should be in tpo route / pc route
    @GetMapping(value = "/shared/admin/createNewCompany")
    public boolean createNewCompany(){
        return companyService.insertNewCompany();
    }
}
