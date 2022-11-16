package com.example.locus.Common.Company.Model;

import com.example.locus.Common.Enum.Branch;
import com.example.locus.Common.Enum.JobCategory;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@Document
public class Company {

    String name;
    String description;
    List<Branch> labels;
    // Need to change type to objectid
    List<String> assignee;
    String status;
    String ctc;
    String role;
    JobCategory jobOfferType;
    String eligibility;
    Date date;

}
