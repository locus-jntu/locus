package com.example.locus.Student.ProfileData;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.Data;
import org.bson.types.ObjectId;
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
@Data
public class ProfileData {

    @MongoId
    @JsonSerialize(using = ToStringSerializer.class)
    ObjectId _id;

    String userId;

    String rollNumber;

    String email;

    String firstName;

    String lastName;

    String department;

    String degree;

    String parentName;

    String tenthGrade;

    String interGrade;

    String mobile;

    String passingYear;

    String eamcetEcetRank;

    String ugAggregate;

    String currentBacklogs;

    String historyOfBacklogs;

    List<String> skills;

    List<String> languages;

    List<Internship> internships;

    List<Course> courses;

    private Address address;
}
