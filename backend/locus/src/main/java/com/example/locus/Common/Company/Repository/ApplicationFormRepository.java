package com.example.locus.Common.Company.Repository;

import com.example.locus.Common.Company.Model.ApplicationFormModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationFormRepository extends MongoRepository<ApplicationFormModel,String> {

}
