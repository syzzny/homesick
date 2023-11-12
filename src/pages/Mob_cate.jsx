import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import {
    MobCateWrap, BestWrap, BestTitle, MobSwiper,MobCateTxt, MobCateImg
} from '../styles/StyleComp'

export default function Mob_cate() {
    return (
        <div>
            <MobCateWrap>
                <BestWrap>
                    <BestTitle>카테고리별 상품찾기</BestTitle>
                </BestWrap>
                <MobSwiper>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        // modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <MobCateImg src={`${process.env.PUBLIC_URL}/assets/img/furniture.png`} alt="" />
                            <MobCateTxt>가구</MobCateTxt>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MobCateImg src={`${process.env.PUBLIC_URL}/assets/img/bad.png`} alt="" />
                            <MobCateTxt>패브릭</MobCateTxt>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MobCateImg src={`${process.env.PUBLIC_URL}/assets/img/elect.png`} alt="" />
                            <MobCateTxt>가전전자</MobCateTxt>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MobCateImg src={`${process.env.PUBLIC_URL}/assets/img/bath.png`} alt="" />
                            <MobCateTxt>욕실</MobCateTxt>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MobCateImg src={`${process.env.PUBLIC_URL}/assets/img/light.png`} alt="" />
                            <MobCateTxt>조명</MobCateTxt>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MobCateImg src={`${process.env.PUBLIC_URL}/assets/img/kitchen.png`} alt="" />
                            <MobCateTxt>주방용품</MobCateTxt>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MobCateImg src={`${process.env.PUBLIC_URL}/assets/img/life.png`} alt="" />
                            <MobCateTxt>생활용품</MobCateTxt>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MobCateImg src={`${process.env.PUBLIC_URL}/assets/img/lifeitem.png`} alt="" />
                            <MobCateTxt>생필품</MobCateTxt>
                        </SwiperSlide>
                    </Swiper>
                </MobSwiper>
            </MobCateWrap>
        </div>
    );
}

