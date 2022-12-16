package com.example.locus.Common.Announcements;

import com.example.locus.Common.Announcements.Dto.AnnouncementRequest;
import com.example.locus.Common.Announcements.Model.Announcement;

import java.util.List;

public interface AnnouncementService {
    List<Announcement> getAllAnnouncement();
    boolean createNewAnnouncement(AnnouncementRequest createRequest);

    boolean deleteAnnouncement(String announcementId);

    boolean editAnnouncement(AnnouncementRequest announcementId);
}
