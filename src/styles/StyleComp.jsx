import styled, { keyframes, css } from "styled-components";
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>

export const HeaderWrap = styled.div`
    position: fixed;
    width: 100%;
    /* background-color: #fff; */
    /* backdrop-filter: blur(20px); */
    background-color: #fffc;
    box-shadow: 0 0.7961918735236395px 0.7961918735236395px -0.9375px #0000, 0 2.414506143104518px 2.414506143104518px -1.875px #0000, 0 6.382653521484461px 6.382653521484461px -2.8125px #0000, 0 20px 20px -3.75px #0000;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    z-index: 999;
`
export const Header = styled.header`
    /* font-family: 'Noto Sans KR', sans-serif; */
    display: flex;
    max-width: 1200px;
    padding: 0 20px;
    height: 85px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    backdrop-filter: blur(20px);

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        max-width: 880px;
    }
    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        max-width: 680px;
        backdrop-filter: none;
        background-color: #fff;
        height: 70px;
    }
`
export const NavImg = styled.img`
    height: 30px;

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        height: 20px;
    }
`
export const Nav = styled.nav`
    display: flex;
    flex: 1;
    gap: 35px;

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        display: none;
    }
`
export const NavMenu = styled.a`
    font-size: 18px;
    text-decoration: none;
    color: #000;
    font-weight: 600;
`
export const SubMenu = styled.div`
    display: flex;
    gap: 10px;

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        display: none;
    }
`
export const SubIcon = styled.a`
    cursor: pointer;
    border: 1px solid;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    line-height: 45px;
`
export const SubIconImg = styled.img`
    height: 16px;
`
export const Hamburger = styled.div`
  cursor: pointer;
  font-size: 24px;
  z-index: 1;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }

  /* 575.98px 이하에서 적용되는 스타일 */
  @media (max-width: 575.98px) {
        font-size: 20px;
    }
`;

export const Menu = styled.nav`
  position: fixed;
  top: 0;
  right: ${props => (props.open ? '0' : '-400px')};
  height: 100%;
  width: 330px;
  background-color: #fff;
  transition: right 0.3s;
  padding: 26px 16px;
  z-index: 1; /* 메뉴의 z-index 값을 1로 설정 */
`;

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: 20px;
  justify-content: space-between;
  background: transparent;
  border: none;
`;
export const MobNavTop = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
`
export const MobBtnWrap = styled.div`
    display: flex;
    gap: 6px;
    width: 100%;
    margin-bottom: 20px;
`
export const MobLog = styled.button`
    width: 100%;
    border: 2px solid #EDE303;
    background: transparent;
    padding: 12px 0;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
`
export const MobSign = styled.button`
font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    width: 100%;
    border: 1px solid #EDE303;
    background: #EDE303;
    color: #fff;
    padding: 12px 0;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
`
export const MenuItemWrap = styled.div`
    display: grid;
    gap: 30px;

    &::before{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        border-top: 1px solid #E8E8E8;
    }
`
export const MenuSub = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`
export const MobNavBtn = styled.button`
    border: none;
    background: transparent;
    font-size: 27px;
`
export const MenuBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경 컬러 및 투명도 조절 */
  z-index: 999; /* 메뉴보다 낮은 z-index로 설정 */
`;
export const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.open ? 'block' : 'none')};
  background-color: ${(props) => (props.open ? 'rgba(0, 0, 0, 0.7)' : 'transparent')};
  z-index: 0; /* DarkOverlay의 z-index 값을 메뉴보다 낮은 값인 0으로 설정 */
`;
export const SubMenuWrap = styled.div`
    background-color: #F3F3F3;
    border-radius: 10px;
    padding: 15px 18px;
`
export const SubMenuItem = styled.ul`
    display: grid;
    justify-items: start;
    gap: 20px;
    font-size: 20px;
    font-weight: 500;
`
export const MenuSubImg = styled.img`
transition: transform 0.3s;
    ${props =>
        props.rotate &&
        css`
      transform: rotate(180deg);
    `}
`






export const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    padding-top: 150px;
    padding-bottom: 50px;

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        max-width: 680px;
        padding-top: 110px;
    }

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        display: none;
    }
    
`
export const MobWrap = styled.div`
    display: none;

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        display: block;
        padding: 20px;
        padding-top: 100px;
        padding-bottom: 20px;
    }
`
export const MobImg = styled.img`
    width: 100%;
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
    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        width: 340px;
        height: 340px;
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

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        gap: 40px;
    }
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
    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        font-size: 36px;
        line-height: 50px;
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
    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        width: 100px;
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
    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        font-size: 16px;
    }
`
export const LinkWrap = styled.a`
    cursor: pointer;
`
export const ArrowUp = styled.i`
    font-size: 17px;
`
const gelatine = keyframes`
  from, to {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
  from, to {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
`;

export const StyledButton = styled.a`
  cursor: pointer;
    width: 120px;
    background-color: #EDE303;
    border: none;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 12px 22px;
    justify-content: space-between;

  &:hover, &:focus {
    animation: ${gelatine} 0.5s 1;
    transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
  }
`



// mobile_category
export const MobCateWrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px;
    display: none;

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        display: block;
        padding: 20px;
    }
