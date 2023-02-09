import React from 'react';

import BannerImg from '../../Assets/banner-about.png'

export default function About(){



return(
    <>
    <main className='about-container'>
        <div className='about-banner'>
            <img src={BannerImg} alt="Paysages de somments enneigés"/>
        </div>

    </main>
    </>
)


}