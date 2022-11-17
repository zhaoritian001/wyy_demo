/*
 * @Author: 赵东升
 * @Date: 2022/11/17
 */
import { makeAutoObservable } from 'mobx'
import { _createQrKey, _createQrCode } from "../api";

class LoginStore {
    qrCodeUrl = ''
    constructor() {
        makeAutoObservable(this)
    }

    getQrCode = async () => {
        const key = await _createQrKey()
        const res = await _createQrCode({key: key.data.unikey, qrimg: true})
        this.qrCodeUrl = await res.data.qrimg
    }

}
export default LoginStore