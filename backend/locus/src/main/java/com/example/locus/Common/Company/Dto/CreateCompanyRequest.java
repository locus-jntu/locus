package com.example.locus.Common.Company.Dto;

import com.example.locus.Common.Enum.Branch;
import lombok.Data;

import java.util.List;

@Data
public class CreateCompanyRequest {

    String name;
    String year;
    String description;
    List<Branch> branches;
    // Need to change type to objectid
    List<String> assignee;
    String status;
    String ctc;
    String role;
    String jobCategory;
    String eligibility;

    List<String> fixedUserProfileSchema;
    List<ExtraUserProfileSchema> extraUserProfileSchema;
}
