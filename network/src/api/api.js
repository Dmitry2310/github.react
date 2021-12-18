import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2c764cb3-4b05-4ea7-9034-a0dec41567b0'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    followAPI(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        });
    },
    unFollowAPI(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        });
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
}

export const authAPI = {
    getMe() {
        return instance.get(`/auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`/auth/login`);
    }
}

export default usersAPI;

