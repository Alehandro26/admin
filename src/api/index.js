import axios from "axios";
import router from "@/router";

const useMock = true;
const userData = {
    name: 'admin',
    password: 'admin'
}

const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});

api.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        if (router.currentRoute.name !== 'login') {
            router.push({name: 'login'});
        }
      }
      return Promise.reject(error);
    }
);

export async function login(user, password) {
    if (useMock) {
        if (user === userData.name && password === userData.password) {
            router.push('/menu/dashboard/');
            return true;
        }
        return false;
    }
    try {
        const {data} = await api.post('/admin-panel/sign-in', {
            username: user,
            password: password
        })
        localStorage.setItem('token', data.token);

        api.defaults.headers['Authorization'] = `Bearer ${data.token}`;
        router.push('/menu/dashboard/');

        return data;
    } catch {
        return false;
    }
}

export async function getStatistics(start, end) {
    if (useMock) {
        return {
            activeSubscribers: 10,
            startButtonClicks: 125,
            totalSubscribers: 54,
            unsubscribedUsers: 17
        };
    }
    try {
        const {data} = await api.get('/admin-panel/statistics', {
            params: {
                startDate: start,
                endDate: end
            }
        })
        return data;
    } catch {
        return false;
    }
}

export async function getSettings() {
    try {
        const {data} = await api.get('/admin-panel/settings');
        return data;
    } catch {
        return false;
    }
}


export async function sendSettings(promocode, link) {
    try {
        const {data} = await api.post('/admin-panel/settings', {
            promoCode: promocode,
            promoCodeLink: link
        })

        return data;
    } catch {
        return false;
    }
}