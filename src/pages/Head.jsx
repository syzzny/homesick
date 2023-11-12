import React, { useState } from 'react';
import {
    HeaderWrap, Header, NavImg, Nav, SubMenu, SubIcon, SubIconImg,
    NavMenu, Hamburger, Menu, MenuItem, MobNavTop, MobBtnWrap, DarkOverlay,
    MobLog, MobSign, MenuItemWrap, MenuSub, SubMenuWrap,SubMenuItem, MenuSubImg
} from '../styles/StyleComp'



export default function Head() {
    
    
    // hamberger menu
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // drop down (comm)
    const [isOpen, setIsOpen] = useState(false);

    const toggleDown = () => {
        setIsOpen(!isOpen);
    }

    // drop down (shop)
    const [isOpenSho, setIsOpenSho] = useState(false);

    const toggleDownSho = () => {
        setIsOpenSho(!isOpenSho);
    }


    return (
        <HeaderWrap>
            <DarkOverlay open={menuOpen} onClick={closeMenu} />
            <Header>
                    <NavImg src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="" />
                <Nav>
                    <NavMenu href="">커뮤니티</NavMenu>
                    <NavMenu href="">쇼핑</NavMenu>
                </Nav>
                <SubMenu>
                    <SubIcon>
                        <SubIconImg src={`${process.env.PUBLIC_URL}/assets/img/my.png`} alt="" />
                    </SubIcon>
                    <SubIcon>
                        <SubIconImg src={`${process.env.PUBLIC_URL}/assets/img/shop.png`} alt="" />
                    </SubIcon>
                </SubMenu>
                <Hamburger open={menuOpen} onClick={toggleMenu}>&#9776;</Hamburger>
            </Header>
            <Menu open={menuOpen}>
                <MobNavTop>
                    <NavImg src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="" />
                </MobNavTop>
                <MobBtnWrap>
                    <MobLog>로그인</MobLog>
                    <MobSign>회원가입</MobSign>
                </MobBtnWrap>
                <MenuItemWrap>
                    <MenuItem onClick={toggleDown}>
                        <MenuSub>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/sidemenu_com.png`} alt="" />
                            커뮤니티
                        </MenuSub>
                        <MenuSubImg rotate={isOpen} src={`${process.env.PUBLIC_URL}/assets/img/arrow-down.png`} alt="" />
                    </MenuItem>
                    {isOpen && (
                        <SubMenuWrap>
                            <SubMenuItem>
                                <li>전체</li>
                                <li>원룸</li>
                                <li>거실</li>
                                <li>침실</li>
                                <li>주방</li>
                                <li>욕실</li>
                                <li>사무공간</li>
                                <li>기타</li>
                            </SubMenuItem>
                        </SubMenuWrap>
                    )}
                    <MenuItem onClick={toggleDownSho}>
                        <MenuSub>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/sidemenu_sho.png`} alt="" />
                            쇼핑
                        </MenuSub>
                        <MenuSubImg rotate={isOpenSho} src={`${process.env.PUBLIC_URL}/assets/img/arrow-down.png`} alt="" />
                    </MenuItem>
                    {isOpenSho && (
                        <SubMenuWrap>
                            <SubMenuItem>
                                <li>전체</li>
                                <li>가구</li>
                                <li>패브릭 침실</li>
                                <li>주방</li>
                                <li>욕실</li>
                                <li>사무공간</li>
                                <li>기타</li>
                            </SubMenuItem>
                        </SubMenuWrap>
                    )}
                    <MenuItem>
                        <MenuSub>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/sidemenu_my.png`} alt="" />
                            마이페이지
                        </MenuSub>
                    </MenuItem>
                </MenuItemWrap>
            </Menu>
        </HeaderWrap>
    );
}
