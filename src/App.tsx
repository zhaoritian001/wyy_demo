import React, { FC } from 'react';
import "./App.less";
import {
    Button,
    ConfigProvider
} from 'antd';
import { SketchPicker } from 'react-color';
import { useState } from 'react'
import Layout from './components/Layout/Layout'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import FindMusic from "./components/FindMusic/FindMusic";
import MyMusic from "./components/MyMusic/MyMusic";
import Attention from "./components/Attention/Attention";
import Shopping from "./components/Shopping/Shopping";
import Musician from "./components/Musician/Musician";
import Download from "./components/Download/Download";


ConfigProvider.config({
    theme: { primaryColor: 'green', }
});

const App: FC = () => {
    const [color, setColor] = useState({
        primaryColor: '#1890ff',
        errorColor: '#ff4d4f',
        warningColor: '#faad14',
        successColor: '#52c41a',
        infoColor: '#1890ff',
    });

    const onColorChange = (nextColor: Partial<typeof color>) => {
        const mergedNextColor = {
            ...color,
            ...nextColor,
        };
        setColor(mergedNextColor);
        ConfigProvider.config({
            theme: mergedNextColor,
        });
    };


    return(
        <ConfigProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} >
                            <Route path='/' element={<FindMusic />} />
                            <Route path='myMusic' element={<MyMusic />} />
                            <Route path='attention' element={<Attention />} />
                            <Route path='shopping' element={<Shopping />} />
                            <Route path='musician' element={<Musician />} />
                            <Route path='download' element={<Download />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            {/*<div>*/}
            {/*    <SketchPicker*/}
            {/*        presetColors={['#1890ff', '#25b864', '#ff6f00']}*/}
            {/*        color={color.primaryColor}*/}
            {/*        onChange={({hex}) => {*/}
            {/*            onColorChange({*/}
            {/*                primaryColor: hex,*/}
            {/*            });*/}
            {/*        }}*/}
            {/*    />*/}
            {/*    <Button type="primary">Primary Button</Button>*/}
            {/*    <Button type="primary" danger>*/}
            {/*        Primary*/}
            {/*    </Button>*/}
            {/*</div>*/}
        </ConfigProvider>
    )
}

export default App
