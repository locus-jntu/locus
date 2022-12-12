package com.example.locus.Common.Company.Model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

@Data
@Document
public class CompanyUserProfileTemplate {

    public class ExtraData{
        String name;
        String type;
        String values;
    }

    public class Details{
        String name;
        String role;
        String ctc;
        String jobofferType;
    }
    private @MongoId ObjectId id;
    private ObjectId companyId;

    Details details;
    List<String> fixed;
    List<ExtraData> extraData;
}
