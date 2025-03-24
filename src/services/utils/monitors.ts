import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export function requestMonitor(config: InternalAxiosRequestConfig<any>) {
    console.time(config.url);
    console.log(`REQUEST: ${config.url}: `,
        JSON.stringify(config, undefined, 4));
}

export function responseMonitor(config: AxiosResponse<any, any>) {
    console.timeEnd(config.config.url);
    console.log(`RESPONSE: ${config.config.url}: `,
        JSON.stringify(config.data, undefined, 4));
}
