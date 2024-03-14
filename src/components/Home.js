import React from 'react'
import "./home.css";
import { Header } from './header/Header';
import { Ofertas } from './ofertas/Ofertas';

const Home = () => {
    return (
        <div className='body'>
            <Header />
            <main>
                <Ofertas />
            </main>
        </div>
    )
}

export default Home
