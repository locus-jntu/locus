package com.example.locus.Common.Company.Dto;

import com.example.locus.Common.Company.Model.ApplicationForm.UserApplicationData;
import lombok.Data;

@Data
public class ApplicationFormRequest {
    UserApplicationData userApplicationData;
    String companyId;
}
