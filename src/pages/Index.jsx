import React from 'react'
import Head from './Head'
import Best from './Best'
import { Wrap, MainImgWrap, MainWrap, MainTitle, DetailButton, DetailLink, MainTextWrap } from '../styles/StyleComp'

export default function index() {
    return (
        <div>
            <Head />
            <Wrap>
                <MainWrap>
                    <MainImgWrap>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/mainimg.png`} alt="" />
                    </MainImgWrap>
                    <MainTextWrap>
                        <MainTitle>인테리어 위시리스트, 오히려 비웠더니 이런 집을 얻었어요!</MainTitle>
                        <DetailButton>
                            <DetailLink href="">자세히 보기</DetailLink>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/arrow.png`} alt="" />
                        </DetailButton>
                    </MainTextWrap>
                </MainWrap>
            </Wrap>
            <Best/>
        </div>
    )
}
