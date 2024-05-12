import React from 'react'
import { useAuth } from '../../contexts/authContext'
import Carousel from '../Carousel';
import Destinations from '../Destinations';
import Footer from '../Footer';
import Hero from '../Hero';
import Navbar from '../Navbar';
import Search from '../Search';
import Selects from '../Selects';


const Home = () => {
    const { currentUser } = useAuth()
    return (
        <div>
        <Navbar />
        <Hero />
        <Destinations />
        <Search />
        <Selects />
        <Carousel />
        <Footer />
        </div>
    )
}

export default Home