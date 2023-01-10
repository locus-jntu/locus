package com.example.locus.Security;

import com.example.locus.Security.Model.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<UserModel,String> {

    @Query("{username: '?0'}")
    UserModel findUserByUsername(String username);
}
