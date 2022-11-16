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

    getBanner = () => {
        _banner({ type: '0'}).then(res => {
            this.banners = res.banners
            console.log('resresresres', res.banners);
        })
    }

}

export default BannerStore