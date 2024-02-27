import React, { useState } from 'react'
import { Rows } from '../../../utils/Flex'
import { SearchOutlined } from "@ant-design/icons"

export const SearchBar = () => {

    const [itemBuscado, setItemBuscado] = useState("");

    const handleItemChange = (event) => {
        setItemBuscado(event.target.value);
    }

    return (
        <Rows
            centered
            height={"100%"}
            width={"100%"}
        >
            <input
                className='search-bar'
                type='text'
                value={itemBuscado}
                onChange={handleItemChange}
                autoComplete='false'
                spellCheck={false}
                autoCorrect='false'
                placeholder='Pokemons, pokeballs, MTs, Pociones, etc'
            />
            <button
                className='btn-buscar'
            >
                <SearchOutlined />
            </button>
        </Rows>
    )
}
