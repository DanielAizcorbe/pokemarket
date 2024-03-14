import React from 'react'
import "./header.css";
import Logo from './Logo';
import { NavBar } from './NavBar';
import SearchBar from './SearchBar';

/**
 * 
 * TODO: envolver el componente Logo.js en un Suspense para la carga de la imagen
 */

export const Header = () => {

    return (
        <header>
            <Logo />
            <SearchBar />
            <NavBar />
        </header>
    )
}
