package com.example.locus.Student.ProfileData.Repository;

import com.example.locus.Student.ProfileData.Model.ProfileSchema;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileSchemaRepository extends MongoRepository<ProfileSchema, String> {
}
