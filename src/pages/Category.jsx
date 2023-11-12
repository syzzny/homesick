import React from 'react'
import {
    CategoryWrap, BestTitle, BestWrap, BestItemWrap, BestWrapTop, More, CategoryItem, CategoryName, CategoryImg
} from '../styles/StyleComp'

export default function Category() {
    return (
        <div>
            <CategoryWrap>
                <BestWrapTop>
                    <BestWrap>
                        <BestTitle>카테고리별 상품찾기</BestTitle>
                    </BestWrap>
                    <div>
                        <More href="">전체보기</More>
                    </div>
                </BestWrapTop>
                <BestItemWrap>
                    <CategoryItem>
                        <CategoryImg src={`${process.env.PUBLIC_URL}/assets/img/furniture.png`} alt="" />
                        <CategoryName>가구</CategoryName>
                    </CategoryItem>
                    <CategoryItem>
                        <CategoryImg src={`${process.env.PUBLIC_URL}/assets/img/bad.png`} alt="" />
                        <CategoryName>패브릭</CategoryName>
                    </CategoryItem>
                    <CategoryItem>
                        <CategoryImg src={`${process.env.PUBLIC_URL}/assets/img/elect.png`} alt="" />
                        <CategoryName>가전전자</CategoryName>
                    </CategoryItem>
                    <CategoryItem>
                        <CategoryImg src={`${process.env.PUBLIC_URL}/assets/img/bath.png`} alt="" />
                        <CategoryName>욕실</CategoryName>
                    </CategoryItem>
                    <CategoryItem>
                        <CategoryImg src={`${process.env.PUBLIC_URL}/assets/img/light.png`} alt="" />
                        <CategoryName>조명</CategoryName>
                    </CategoryItem>
                    <CategoryItem>
                        <CategoryImg src={`${process.env.PUBLIC_URL}/assets/img/kitchen.png`} alt="" />
                        <CategoryName>주방용품</CategoryName>
                    </CategoryItem>
                    <CategoryItem>
                        <CategoryImg src={`${process.env.PUBLIC_URL}/assets/img/life.png`} alt="" />
                        <CategoryName>생활용품</CategoryName>
                    </CategoryItem>
                    <CategoryItem>
                        <CategoryImg src={`${process.env.PUBLIC_URL}/assets/img/lifeitem.png`} alt="" />
                        <CategoryName>생필품</CategoryName>
                    </CategoryItem>
                </BestItemWrap>
            </CategoryWrap>
        </div>
    )
}
