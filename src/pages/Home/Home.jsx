import React from 'react';
import Banner from './Banner';
import NearlyExpirySection from '../NearlyExpirySection/NearlyExpirySection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NearlyExpirySection></NearlyExpirySection>
        </div>
    );
};

export default Home;