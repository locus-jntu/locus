package com.example.locus.Common.Announcements.Model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Date;

@Data
public class Announcement {
    String title;
    String description;
    Date date;

    @JsonSerialize(using = ToStringSerializer.class)
    private @MongoId ObjectId id;
}
