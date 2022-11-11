package com.example.locus.Common.Announcements;

import com.example.locus.Common.Announcements.Dto.CreateRequest;
import com.example.locus.Common.Announcements.Model.Announcement;
import org.springframework.beans.factory.annotation.Autowired;
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
        return announcementRepository.findAll();
    }

    @Override
    public boolean createNewAnnouncement(CreateRequest createRequest) {
        Announcement announcement = new Announcement();
        announcement.setMessage(createRequest.getMessage());
        announcement.setDate(new Date());

        announcementRepository.save(announcement);
        return true;
    }
}
