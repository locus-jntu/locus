import { atom } from 'recoil';

export const announcementsAtom = atom({
    key: '_announcements',
    default: []
});

export const companiesAtom = atom({
    key: '_companies',
    default: []
});