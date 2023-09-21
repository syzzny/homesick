import styled from "styled-components";
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>

export const Header = styled.header`
    /* font-family: 'Noto Sans KR', sans-serif; */
    display: flex;
    max-width: 1200px;
    height: 120px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    gap: 80px;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        max-width: 880px;
    }
`
export const Nav = styled.nav`
    display: flex;
    flex: 1;
    gap: 35px;
`
export const NavMenu = styled.a`
    font-size: 20px;
    text-decoration: none;
    color: #000;
    font-weight: 600;
`
export const SubMenu = styled.div`
    display: flex;
    gap: 15px;
`
export const SubIcon = styled.a`
    cursor: pointer;
    border: 1px solid;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    line-height: 56px;
`
export const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    /* background-color: #f5f5f5; */
    padding: 20px 0;
    /* font-family: 'Noto Sans KR', sans-serif; */
    padding-bottom: 50px;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        max-width: 880px;
    }
`
export const MainImgWrap = styled.div`
    width: 540px;
    height: 540px;
    /* background-color: purple; */
    border-radius: 50px;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        width: 440px;
        height: 440px;
    }
`
export const MainImg = styled.img`
     /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        width: inherit;
    }
`
export const MainWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 70px;
`
export const MainTextWrap = styled.div`
    display: grid;
    gap: 100px;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        gap: 40px;
    }
`
export const MainTitle = styled.h2`
    font-size: 55px;
    text-align: left;
    margin: 0;
    line-height: 78px;
    word-break: keep-all;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        font-size: 45px;
        line-height: 65px;
    }
`
export const DetailButton = styled.a`
    cursor: pointer;
    width: 120px;
    background-color: #EDE303;
    border: none;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 12px 22px;
    justify-content: space-between;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        width: 110px;
    }
`
export const DetailLink = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 20px;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        font-size: 18px;
    }
`
export const LinkWrap = styled.a`
    cursor: pointer;
`


// ------------------------------------------------------------------------best
export const ContentWrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        max-width: 880px;
    }
`
export const BestWrapTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const BestWrap = styled.div`
    display: flex;
    gap: 12px;
`
export const BestTitle = styled.div`
    font-size: 25px;
    font-weight: 600;
`
export const More = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 18px;
`
export const BestItemWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 35px;
`
export const BestImg = styled.img`
    width: inherit;
`
export const BestItem = styled.div`
    width: 31%;
    background-color: #f3f3f3;
    gap: 10px;
    border-radius: 40px;
`

export const BestInfoWrap = styled.div`
    display: flex;
    gap: 10px;
    padding: 33px 25px ;
    align-items: center;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        padding: 25px 22px;
    }
`
export const BestInfo = styled.p`
    font-size: 18px;
    text-align: left;
    flex: 1;
    word-break: keep-all;
    margin: 0;
    font-weight: 500;
    line-height: 25px;
`
export const ArrowWrap = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50px;
    line-height: 50px;
`
export const BestImgWrap = styled.div`
    width: 100%;
    border-radius: 40px;
`

// ------------------------------------------------------------------------category

export const CategoryItem = styled.div`
    background-color: #FBFBFB;
    width: 11.5%;
    border-radius: 20px;
    display: grid;
    justify-items: center;
    gap: 30px;
    padding: 30px 0;

    &:hover{
        background-color: #f5f5f5;
        cursor: pointer;
    }
`
export const CategoryName = styled.div`
    font-size: 18px;
    font-weight: 500;
`

// ------------------------------------------------------------------------exhibition
export const ExWrapf = styled.div`
    width: 372px;
    height: 372px;
    display: flex;
    align-items: center;
    background-color: #2F67EA;
    border-radius: 40px;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        width: initial;
    }
`
export const ExImg = styled.img`
    display: flex;
`
export const ExImgWrapf = styled.div`
    width: 60%;
    border-radius: 110px;
    margin: 0 auto;
    overflow: hidden;
`
export const ExWraps = styled.div`
    width: 372px;
    height: 372px;
    display: flex;
    align-items: center;
    background-color: #E5C2FF;
    border-radius: 40px;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        width: initial;
    }
`
export const ExImgWraps = styled.div`
    /* width: 78%; */
    border-radius: 110px;
    margin: 0 auto;
    overflow: hidden;
`
export const ExWrapt = styled.div`
    width: 372px;
    height: 372px;
    display: flex;
    align-items: center;
    background-color: #EA852F;
    border-radius: 40px;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        width: initial;
    }
`
export const ExImgWrapt = styled.div`
    width: 60%;
    border-radius: 110px;
    margin: 0 auto;
    overflow: hidden;
`

// ------------------------------------------------------------------------footer
export const FooterWrap = styled.div`
    background-color: #000;
    margin-top: 50px;
    padding: 20px 0;
    color: #fff;
`
