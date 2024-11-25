import React from 'react'
import HeroSectionTitle from './HeroSectionTitle'

function HeroSectionMain() {
    return (
        <div className="bg-cover bg-center bg-no-repeat sm:h-[800px] h-[550px] bg-[url('/images/bg-hero-light-gradient.png'),_url('/images/bg-hero-light-shadow.png')] dark:bg-[url('/images/bg-hero-dark-gradient.png'),_url('/images/bg-hero-dark-shadow.png')] pt-28 overflow-hidden">
            <div className='flex flex-col justify-center items-center w-full max-w-6xl mx-auto'>
                <HeroSectionTitle />
            </div>
        </div>
    )
}

export default HeroSectionMain