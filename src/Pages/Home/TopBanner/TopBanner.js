import React from 'react';
import bg from '../../../images/bg.jpg'
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div>
            <div>
                <div className='fix-head'>
                    <h3 className='fix-h3'>Every Apartment Near You, In One Place</h3>
                </div>
                <div className='img-cover'>
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopBanner;