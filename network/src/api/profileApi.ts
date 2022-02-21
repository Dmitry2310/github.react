import { PhotosType, ProfileType } from '../redux/types/types';
import { instance, ResponseTypes } from './api';

type SavePhotoResponse = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId).then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status: status }).then(response => response.data) as Promise<ResponseTypes>
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put<any>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data) as Promise<ResponseTypes<SavePhotoResponse>>
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile).then(response => response.data) as Promise<ResponseTypes>
    }
}

export default profileAPI;


