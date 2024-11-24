"use client"

import Image from 'next/image'
import React from 'react'

function HeroSectionTitle() {
    return (
        <div className='flex flex-col justify-center items-center gap-4 px-8 sm:pt-12 overflow-hidden'>
            <h1 className='sm:text-4xl text-3xl font-bold'>✨نظامك المحاسبي الأفضل</h1>
            <p className='text-center text-gray-500 dark:text-gray-400'>مع أوراق بإمكانك إدارة جميع نشاطاتك التجارية بكل راحة</p>
            <button type="button" className="sm:mt-12 mt-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:outline-none focus:bg-[#3784d1] disabled:opacity-50 disabled:pointer-events-none dark:bg-[#b2d9ff] dark:text-[#43A2FE] dark:hover:bg-[#a5d2ff] dark:focus:bg-[#a5d2ff]">
                🚀إنطلق الآن مع 30 يوم مجانا
            </button>
            <Image src='/images/a.jpg' alt='Hero Image' width={1920} height={1080} className='w-full h-auto bg-cover sm:rounded-xl rounded-lg mt-12' />
        </div>
    )
}

export default HeroSectionTitle