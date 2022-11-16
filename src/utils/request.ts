/*
 * @Author: 赵东升
 * @Date: 2022/11/16
 */

import axios from 'axios';
// import { getToken } from './token'
// import { history } from './history'

const request = axios.create({
    baseURL: 'https://music-erkelost.vercel.app/',
    timeout: 5000
})
console.log('requestrequestrequest', request);
request.interceptors.request.use((config) => {
    // const token = getToken()
    // if (token) {
    //     config.headers.authorization =
    // }
    return config
}, (error) => {
    return Promise.reject(error)
})

request.interceptors.response.use((response) => {
    return response.data
}, error => {
    console.log('error.response', error);
    // if (error.response.status === 401) {
    //     history.push('/login')
    // }
    return Promise.reject(error)
})

export { request }