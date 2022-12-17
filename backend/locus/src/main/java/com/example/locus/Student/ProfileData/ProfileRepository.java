package com.example.locus.Student.ProfileData;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public interface ProfileRepository extends MongoRepository<ProfileData,String> {

    @Query(value = "{userId: '?0'}",fields = "{_id: 0,userId: 0}")
    Optional<ProfileData> findProfileByUserId(String userId);
}



