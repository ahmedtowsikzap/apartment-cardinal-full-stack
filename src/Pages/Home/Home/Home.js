import React from 'react';
import Aboutus from '../Aboutus/Aboutus';
import Apartments from '../Apartments/Apartments';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HomeReviews from '../HomeReviews/HomeReviews';
import Photos from '../Photos/Photos';
import TopBanner from '../TopBanner/TopBanner';
import Navigation from './../../Shared/Navigation/Navigation';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <div className='bg-color'>
                <Banner></Banner>
            </div>
            <h1 className='color2'>Our Galleries</h1>
            <Photos></Photos>
            <Aboutus></Aboutus>
            <h1 style={{ marginBottom: '51px', color: "burlywood" }}>Services we Provide</h1>
            <div className='bg-color2'>
                <Apartments></Apartments>
            </div>

            <HomeReviews></HomeReviews>

            <Footer></Footer>
        </div>
    );
};

export default Home;