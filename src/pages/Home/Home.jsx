import React from 'react';
import Banner from './Banner';
import NearlyExpirySection from '../NearlyExpirySection/NearlyExpirySection';
import ExpiredFoodSection from '../ExpiredFoodSection/ExpiredFoodSection';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div>
            <div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <Banner></Banner>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50">
                    <NearlyExpirySection></NearlyExpirySection>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50">
                    <ExpiredFoodSection></ExpiredFoodSection>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50">
                    <ExtraSection></ExtraSection>
                </div>
            </div>
        </div>
    );
};

export default Home;