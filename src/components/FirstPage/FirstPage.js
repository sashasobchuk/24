import React from 'react';
import img from './acces/electrician-installer-with-tool-his-hands-working-with-cable-construction-site 1.png'
import clas from './FirstPage.module.css'
import Navbar from "./Navbar/Navbar";
import Content from "./Content/content";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const FirstPage = () => {
    return (
        <div className={clas.firstPage}>
            <Header/>
            <Navbar/>
            <Content/>
            <Footer/>


        </div>
    );
};

export default FirstPage;