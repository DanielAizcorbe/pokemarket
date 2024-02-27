import React from 'react'

export const ItemNavBar = ({children, key}) => {
    return (
        <li key={key} className='nav-item'>
            {children}
        </li>
    )
}
