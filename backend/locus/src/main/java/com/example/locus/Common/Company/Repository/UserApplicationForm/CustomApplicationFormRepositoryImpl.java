package com.example.locus.Common.Company.Repository.UserApplicationForm;

import com.example.locus.Common.Company.Model.ApplicationForm.ApplicationFormModel;
import com.example.locus.Common.Company.Model.ApplicationForm.UserApplicationData;
import com.example.locus.Student.ProfileData.Model.ProfileData;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ScopeMetadata;
import org.springframework.data.mongodb.core.FindAndReplaceOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.security.core.userdetails.User;

import java.util.Optional;

public class CustomApplicationFormRepositoryImpl implements CustomApplicationFormRepository {

    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public Optional<UserApplicationData> findUserApplicationFormByUserId(String userId,String companyId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("companyId").is(companyId));
        query.addCriteria(Criteria.where("userApplicationData.userId").is(userId));

        ApplicationFormModel applicationFormModel = mongoTemplate.findOne(query,ApplicationFormModel.class);

        if(applicationFormModel != null){
            UserApplicationData userApplicationData = applicationFormModel.getUserApplicationData().get(0);
            return Optional.of(userApplicationData);
        }
        return Optional.empty();
    }

    @Override
    public void insertNewApplicationForm(UserApplicationData userApplicationData,String companyId) {
        if(userApplicationData.getUserId() == null){
            System.out.println("UserID is null");
            return;
        }
        System.out.println("Inside insert new appliation form");

        Query query = new Query();
        query.addCriteria(Criteria.where("companyId").is(companyId));

        Update update = new Update();
        update.push("userApplicationData",userApplicationData);
        mongoTemplate.updateFirst(query, update, ApplicationFormModel.class);

    }

    @Override
    public void updateApplicationForm(UserApplicationData userApplicationData,String companyId) {
        if(userApplicationData.getUserId() == null){
            System.out.println("UserID is null");
            return;
        }

        Query query = new Query();
        query.addCriteria(Criteria.where("companyId").is(companyId));
        query.addCriteria(Criteria.where("userApplicationData.userId").is(userApplicationData.getUserId()));

        Update update = new Update();
        update.set("userApplicationData.$.applicationForm",userApplicationData.getApplicationForm());
        mongoTemplate.findAndModify(query,update,ApplicationFormModel.class);
    }
}
