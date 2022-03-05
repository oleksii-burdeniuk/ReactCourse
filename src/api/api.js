import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'df4ae7bf-c94f-4e85-a489-e3be0f7c5265'
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    unFollowApi(id) {
        return instance.delete(`follow/${id}`)
    },
    followApi(id) {
        return instance.post(`follow/${id}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

