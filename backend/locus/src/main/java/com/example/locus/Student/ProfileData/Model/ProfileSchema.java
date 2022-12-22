package com.example.locus.Student.ProfileData.Model;

import lombok.Data;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
class Field {
    String name;
    String type;
    String inputType;
    List<String> values;
    String placeholder;
}

@Data
public class ProfileSchema {
    Map<String,List<Field>> fixed;
}
