import React from 'react';
import Banner from '../Shared/Banner';
import Counter from '../Shared/Counter';
import ExperienceInfo from './ExperienceInfo';
import FastService from './FastService';

const Home = () => {
    
    return (
        <div>
            
            <Banner/>
            <Counter/>
            <ExperienceInfo/>
            <FastService/>
        </div>
    );
};

export default Home;