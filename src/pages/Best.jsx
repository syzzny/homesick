import React from 'react'
import {
    ContentWrap, BestTitle, BestWrap, BestItemWrap, BestItem, ArrowWrap, BestInfoWrap, BestWrapTop,
    BestInfo, BestImgWrap, More, BestImg, BestIcon, ArrowImg
} from '../styles/StyleComp'

export default function Best() {
    return (
        <div>
            <ContentWrap>
                <BestWrapTop>
                    <BestWrap>
                        <BestTitle>주간 베스트</BestTitle>
                        <BestIcon src={`${process.env.PUBLIC_URL}/assets/img/trophy.png`} alt="" />
                    </BestWrap>
                    <div>
                        <More href="">더보기</More>
                    </div>
                </BestWrapTop>
                <BestItemWrap>
                    <BestItem>
                        <BestImgWrap><BestImg src={`${process.env.PUBLIC_URL}/assets/img/bestimg01.png`} alt="" /></BestImgWrap>
                        <BestInfoWrap>
                            <BestInfo>뉴트럴톤 무드 충만하게! 북유럽을 품은 집 in 하와이</BestInfo>
                            <ArrowWrap><ArrowImg src={`${process.env.PUBLIC_URL}/assets/img/goarrow.png`} alt="arrow" /></ArrowWrap>
                        </BestInfoWrap>
                    </BestItem>
                    <BestItem>
                        <BestImgWrap><BestImg src={`${process.env.PUBLIC_URL}/assets/img/bestimg02.png`} alt="" /></BestImgWrap>
                        <BestInfoWrap>
                            <BestInfo>셀프 시공으로 충분해! 룸메이트와 함께 사는 22평</BestInfo>
                            <ArrowWrap><ArrowImg src={`${process.env.PUBLIC_URL}/assets/img/goarrow.png`} alt="arrow" /></ArrowWrap>
                        </BestInfoWrap>
                    </BestItem>
                    <BestItem>
                        <BestImgWrap><BestImg src={`${process.env.PUBLIC_URL}/assets/img/bestimg03.png`} alt="" /></BestImgWrap>
                        <BestInfoWrap>
                            <BestInfo>8평인데 방이 2개!😮 10년차 자취러의 취향 결정체</BestInfo>
                            <ArrowWrap><ArrowImg src={`${process.env.PUBLIC_URL}/assets/img/goarrow.png`} alt="arrow" /></ArrowWrap>
                        </BestInfoWrap>
                    </BestItem>
                </BestItemWrap>
            </ContentWrap>
        </div>
    )
}
