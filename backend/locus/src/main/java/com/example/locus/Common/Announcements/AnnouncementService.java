package com.example.locus.Common.Announcements;

import com.example.locus.Common.Announcements.Dto.CreateRequest;
import com.example.locus.Common.Announcements.Model.Announcement;

import java.util.List;

public interface AnnouncementService {
    List<Announcement> getAllAnnouncement();
    boolean createNewAnnouncement(CreateRequest createRequest);

}
