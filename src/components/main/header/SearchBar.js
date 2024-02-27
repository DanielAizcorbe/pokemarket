import React, { useState } from 'react'
import { Rows } from '../../../utils/Flex'
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {

    const [itemBuscado, setItemBuscado] = useState("");
    //const navegacion = useNavigate();

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
            />

        </Rows>
    )
}
