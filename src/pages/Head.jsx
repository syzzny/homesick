import React from 'react'
import { Header, Nav, SubMenu, SubIcon, NavMenu } from '../styles/StyleComp'

export default function Head() {
    return (
        <div>
            <Header>
                <div><img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="" /></div>
                <Nav>
                    <NavMenu href="">커뮤니티</NavMenu>
                    <NavMenu href="">쇼핑</NavMenu>
                </Nav>
                <SubMenu>
                    <SubIcon><img src={`${process.env.PUBLIC_URL}/assets/img/my.png`} alt="" /></SubIcon>
                    <SubIcon><img src={`${process.env.PUBLIC_URL}/assets/img/shop.png`}alt="" /></SubIcon>
                </SubMenu>
            </Header>
        </div>
    )
}
