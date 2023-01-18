package com.example.locus.Security.Service;

import com.example.locus.Security.Dto.CreatePcRequest;
import com.example.locus.Security.Dto.RegisterNewStudents;
import com.example.locus.Security.Model.UserModel;

import java.util.List;

public interface UserManager {
    boolean registerNewStudents(RegisterNewStudents registerNewStudents);

    boolean deletePc(String pcUsername);

    boolean createPc(CreatePcRequest createPcRequest);

    boolean changePassword();

    List<UserModel> fetchAllPc();

    List<UserModel> fetchAllStudents();
}
