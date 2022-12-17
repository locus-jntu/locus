package com.example.locus.Student.ProfileData;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Address{
    public String streetAddress;
    public String streetAddress2;
    public String district;
    public String state;
    public String city;
    public String pin;
}
class Internship{
    public String role;
    public String org;
    public String dur;
}

class Course{
    public String cname;
    public String org;
}
@Document
public class ProfileData {

    @MongoId
    @JsonSerialize(using = ToStringSerializer.class)
    String rollNumber;

    @JsonProperty("email")
    String email;

    @JsonProperty("firstName")
    String firstName;

    @JsonProperty("lastName")
    String lastName;

    @JsonProperty("department")
    String department;

    @JsonProperty("degree")
    String degree;

    @JsonProperty("parentName")
    String parentName;

    @JsonProperty("tenthGrade")
    String tenthGrade;

    @JsonProperty("interGrade")
    String interGrade;

    @JsonProperty("mobile")
    String mobile;

    @JsonProperty("passingYear")
    String passingYear;

    @JsonProperty("eamcetEcetRank")
    String eamcetEcetRank;

    @JsonProperty("ugAggregate")
    String ugAggregate;

    @JsonProperty("currentBacklogs")
    String currentBacklogs;

    @JsonProperty("historyOfBacklogs")
    String historyOfBacklogs;

    @JsonProperty("skills")
    List<String> skills;

    @JsonProperty("languages")
    List<String> languages;

    @JsonProperty("internships")
    List<Internship> internships;

    @JsonProperty("courses")
    List<Course> courses;

    @JsonProperty("address")
    private Address address;
}
