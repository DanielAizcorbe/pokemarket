import React from 'react'
import { Rows } from '../../../utils/Flex'

export const Logo = () => {
    return (
        <Rows
            centered
            width={"auto"}
            padding={"0 10px"}
        >
            <img
                alt='logo pokeball'
                src='https://fakeimg.pl/60x60?text=LOGO'
                className='pokeball-logo'
            />
            <h1>
                PokeMarket
            </h1>
        </Rows>
    )
}