`
export const MobCateImg = styled.img`
    height: 34px;
`
export const MobCateTxt = styled.p`
    font-size: 14px;
    margin: 0;
    margin-top: 14px;
    font-weight: 500;
`
export const MobSwiper = styled.div`
    padding-top: 35px;

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        padding-top: 25px;
    }
`



// ------------------------------------------------------------------------best
export const ContentWrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px;

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        padding: 35px 20px;
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

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        font-size: 20px;
    }
`
export const BestIcon = styled.img`
    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
       height: 22px;
    }
`
export const More = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 18px;

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
       font-size: 16px;
    }
`
export const BestItemWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 35px;

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        display: grid;
        padding-top: 25px;
        gap: 15px;
    }
`
export const BestImg = styled.img`
    width: inherit;
    transition: transform .2s;
    &:hover {
        transform: scale(1.05);
    }

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
       border-radius: 20px;
    }
`
export const BestItem = styled.div`
    width: 31%;
    background-color: #f3f3f3;
    gap: 10px;
    border-radius: 40px;

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        border-radius: 30px;
    }

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
       display: flex;
       width: 100%;
       border-radius: 20px;
    }
`

export const BestInfoWrap = styled.div`
    display: flex;
    gap: 10px;
    padding: 33px 25px ;
    align-items: center;

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        padding: 15px;
    }
    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        width: 100%;
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

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        font-size: 16px;
    }
`
export const ArrowWrap = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50px;
    line-height: 53px;

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        line-height: 44px;
    }
    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        width: 35px;
        height: 35px;
        line-height: 36px;
    }
`
export const ArrowImg = styled.img`
    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        width: 13px;
    }
`
export const BestImgWrap = styled.div`
    width: 100%;
    border-radius: 40px;

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        border-radius: 30px;
    }
    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        width: 110px;
        height: 110px;
    }
`



// ------------------------------------------------------------------------category
export const CategoryWrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px;

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        display: none;
    }
`
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

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        width: 11%;
        gap: 13px;
        padding: 25px 0;
    }
`
export const CategoryImg = styled.img`
    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        height: 80%;
    }
`
export const CategoryName = styled.div`
    font-size: 18px;
    font-weight: 500;

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

// ------------------------------------------------------------------------exhibition
export const ExItem = styled.div`
    width: 31%;
    background-color: #f3f3f3;
    gap: 10px;
    border-radius: 40px;

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        border-radius: 30px;
    }

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
       display: grid;
       width: 100%;
       border-radius: 20px;
    }
`
export const ExItemWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 35px;

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        display: grid;
        justify-content: normal;
        padding-top: 25px;
        gap: 15px;
    }
`
export const ExImg = styled.img`
    display: flex;
    transition: transform .2s;
    &:hover {
        transform: scale(1.1);
    }
`
export const ExInfoWrap = styled.div`
    display: flex;
    gap: 10px;
    padding: 33px 25px ;
    align-items: center;

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        padding: 15px;
    }
    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        width: auto;
    }
`

// ------------------------------------1
export const ExWrapf = styled.div`
    width: 100%;
    height: 372px;
    display: flex;
    align-items: center;
    background-color: #2F67EA;
    border-radius: 40px;

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        height: 250px;
        border-radius: 30px;
    }
  
`
export const ExImgWrapf = styled.div`
    width: 60%;
    border-radius: 110px;
    margin: 0 auto;
    overflow: hidden;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        width: 75%;
        
    }
    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        width: 85%;
        height: 190px;
    }

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        width: 49%;
        height: 189px;
    }
`

// ------------------------------------2
export const ExWraps = styled.div`
    width: 100%;
    height: 372px;
    display: flex;
    align-items: center;
    background-color: #E5C2FF;
    border-radius: 40px;

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        height: 250px;
        border-radius: 30px;
    }
`
export const ExImgWraps = styled.div`
    /* width: 78%; */
    border-radius: 110px;
    margin: 0 auto;
    overflow: hidden;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        width: 85%;
    }

    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        width: 50%;
        height: 189px;
    }
`

// ------------------------------------3
export const ExWrapt = styled.div`
    width: 100%;
    height: 372px;
    display: flex;
    align-items: center;
    background-color: #EA852F;
    border-radius: 40px;

    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        height: 250px;
        border-radius: 30px;
    }
`
export const ExImgWrapt = styled.div`
    width: 60%;
    border-radius: 110px;
    margin: 0 auto;
    overflow: hidden;

    /* 1024px 이하에서 적용되는 스타일 */
    @media (max-width: 1024px) {
        width: 75%;
    }
    /* 768px 이하에서 적용되는 스타일 */
    @media (max-width: 768px) {
        width: 85%;
        height: 190px;
    }
    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        width: 50%;
        height: 189px;
    }
`
export const ExImg3 = styled.img`
display: flex;
    transition: transform .2s;
    &:hover {
        transform: scale(1.1);
    }
    /* 575.98px 이하에서 적용되는 스타일 */
    @media (max-width: 575.98px) {
        width: 250px;
    }
`

// ------------------------------------------------------------------------footer
export const FooterWrap = styled.div`
    background-color: #000;
    margin-top: 50px;
    padding: 20px 0;
    color: #fff;
`
