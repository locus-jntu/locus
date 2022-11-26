import { atom } from 'recoil';

export const announcementsAtom = atom({
    key: '_announcements',
    default: []
});

export const companiesAtom = atom({
    key: '_companies',
    default: []
});

export const defaultKeysAtom = atom({
    key: '_defKeys',
    default: []
});

export const companieyKeysAtom = atom({
    key: '_companyKeys',
    default: []
});