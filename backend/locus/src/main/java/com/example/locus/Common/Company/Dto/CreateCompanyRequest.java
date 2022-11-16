package com.example.locus.Common.Company.Dto;

import com.example.locus.Common.Enum.Branch;
import lombok.Data;

import java.util.List;

@Data
public class CreateCompanyRequest {

    String name;
    String description;
    List<String> branches;
    // Need to change type to objectid
    List<String> assignee;
    String status;
    String ctc;
    String role;
    String jobOfferType;
    String eligibility;
}
