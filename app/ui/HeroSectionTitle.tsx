"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

function HeroSectionTitle() {
    const t = useTranslations("HomePage");

    return (
        <div className='flex flex-col justify-center items-center gap-4 px-8 md:pt-12 overflow-hidden'>
            <h1 className='md:text-4xl text-3xl font-bold text-center'>{t("hero-title")}</h1>
            <p className='text-center text-gray-500 dark:text-gray-400'>{t("hero-description")}</p>
            <a href='https://app.awraq.tech' className="md:mt-12 mt-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:outline-none focus:bg-[#3784d1] disabled:opacity-50 disabled:pointer-events-none dark:bg-[#b2d9ff] dark:text-[#43A2FE] dark:hover:bg-[#a5d2ff] dark:focus:bg-[#a5d2ff]">
                {t("hero-action-button")}
            </a>
            <Image src='/images/bg-hero.png' alt='Hero Image' width={3840} height={2160} className='w-full h-auto bg-contain lg:rounded-2xl rounded-lg lg:mt-12 mt-24 flex' priority/>
        </div>
    )
}

export default HeroSectionTitle