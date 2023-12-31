import React from 'react';
import Banner from '../Shared/Banner';
import Counter from '../Shared/Counter';
import ExperienceInfo from './ExperienceInfo';
import FastService from './FastService';
import UserReview from './UserReview/UserReview';
import AboutUs from './About Us/AboutUs';

const Home = () => {
    
    return (
        <div>
            
            <Banner/>
            <Counter/>
            <ExperienceInfo/>
            <FastService/>
            <UserReview/>
            <AboutUs/>
        </div>
    );
};

export default Home;