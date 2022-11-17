/*
 * @Author: 赵东升
 * @Date: 2022/11/16
 */
import header from './header.module.css'
import { Input } from 'antd';
import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router";
import avatar from '../../assets/Ellipse.svg'
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";
import { Drawer } from 'antd';

const Header: React.FC = () => {
    const list = [{
        id: 1,
        name: '发现音乐',
        path: '/'
    }, {
        id: 2,
        name: '我的音乐',
        path: 'myMusic'
    }, {
        id: 3,
        name: '关注',
        path: 'attention'
    }, {
        id: 4,
        name: '商城',
        path: 'shopping'
    }, {
        id: 5,
        name: '音乐人',
        path: 'musician'
    }, {
        id: 6,
        name: '下载客户端',
        path: 'download'
    }]

    const { loginStore } = useStore()

    const [selectId, setId] = useState(1)

    const navigate = useNavigate()

    const onChange = (id: number, path: string) => {
        setId(id)
        navigate(path, { replace: true })
    }

    const [open, setOpen] = useState(false);

    const login = () => {
        loginStore.getQrCode()
        setOpen(true);
        setInterval(() => {
            loginStore.getLoginStatus()
        }, 1000)
    }
    const onClose = () => {
        setOpen(false);
    };



    return(
        <div className={header.main}>
            <div className={header.content}>
                <div className={header.left}>
                    <ul style={{marginLeft: '-40px'}}>
                        {
                            list.map((item, index) =>
                                <li key={item.id} onClick={() => onChange(item.id, item.path)} className={index + 1 == selectId ? header.selected: header.unSelect}>{ item.name }</li>
                            )
                        }
                    </ul>
                </div>
                <div className={header.right}>
                    <div className={header.box1}>
                        <Input style={{borderRadius: '50px'}} placeholder="音乐/视频/电台/用户" />
                    </div>
                    <div className={header.box2}>
                        <div>1234245</div>
                        {/*{*/}
                        {/*    loginStore.qrCodeUrl && <img style={{width: '50px',height: '50px'}} src={loginStore.qrCodeUrl} alt=""/>*/}
                        {/*}*/}
                    </div>
                    <div className={header.box3}>
                        <img src={avatar} onClick={login} alt=""/>
                    </div>
                </div>
            </div>
            <Drawer title="登陆" placement="top" onClose={onClose} open={open}>
                {
                    loginStore.qrCodeUrl && <img style={{width: '200px',height: '200px'}} src={loginStore.qrCodeUrl} alt=""/>
                }
            </Drawer>
        </div>
    )
}

export default observer(Header)