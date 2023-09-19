import React from 'react'
import { ContentWrap, BestTitle, BestWrap, BestItemWrap, BestItem, ArrowWrap, BestInfoWrap,
    BestInfo, BestImgWrap} from '../styles/StyleComp'

export default function Best() {
    return (
        <div>
            <ContentWrap>
                <BestWrap>
                    <BestTitle>주간 베스트</BestTitle>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/trophy.png`} alt="" />
                </BestWrap>
                <BestItemWrap>
                    <BestItem>
                        <BestImgWrap><img src={`${process.env.PUBLIC_URL}/assets/img/bestimg01.png`} alt="" /></BestImgWrap>
                        <BestInfoWrap>
                            <BestInfo>뉴트럴톤 무드 충만하게! 북유럽을 품은 집 in 하와이</BestInfo>
                            <ArrowWrap><img src={`${process.env.PUBLIC_URL}/assets/img/goarrow.png`} alt="arrow" /></ArrowWrap>
                        </BestInfoWrap>
                    </BestItem>
                    <BestItem>
                        <BestImgWrap><img src={`${process.env.PUBLIC_URL}/assets/img/bestimg02.png`} alt="" /></BestImgWrap>
                        <BestInfoWrap>
                            <BestInfo>셀프 시공으로 충분해! 룸메이트와 함께 사는 22평</BestInfo>
                            <ArrowWrap><img src={`${process.env.PUBLIC_URL}/assets/img/goarrow.png`} alt="arrow" /></ArrowWrap>
                        </BestInfoWrap>
                    </BestItem>
                    <BestItem>
                        <BestImgWrap><img src={`${process.env.PUBLIC_URL}/assets/img/bestimg03.png`} alt="" /></BestImgWrap>
                        <BestInfoWrap>
                            <BestInfo>8평인데 방이 2개!😮 10년차 자취러의 취향 결정체</BestInfo>
                            <ArrowWrap><img src={`${process.env.PUBLIC_URL}/assets/img/goarrow.png`} alt="arrow" /></ArrowWrap>
                        </BestInfoWrap>
                    </BestItem>
                </BestItemWrap>
            </ContentWrap>
        </div>
    )
}
