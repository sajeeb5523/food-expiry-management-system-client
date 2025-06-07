import React from 'react';
import Banner from './Banner';
import NearlyExpirySection from '../NearlyExpirySection/NearlyExpirySection';
import ExpiredFoodSection from '../ExpiredFoodSection/ExpiredFoodSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NearlyExpirySection></NearlyExpirySection>
            <ExpiredFoodSection></ExpiredFoodSection>
        </div>
    );
};

export default Home;