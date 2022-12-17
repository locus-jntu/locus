package com.example.locus.Common.Company;

import com.example.locus.Common.Company.Dto.CreateCompanyRequest;
import com.example.locus.Common.Company.Model.Company;
import com.example.locus.Common.Company.Repository.CompanyRepository;
import com.example.locus.Common.Enum.JobCategory;
import com.example.locus.Student.ProfileData.ProfileData;
import com.example.locus.Student.ProfileData.ProfileRepository;
import com.example.locus.Student.ProfileData.ProfileService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static com.example.locus.Common.Enum.JobCategory.DREAM;
import static com.example.locus.Common.Enum.JobCategory.NON_DREAM;
import static com.example.locus.Common.Enum.JobCategory.SUPER_DREAM;

@Service
public class CompanyServiceImpl implements CompanyService{

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    ProfileService profileService;

    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public boolean createNewCompany(CreateCompanyRequest companyRequest) {

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
        company.setAssignee(List.of("Bilal","Vasanth")); // Should be user id mapping

        // Schema for User Profile data
        company.setFixedUserProfileSchema(companyRequest.getFixedUserProfileSchema());
        company.setExtraUserProfileSchema(companyRequest.getExtraUserProfileSchema());

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

    @Override
    public Map<String,Object> fetchCompanyApplicationForm(ObjectId companyId) {
        Map<String,Object> applicationForm = new HashMap<>();

        Company companyApplicationSchema = companyRepository.getCompanyApplicationSchema(companyId);

        // Fetches user data.
        ProfileData profileData = profileService.fetchProfileData();
        if(profileData == null){
            System.out.println("Logical error. User data is not present.");
            return null;
        }

        applicationForm.put("fixedUserProfileSchema",companyApplicationSchema.getFixedUserProfileSchema());
        applicationForm.put("extraUserProfileSchema",companyApplicationSchema.getExtraUserProfileSchema());
        applicationForm.put("companyName",companyApplicationSchema.getName());
        // Need to further optimize by sending the values of the getFixedUserProfileSchema only.
        applicationForm.put("userData",profileData);

        return applicationForm;
    }

    @Override
    public Map<String,Object> fetchCompanyDetails(ObjectId companyId) {
        Map<String,Object> companyDetails = new HashMap<>();

        Company companySchema = companyRepository.getCompanySchema(companyId);

        companyDetails.put("companyDetails",companySchema);

        return companyDetails;
    }
}


