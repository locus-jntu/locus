package com.example.locus.Common.Company.Model.ApplicationForm;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class ApplicationFormModel {
    String companyId;
    List<UserApplicationData> userApplicationData;
}
