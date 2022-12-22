package com.example.locus.Student.ProfileData.Repository;

import com.example.locus.Student.ProfileData.Model.ProfileData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProfileRepository extends MongoRepository<ProfileData,String> {

    @Query(value = "{userId: '?0'}")
    Optional<ProfileData> findProfileByUserId(String userId);
}



