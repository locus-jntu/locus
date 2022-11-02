package com.example.locus.Student.ProfileData;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class ProfileData {

    public class Address{
        public String streetAddress;
        public String streetAddress2;
        public String district;
        public String state;
        public String city;
        public String pin;
    }

    public class Course{
        public String cname;
        public String org;
    }

    public class Internship{
        public String role;
        public String org;
        public String dur;
    }

    @Id
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

    public Address address;
    public List<String> skills;
    public List<String> languages;
    public List<Course> courses;
    public List<Internship> internships;

}
