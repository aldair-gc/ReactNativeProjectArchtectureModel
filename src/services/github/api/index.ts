import axios, { AxiosError } from 'axios';

import { catchError, requestMonitor, responseMonitor } from '../../utils';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

githubApi.interceptors.request.use(config => {
    requestMonitor(config);

    return config;
}, error => {
    catchError(error);
});

githubApi.interceptors.response.use(config => {
    responseMonitor(config);

    return config;
}, error => {
    catchError(error);
});

export { githubApi };
