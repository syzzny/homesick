import React from 'react'
import {
    ContentWrap, BestTitle, BestWrap, BestItemWrap, BestItem, ArrowWrap, BestInfoWrap, BestWrapTop,
    BestInfo, BestImgWrap, More, BestImg
} from '../styles/StyleComp'

export default function Kitchen() {
    return (
        <div>
            <ContentWrap>
                <BestWrapTop>
                    <BestWrap>
                        <BestTitle>주방 분위기를 바꿔보세요</BestTitle>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/plate.png`} alt="" />
                    </BestWrap>
                    <div>
                        <More href="">더보기</More>
                    </div>
                </BestWrapTop>
                <BestItemWrap>
                    <BestItem>
                        <BestImgWrap><BestImg src={`${process.env.PUBLIC_URL}/assets/img/kitchen01.png`} alt="" /></BestImgWrap>
                        <BestInfoWrap>
                            <BestInfo>4년동안 요리조리 바꿔가며 <br></br>- 질릴 틈 없는 나의 집</BestInfo>
                            <ArrowWrap><img src={`${process.env.PUBLIC_URL}/assets/img/goarrow.png`} alt="arrow" /></ArrowWrap>
                        </BestInfoWrap>
                    </BestItem>
                    <BestItem>
                        <BestImgWrap><BestImg src={`${process.env.PUBLIC_URL}/assets/img/kitchen02.png`} alt="" /></BestImgWrap>
                        <BestInfoWrap>
                            <BestInfo>예쁜 데크와 평상을 품은<br></br> 아늑한 복층집</BestInfo>
                            <ArrowWrap><img src={`${process.env.PUBLIC_URL}/assets/img/goarrow.png`} alt="arrow" /></ArrowWrap>
                        </BestInfoWrap>
                    </BestItem>
                    <BestItem>
                        <BestImgWrap><BestImg src={`${process.env.PUBLIC_URL}/assets/img/kitchen03.png`} alt="" /></BestImgWrap>
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
