/*
 * @Author: 赵东升
 * @Date: 2022/11/16
 */
import header from './header.module.css'
import { Input } from 'antd';
import React, {useState} from 'react';
import { useNavigate } from "react-router";

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

    const [selectId, setId] = useState(1)

    const navigate = useNavigate()

    const onChange = (id: number, path: string) => {
        setId(id)
        navigate(path, { replace: true })
    }

    return(
        <div className={header.main}>
            <div className={header.content}>
                <div className={header.left}>
                    <ul>
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
                        123
                    </div>
                    <div className={header.box3}>
                        e3w45
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header