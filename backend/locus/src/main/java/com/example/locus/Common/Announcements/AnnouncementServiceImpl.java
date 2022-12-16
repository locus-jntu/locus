package com.example.locus.Common.Announcements;

import com.example.locus.Common.Announcements.Dto.AnnouncementRequest;
import com.example.locus.Common.Announcements.Model.Announcement;
import org.apache.catalina.User;
import org.bson.types.ObjectId;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class AnnouncementServiceImpl implements AnnouncementService{

    @Autowired
    AnnouncementRepository announcementRepository;

    @Override
    public List<Announcement> getAllAnnouncement() {

        // Need to add pagination to announcements. Fetch 20 announcements at a time.
        System.out.println(announcementRepository.findAll());
        return announcementRepository.findAll();
    }

    @Override
    public boolean createNewAnnouncement(AnnouncementRequest createRequest) {
        Announcement announcement = new Announcement();
        announcement.setDescription(createRequest.getDescription());
        announcement.setDate(new Date());
        announcement.setTitle(createRequest.getTitle());

        announcementRepository.save(announcement);
        return true;
    }

    @Override
    public boolean editAnnouncement(AnnouncementRequest announcementRequest){
        String announcementId = announcementRequest.getId();
       if(announcementRepository.findById(announcementId).isPresent()){
           Announcement announcement = announcementRepository.findById(announcementId).get();
           announcement.setTitle(announcementRequest.getTitle());
           announcement.setDescription(announcementRequest.getDescription());
           announcement.setDate(new Date());
           announcementRepository.save(announcement);
           return true;
       }
       return false;
    }

    @Override
    public boolean deleteAnnouncement(String announcementId) {
        if(announcementRepository.findById(announcementId).isPresent()){
            announcementRepository.deleteById(announcementId);
            return true;
        }
        return false;
    }
}
