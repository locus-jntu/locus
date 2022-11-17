package com.example.locus.Common.Announcements;

import com.example.locus.Common.Announcements.Dto.CreateRequest;
import com.example.locus.Common.Announcements.Model.Announcement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.CacheRequest;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
public class AnnouncementController {

    @Autowired
    AnnouncementService announcementService;

    @GetMapping(value = "/shared/getAllAnnouncements")
    public Map<String,Object> getAllAnnouncements(){
        Map<String, Object> payload = new HashMap<>();
        List<Announcement> announcements = announcementService.getAllAnnouncement();
        payload.put("announcements",announcements);
        return payload;
    }

    // To be accessed by tpo only. Need to add role based authorization.
    @PostMapping(value ="/shared/createNewAnnouncements")
    public boolean createNewAnnouncement(@RequestBody CreateRequest createRequest){
        return announcementService.createNewAnnouncement(createRequest);
    }
}
