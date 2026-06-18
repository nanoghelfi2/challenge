import { handleHttpResponse } from './handleHttpResponse';

//const BASE_URL = import.meta.env.VITE_API_URL;
const BASE_URL = 'https://backend-challenge-iol.com';

export const http = async ({ url, method = 'GET', data, headers = {}, signal }) => {
    const config = {
        method,
        headers: {
            Accept: 'application/json',
            ...headers,
        },
        signal,
    };

    if (data) {
        if (data instanceof FormData) {
            config.body = data;
        } else {
            config.headers['Content-Type'] = 'application/json';
            config.body = JSON.stringify(data);
        }
    }
    const urlStartWithHttp = url.startsWith('http');
    const baseUrl = urlStartWithHttp ? '' : BASE_URL;
    const response = await fetch(`${baseUrl}${url}`, config);

    return await handleHttpResponse(response);
};

export const get = async (url, options = {}) => {
    return await http({ url, method: 'GET', ...options });
};

export const post = async (url, data, options = {}) => {
    return await http({ url, method: 'POST', data, ...options });
};

export const put = async (url, data, options = {}) => {
    return await http({ url, method: 'PUT', data, ...options });
};

export const del = async (url, options = {}) => {
    return await http({ url, method: 'DELETE', ...options });
};

export default {
    get,
    post,
    put,
    delete: del,
};
