package com.example.locus.Common.Company;

import com.example.locus.Common.Company.Dto.ApplicationFormRequest;
import com.example.locus.Common.Company.Dto.CreateCompanyRequest;
import com.example.locus.Common.Company.Model.ApplicationForm.ApplicationFormModel;
import com.example.locus.Common.Company.Model.ApplicationForm.UserApplicationData;
import com.example.locus.Common.Company.Model.Company;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CompanyController {

    @Autowired
    CompanyService companyService;

    @GetMapping(value = "/api/shared/getAllCompanies")
    public Map<String,Object> getAllCompanies(){
        Map<String,Object> payload = new HashMap<>();
        List<Company> companies = companyService.getAllCompanies();
        payload.put("companies",companies);
        return payload;
    }

    // should be in tpo route / pc route
    @PostMapping(value = "/api/admin/createNewCompany")
    public boolean createNewCompany(@RequestBody CreateCompanyRequest companyRequest){
        return companyService.createNewCompany(companyRequest);
    }

    @GetMapping(value = "/api/shared/getCompanyDetails")
    public Map<String,Object> getCompanyDetails(@RequestParam(name = "companyId") String companyId){
        return companyService.fetchCompanyDetails(new ObjectId(companyId));
    }

    @GetMapping(value = "/api/student/getCompanyApplicationForm")
    public Map<String,Object> getCompanyApplicationForm(@RequestParam(name = "companyId") String companyId){
        return companyService.fetchCompanyApplicationForm(new ObjectId(companyId));
    }

    @PostMapping(value = "/api/student/submitCompanyApplicationForm")
    public boolean submitCompanyApplicationForm(@RequestBody ApplicationFormRequest applicationFormRequest){
       return companyService.submitCompanyApplicationForm(applicationFormRequest);
    }

    @GetMapping(value = "/api/admin/getAllStudentsApplicationForCompany")
    public List<UserApplicationData> getAllStudentsApplicationForCompany(@RequestParam(name="companyId") String companyId){
       return companyService.getAllStudentsApplicationForCompany(companyId);
    }

}
