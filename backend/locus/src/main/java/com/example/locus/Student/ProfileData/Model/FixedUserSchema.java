package com.example.locus.Student.ProfileData.Model;

import lombok.Data;

import java.util.List;

@Data
public class FixedUserSchema {
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

