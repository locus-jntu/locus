package com.example.locus.Common.Company.Repository;

import com.example.locus.Common.Company.Model.Company;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends MongoRepository<Company,String> {

    @Query(value="{_id: '?0'}",fields = "{extraUserProfileSchema: 1,fixedUserProfileSchema: 1,name: 1}")
    Company getCompanyApplicationSchema(ObjectId companyId);

    @Query(value="{_id: '?0'}")
    Company getCompanySchema(ObjectId companyId);
}
