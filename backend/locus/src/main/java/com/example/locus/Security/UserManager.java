package com.example.locus.Security;

import com.example.locus.Security.Dto.RegisterNewStudents;

public interface UserManager {
    boolean registerNewStudents(RegisterNewStudents registerNewStudents);
    boolean changePassword();
}
