import React from 'react'
import { ItemNavBar } from './ItemNavBar'
import "./navbar.css"
import { BellOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <ItemNavBar>
                    <ShoppingCartOutlined />
                </ItemNavBar>
                <ItemNavBar>
                    <BellOutlined />
                </ItemNavBar>
                <ItemNavBar>
                    <UserOutlined />
                </ItemNavBar>
            </ul>
        </nav>
    )
}
