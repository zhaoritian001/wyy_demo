/*
 * @Author: 赵东升
 * @Date: 2022/11/17
 */
import { makeAutoObservable } from 'mobx'
import {_createQrKey, _createQrCode, _loginCheck} from "../api";

class LoginStore {
    qrCodeUrl: string = ""
    key: string = ""

    constructor() {
        makeAutoObservable(this)
    }

    getQrCode = async () => {
        const key = await _createQrKey()
        this.key = key.data.unikey
        const res = await _createQrCode({key: key.data.unikey, qrimg: true})
        this.qrCodeUrl = await res.data.qrimg
    }

    getLoginStatus = async () => {
        const res = await _loginCheck({ key: this.key })
        console.log('登陆状态', res.message)
    }

}
export default LoginStore