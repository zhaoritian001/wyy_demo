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
import { Keyboard, Pagination, Navigation } from "swiper";

const FindMusic: React.FC = () => {
    const { bannerStore } = useStore()

    const [list, setList] = useState([])
    useEffect(() => {
        bannerStore.getBanner()
    }, [])

    return(
        <div>
            <div style={{width: '100%'}}>
            </div>
            <Swiper
                style={{width: '900px'}}
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

export default FindMusic