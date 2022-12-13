package com.example.locus.Common.Company.Model;

import com.example.locus.Common.Company.Dto.ExtraUserProfileSchema;
import com.example.locus.Common.Enum.Branch;
import com.example.locus.Common.Enum.JobCategory;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Date;
import java.util.List;

@Data
@Document
public class Company {

    private @MongoId ObjectId id;

    String name;
    String year;
    String description;
    List<Branch> labels;
    // Need to change type to objectid
    String status;
    String ctc;
    String role;
    JobCategory jobOfferType;
    String eligibility;
    Date date;

    List<String> fixedUserProfileSchema;
    List<ExtraUserProfileSchema> extraUserProfileSchema;
}
