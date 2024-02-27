import React from 'react'
import "./header.css";
import { Logo } from './Logo';
import { Rows } from '../../../utils/Flex';

export const Header = ({children}) => {
    return (
        <header>
            <Rows
                padding={"0 2rem"}
                width={"100%"}
                justify={"space-between"}
                align={"center"}
            >
                <Logo />
                {children}
            </Rows>
        </header>
    )
}
