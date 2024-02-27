import React from 'react'
import "./header.css";
import { Logo } from './Logo';
import { Rows } from '../../../utils/Flex';

export const Header = () => {
    return (
        <header>
            <Rows
                padding={"0 2rem"}
            >
                <Logo />
            </Rows>
        </header>
    )
}
