/*
 * @Author: 赵东升
 * @Date: 2022/11/16
 */

import { makeAutoObservable } from 'mobx'
import { _banner } from "../api";

class BannerStore {
    banners = []

    constructor() {
        makeAutoObservable(this)
    }

    getBanner = async () => {
        const res = await _banner({ type: '0'})
        this.banners = await res.banners
    }

}

export default BannerStore