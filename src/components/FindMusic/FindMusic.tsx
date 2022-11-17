/*
 * @Author: 赵东升
 * @Date: 2022/11/16
 */

import React, {useEffect, useState} from "react";
import { useStore } from "../../store";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { observer } from 'mobx-react-lite'
import { Keyboard, Pagination, Navigation } from "swiper";

const FindMusic: React.FC = () => {
    const { bannerStore } = useStore()

    const [bgc, setBgc] = useState('')
    useEffect( () => {
        bannerStore.getBanner()
        console.log('@@@@@@', bannerStore.banners.length)
        if (bannerStore.banners.length > 0) {
            setBgc(bannerStore.banners[0].imageUrl)
        }
    }, [])


    return(
        <div style={{position: "relative",width: '100%',height: '400px',overflow: 'hidden'}}>
            <div style={{backgroundImage: `url(${bgc})`,width: '9999px',height: '400px',backgroundSize: 'cover', position: "absolute",opacity: '0.6'}} />
            <Swiper
                style={{width: '950px',position: "absolute", left: '50%',transform: `translateX(-50%)`}}
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
                onSlideChange={(val) => {
                    let activeIndex = val.activeIndex
                    setBgc(bannerStore.banners[activeIndex].imageUrl)
                }}
            >
                {
                    bannerStore.banners.map((item: any, index:number) =>
                        <SwiperSlide key={index}>
                            <img src={item.imageUrl} alt=""/>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>

    )
}

export default observer(FindMusic)