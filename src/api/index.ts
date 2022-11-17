/*
 * @Author: 赵东升
 * @Date: 2022/11/16
 */
import {request} from "../utils/request";

// banner轮播图
export function _banner (params: object) {
    return request({
        url: '/banner',
        method: 'GET',
        params
    })
}

// 二维码登陆生成key
export function _createQrKey () {
    return request({
        url: '/login/qr/key',
        method: 'GET'
    })
}

// 二维码生成接口
export function _createQrCode (params: object) {
    return request({
        url: '/login/qr/create',
        method: 'GET',
        params
    })
}

// 登陆状态
export function _loginCheck (params: object) {
    return request({
        url: '/login/qr/check',
        method: 'GET',
        params
    })
}