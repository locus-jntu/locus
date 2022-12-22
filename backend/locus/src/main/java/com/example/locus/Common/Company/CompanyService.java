package com.example.locus.Common.Company;

import com.example.locus.Common.Company.Dto.ApplicationFormRequest;
import com.example.locus.Common.Company.Dto.CreateCompanyRequest;
import com.example.locus.Common.Company.Model.Company;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Map;

public interface CompanyService{
    List<Company> getAllCompanies();
    boolean createNewCompany(CreateCompanyRequest companyRequest);

    Map<String,Object> fetchCompanyApplicationForm(ObjectId companyId);

    Map<String,Object> fetchCompanyDetails(ObjectId companyId);

    boolean submitCompanyApplicationForm(ApplicationFormRequest applicationFormRequest);
}
