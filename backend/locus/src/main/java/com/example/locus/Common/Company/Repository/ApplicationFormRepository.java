package com.example.locus.Common.Company.Repository;

import com.example.locus.Common.Company.Model.ApplicationForm.ApplicationFormModel;
import com.example.locus.Common.Company.Model.ApplicationForm.UserApplicationData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ApplicationFormRepository extends MongoRepository<ApplicationFormModel,String> {


//    @Query(value="{'applicationData.userId': '?0'}")
//    Optional<UserApplicationData> findUserApplicationFormByUserId(String userId);
//
////    @Query(value = )
//    void insertNewApplicationForm(UserApplicationData userApplicationData);
//
//    void updateApplicationForm(UserApplicationData userApplicationData);
}
