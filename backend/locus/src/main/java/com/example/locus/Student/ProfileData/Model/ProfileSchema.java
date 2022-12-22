package com.example.locus.Student.ProfileData.Model;

import lombok.Data;

import java.util.List;

@Data
class Field {
    String name;
    String type;
    String inputType;
    List<String> values;
}

@Data
public class ProfileSchema {
    List<Field> fixed;
}
