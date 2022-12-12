package com.example.locus.Common.Company.Repository;

import com.example.locus.Common.Company.Model.CompanyUserProfileTemplate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyUserProfileTemplateRepository extends MongoRepository<CompanyUserProfileTemplate,String> {
}
