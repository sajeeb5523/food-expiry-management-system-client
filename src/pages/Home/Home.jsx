import React from 'react';
import Banner from './Banner';
import NearlyExpirySection from '../NearlyExpirySection/NearlyExpirySection';
import ExpiredFoodSection from '../ExpiredFoodSection/ExpiredFoodSection';
import ExtraSection from '../ExtraSection/ExtraSection';
import Reviews from '../../components/Reviews/Reviews';
import Newsletter from '../../components/Newsletter/Newsletter';
import StorageTips from '../../components/StorageTips/StorageTips';

const Home = () => {
    return (
        <div className='bg-base-200'>
            <div className='roboto-slab'>
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

                {/* Main Content */}
                <div className="max-w-[1305px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        <div>
                            <StorageTips></StorageTips>
                        </div>

                        <div>
                            <Newsletter></Newsletter>
                        </div>

                        <div className="pt-8 pb-12">
                            <Reviews></Reviews>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;