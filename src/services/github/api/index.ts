import axios from 'axios';

import { requestMonitor, responseMonitor } from '../../utils';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

githubApi.interceptors.request.use(config => {
    requestMonitor(config);

    return config;
});

githubApi.interceptors.response.use(config => {
    responseMonitor(config);

    return config;
});

export { githubApi };
