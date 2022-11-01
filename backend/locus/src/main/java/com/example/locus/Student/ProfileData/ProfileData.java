package com.example.locus.Student.ProfileData;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class ProfileData {
    @Id
    String rollNumber;
    String email;
    String firstName;
    String lastName;
    String department;
    String pincode;
    String district;
    String address;
    String degree;
    String parentName;
    String tenthGrade;
    String interGrade;

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getParentName() {
        return parentName;
    }

    public void setParentName(String parentName) {
        this.parentName = parentName;
    }

    public String getTenthGrade() {
        return tenthGrade;
    }

    public void setTenthGrade(String tenthGrade) {
        this.tenthGrade = tenthGrade;
    }

    public String getInterGrade() {
        return interGrade;
    }

    public void setInterGrade(String interGrade) {
        this.interGrade = interGrade;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
