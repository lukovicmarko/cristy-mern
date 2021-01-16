import React from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Products from '../components/Products';
import Article from '../components/Article';


const HomeScreen = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Products />
            <Article />
        </>
    )
}

export default HomeScreen
