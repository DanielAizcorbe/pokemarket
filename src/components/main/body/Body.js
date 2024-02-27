import React from 'react'
import { Columns } from '../../../utils/Flex'
import "./body.css";

export const Body = ({ children }) => {
    return (
        <main
            className='body'
        >
            <Columns
                justify={"flex-start"}
                align={"center"}
                height={"100%"}
                width={"100%"}
            >
                {children}
            </Columns>
        </main>
    )
}
