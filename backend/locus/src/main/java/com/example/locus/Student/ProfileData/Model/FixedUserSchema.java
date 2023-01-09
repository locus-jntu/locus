package com.example.locus.Student.ProfileData.Model;

import lombok.Data;

import java.util.List;

@Data
public class FixedUserSchema {
    String roll_number;

    String mail_id;

    String first_name;

    String last_name;

    String department;

    String degree;

    String parent_name;

    String ssc_gpa;

    String intermediate_diploma_percentage;

    String contact_number;

    String passing_year;

    String eamcet_rank;

    String ug_aggregate_gpa;

    String history_of_backlogs;

    String current_backlogs;

    List<String> skills;

    List<String> languages;

    List<Internship> internships;

    List<Course> courses;

    private Address address;
}

