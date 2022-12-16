package com.example.locus.Common.Announcements;

import com.example.locus.Common.Announcements.Dto.AnnouncementRequest;
import com.example.locus.Common.Announcements.Model.Announcement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class AnnouncementController {

    @Autowired
    AnnouncementService announcementService;
    @GetMapping(value = "/api/shared/getAllAnnouncements")
    public Map<String,Object> getAllAnnouncements(){
        Map<String, Object> payload = new HashMap<>();
        List<Announcement> announcements = announcementService.getAllAnnouncement();
        payload.put("announcements",announcements);
        return payload;
    }

    // To be accessed by tpo only. Need to add role based authorization.
    @PostMapping(value ="/api/tpo/createNewAnnouncements")
    public boolean createNewAnnouncement(@RequestBody AnnouncementRequest createRequest){
        return announcementService.createNewAnnouncement(createRequest);
    }

    @GetMapping(value = "/api/tpo/deleteAnnouncement")
    public boolean deleteAnnouncement(@RequestParam(name = "announcementId") String announcementId){
        return announcementService.deleteAnnouncement(announcementId);
    }

    @PostMapping(value = "/api/tpo/editAnnouncement")
    public boolean editAnnouncement(@RequestBody AnnouncementRequest editRequest){

       return announcementService.editAnnouncement(editRequest);
    }
}
