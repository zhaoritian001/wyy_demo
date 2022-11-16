/*
 * @Author: 赵东升
 * @Date: 2022/11/16
 */

import React from 'react'
import BannerStore from './banner.Store'

class RootStore {
    constructor() {
        this.bannerStore = new BannerStore
    }
}
const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }