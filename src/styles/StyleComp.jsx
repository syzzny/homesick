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

`
export const MainImgWrap = styled.div`
    width: 540px;
    height: 540px;
    /* background-color: purple; */
    border-radius: 50px;
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
`
export const MainTitle = styled.h2`
    font-size: 55px;
    text-align: left;
    margin: 0;
    line-height: 78px;
    word-break: keep-all;

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
`
export const DetailLink = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 20px;
`
export const LinkWrap = styled.a`
    cursor: pointer;
`


// ------------------------------------------------------------------------best
export const ContentWrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0;

`
export const BestWrap = styled.div`
    display: flex;
    gap: 12px;
`
export const BestTitle = styled.div`
    font-size: 28px;
    font-weight: 600;
`
export const BestItemWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 35px;
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