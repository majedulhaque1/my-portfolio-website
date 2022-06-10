import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import About from './About';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Services></Services>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;