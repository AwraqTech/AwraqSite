import React from 'react'
import HeroSectionTitle from './HeroSectionTitle'

function HeroSectionMain() {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat md:h-[800px] h-[550px] bg-[url('/images/bg-hero-light-gradient.png'),_url('/images/bg-hero-light-shadow.png')] dark:bg-[url('/images/bg-hero-dark-gradient.png'),_url('/images/bg-hero-dark-shadow.png')] pt-28 overflow-hidden">
            {/* Add the overlay using a pseudo-element */}
            <div className="absolute inset-0 dark:bg-[#071321] bg-white opacity-20 dark:opacity-40 z-0"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center w-full max-w-6xl mx-auto">
                <HeroSectionTitle />
            </div>
        </div>
    );
}

export default HeroSectionMain;
