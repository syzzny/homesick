import React from 'react'
import {
    ContentWrap, BestTitle, BestWrap, BestItemWrap, BestItem, ArrowWrap, BestInfoWrap, BestWrapTop, ExImgWrapf,
    BestInfo, BestImgWrap, More, ExWrapf, ExWraps, ExImgWraps, ExWrapt, ExImgWrapt, ExImg
} from '../styles/StyleComp'

export default function Exhibition() {
    return (
        <div>
            <ContentWrap>
                <BestWrapTop>
                    <BestWrap>
                        <BestTitle>오늘의 기획전</BestTitle>
                    </BestWrap>
                    <div>
                        <More href="">더보기</More>
                    </div>
                </BestWrapTop>
                <BestItemWrap>
                    <BestItem>
                        <ExWrapf>
                            <ExImgWrapf><ExImg src={`${process.env.PUBLIC_URL}/assets/img/exhibition01.png`} alt="" /></ExImgWrapf>
                        </ExWrapf>
                        <BestInfoWrap>
                            <BestInfo>4년동안 요리조리 바꿔가며 <br></br>- 질릴 틈 없는 나의 집</BestInfo>
                            <ArrowWrap><img src={`${process.env.PUBLIC_URL}/assets/img/goarrow.png`} alt="arrow" /></ArrowWrap>
                        </BestInfoWrap>
                    </BestItem>
                    <BestItem>
                        <ExWraps>
                            <ExImgWraps><ExImg src={`${process.env.PUBLIC_URL}/assets/img/exhibition02.png`} alt=""/></ExImgWraps>
                        </ExWraps>
                        <BestInfoWrap>
                            <BestInfo>예쁜 데크와 평상을 품은<br></br> 아늑한 복층집</BestInfo>
                            <ArrowWrap><img src={`${process.env.PUBLIC_URL}/assets/img/goarrow.png`} alt="arrow" /></ArrowWrap>
                        </BestInfoWrap>
                    </BestItem>
                    <BestItem>
                        <ExWrapt>
                            <ExImgWrapt><ExImg src={`${process.env.PUBLIC_URL}/assets/img/exhibition01.png`} alt="" /></ExImgWrapt>
                        </ExWrapt>
                        <BestInfoWrap>
                            <BestInfo>홈캉스를 집에서! <br /> feat. 30평대 반전 온천수 욕실</BestInfo>
                            <ArrowWrap><img src={`${process.env.PUBLIC_URL}/assets/img/goarrow.png`} alt="arrow" /></ArrowWrap>
                        </BestInfoWrap>
                    </BestItem>
                </BestItemWrap>
            </ContentWrap>
        </div>
    )
}
