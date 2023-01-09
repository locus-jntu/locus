package com.example.locus.Student.ProfileData.Model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;


@Document
@Data
public class ProfileData {

    @MongoId
    @JsonSerialize(using = ToStringSerializer.class)
    ObjectId _id;

    String userId;

    FixedUserSchema fixedUserSchema;
}
