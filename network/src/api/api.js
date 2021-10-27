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
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    }
}

export const authAPI = {
    getMe() {
        return instance.get(`/auth/me`);
    }
}

export default usersAPI;

