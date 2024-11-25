"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

function CasherSystemSectionMain() {
    const t = useTranslations("HomePage");

    return (
        <div className='flex sm:flex-row-reverse flex-col justify-between items-center gap-4 w-full max-w-6xl mx-auto mt-14 sm:px-0 px-4'>
            <div className='flex sm:justify-start sm:items-start justify-center items-center w-full'>
                <Image src='/images/b.jpg' alt='Cashier Image' width={1920} height={1080} className='w-full sm:h-96 h-72 rounded-xl object-cover' />
            </div>
            <div className='flex flex-col sm:justify-start sm:items-start justify-center items-start gap-4 w-full'>
                <h1 className='sm:text-4xl text-3xl font-bold'>{t("casher-title")}</h1>
                <p className='text-gray-500 dark:text-gray-400'>{t("casher-description")}</p>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <p className='text-[#43A2FE]'>✅</p>
                    <p className='text-gray-500 dark:text-gray-400'>{t("casher-future-one")}</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <p className='text-[#43A2FE]'>✅</p>
                    <p className='text-gray-500 dark:text-gray-400'>{t("casher-future-two")}</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <p className='text-[#43A2FE]'>✅</p>
                    <p className='text-gray-500 dark:text-gray-400'>{t("casher-future-three")}</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <p className='text-[#43A2FE]'>✅</p>
                    <p className='text-gray-500 dark:text-gray-400'>{t("casher-future-four")}</p>
                </div>
            </div>
        </div>
    )
}

export default CasherSystemSectionMain