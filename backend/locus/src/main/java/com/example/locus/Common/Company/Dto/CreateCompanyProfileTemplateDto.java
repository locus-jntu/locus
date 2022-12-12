package com.example.locus.Common.Company.Dto;

import com.example.locus.Common.Company.Model.CompanyUserProfileTemplate;
import lombok.Data;
import org.bson.types.ObjectId;

import java.util.List;

@Data
public class CreateCompanyProfileTemplateDto {

    private ObjectId companyId;

    CompanyUserProfileTemplate.Details details;
    List<String> fixed;
    List<CompanyUserProfileTemplate.ExtraData> extraData;
}
