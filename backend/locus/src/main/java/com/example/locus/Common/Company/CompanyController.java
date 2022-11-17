package com.example.locus.Common.Company;

import com.example.locus.Common.Company.Dto.CreateCompanyRequest;
import com.example.locus.Common.Company.Model.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CompanyController {

    @Autowired
    CompanyService companyService;

    @GetMapping(value = "/shared/getAllCompanies")
    public Map<String,Object> getAllCompanies(){
        Map<String,Object> payload = new HashMap<>();
        List<Company> companies = companyService.getAllCompanies();
        payload.put("companies",companies);
        return payload;
    }

    // should be in tpo route / pc route
    @GetMapping(value = "/shared/admin/createNewCompany")
    public boolean createNewCompany(){
        return companyService.insertNewCompany();
    }
}
