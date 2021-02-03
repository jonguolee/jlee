import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import About from '../About';
import Contact from '../Contact';


function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Cards />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;