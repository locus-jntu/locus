package com.example.locus.Security;

import com.example.locus.Common.Enum.UserRole;
import com.example.locus.Security.Model.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<UserModel,String> {

    @Query("{username: '?0'}")
    UserModel findUserByUsername(String username);

    @Query(value = "{roles: '?0'}",fields = "{'username':1}")
    List<UserModel> findUserByRole(UserRole role);
}
