import React from 'react'
import Head from './Head'
import Mob_cate from './Mob_cate'
import Best from './Best'
import Kitchen from './Kitchen'
import Category from './Category'
import { Wrap, MainImgWrap, MainWrap, MobImg, MainTitle, StyledButton, MobWrap, DetailLink, MainTextWrap, MainImg, ArrowUp } from '../styles/StyleComp'
import Exhibition from './Exhibition'
import Footer from './Footer'
import 'remixicon/fonts/remixicon.css'
// import { RiArrowRightUpLine } from 'remixicon ';


export default function Index() {
    return (
        <div>
            <Head />
            <Wrap>
                <MainWrap>
                    <MainImgWrap>
                        <MainImg src={`${process.env.PUBLIC_URL}/assets/img/mainimg.png`} alt="" />
                    </MainImgWrap>
                    <MainTextWrap>
                        <MainTitle>인테리어 위시리스트, 오히려 비웠더니 이런 집을 얻었어요!</MainTitle>
                        <StyledButton>
                            <DetailLink href="">자세히 보기</DetailLink>
                            {/* <img src={`${process.env.PUBLIC_URL}/assets/img/arrow.png`} alt="" /> */}
                            <i class="ri-arrow-right-up-line"></i>
                        </StyledButton>
                    </MainTextWrap>
                </MainWrap>
            </Wrap>
            <MobWrap>
                <MobImg src={`${process.env.PUBLIC_URL}/assets/img/mobile_main.png`} alt="" />
            </MobWrap>
            <Mob_cate/>
            <Best />
            <Kitchen />
            <Category />
            <Exhibition />
            <Footer />
        </div>
    )
}
