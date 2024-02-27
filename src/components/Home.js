import React from 'react'
import { Columns } from '../utils/Flex'
import { Header } from './main/header/Header'
import { Body } from './main/body/Body'
import { NavBar } from './main/navbar/NavBar'
import { SearchBar } from './main/header/SearchBar'

const Home = () => {

    return (
        <Columns
            width={"100%"}
            height={"100%"}
        >
            <Header>
                <SearchBar />
                <NavBar />
            </Header>
            <Body>
            </Body>
        </Columns>
    )
}

export { Home }
