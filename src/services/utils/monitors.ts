import { AxiosError, AxiosResponse, InternalAxiosRequestConfig, isAxiosError } from 'axios';

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


export function catchError(error: AxiosError) {
    if (isAxiosError(error)) {
        console.timeEnd(error.config?.url);
        console.log(`ERROR: ${error.config?.url}: `,
            JSON.stringify({
                message: error.message,
                errorStatus: error.status,
                errorCode: error.code
            }, undefined, 4));

        return;
    }

    console.log(`UNKNOW ERROR: ${error}: `,
        JSON.stringify(error, undefined, 4));
}
