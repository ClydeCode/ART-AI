import axios from 'axios';

export const instance = axios.create({
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json'
    // },
    baseURL: process.env.REACT_APP_WEB_API
});