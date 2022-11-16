/*
 * @Author: 赵东升
 * @Date: 2022/11/16
 */
import {request} from "../utils/request";

export function _banner (params: object) {
    return request({
        url: '/banner',
        method: 'GET',
        params
    })
}