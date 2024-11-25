"use client"

import { useTranslations } from 'next-intl';
import React from 'react'

export default function FuturesSectionMain() {
    const t = useTranslations("HomePage");
    
    return (
        <div className='flex flex-col justify-center items-center gap-4 w-full max-w-6xl mx-auto mt-12'>
            <h1 className='sm:text-4xl text-3xl font-bold sm:px-0 px-4'>{t("future-title")}</h1>
            <p className='text-center text-gray-500 dark:text-gray-400 sm:px-0 px-4'>{t("future-description")}</p>
            <div className='grid sm:grid-cols-3 grid-cols-1 justify-between items-center w-full gap-6 sm:px-0 px-4'>
                <div className='flex flex-col justify-center items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8'>
                    <div className='flex justify-center items-center px-4 py-3 rounded-xl bg-[#43A2FE] dark:bg-[#294866]'>
                        <i className='ri-cloud-fill text-4xl text-white dark:text-[#b2d9ff]' />
                    </div>
                    <h1 className='sm:text-lg text-lg font-bold'>{t("future-one-title")}</h1>
                    <p className='text-center text-gray-500 dark:text-gray-400'>{t("future-one-description")}</p>
                </div>
                <div className='flex flex-col justify-center items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8'>
                    <div className='flex justify-center items-center px-4 py-3 rounded-xl bg-[#43A2FE] dark:bg-[#294866]'>
                        <i className='ri-pie-chart-2-fill text-4xl text-white dark:text-[#b2d9ff]' />
                    </div>
                    <h1 className='sm:text-lg text-lg font-bold'>{t("future-two-title")}</h1>
                    <p className='text-center text-gray-500 dark:text-gray-400'>{t("future-two-description")}</p>
                </div>
                <div className='flex flex-col justify-center items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8'>
                    <div className='flex justify-center items-center px-4 py-3 rounded-xl bg-[#43A2FE] dark:bg-[#294866]'>
                        <i className='ri-window-fill text-4xl text-white dark:text-[#b2d9ff]' />
                    </div>
                    <h1 className='sm:text-lg text-lg font-bold'>{t("future-three-title")}</h1>
                    <p className='text-center text-gray-500 dark:text-gray-400'>{t("future-three-description")}</p>
                </div>
                <div className='flex flex-col justify-center items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8'>
                    <div className='flex justify-center items-center px-4 py-3 rounded-xl bg-[#43A2FE] dark:bg-[#294866]'>
                        <i className='ri-pin-distance-fill text-4xl text-white dark:text-[#b2d9ff]' />
                    </div>
                    <h1 className='sm:text-lg text-lg font-bold'>{t("future-four-title")}</h1>
                    <p className='text-center text-gray-500 dark:text-gray-400'>{t("future-four-description")}</p>
                </div>
                <div className='flex flex-col justify-center items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8'>
                    <div className='flex justify-center items-center px-4 py-3 rounded-xl bg-[#43A2FE] dark:bg-[#294866]'>
                        <i className='ri-receipt-fill text-4xl text-white dark:text-[#b2d9ff]' />
                    </div>
                    <h1 className='sm:text-lg text-lg font-bold'>{t("future-five-title")}</h1>
                    <p className='text-center text-gray-500 dark:text-gray-400'>{t("future-five-description")}</p>
                </div>
                <div className='flex flex-col justify-center items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8'>
                    <div className='flex justify-center items-center px-4 py-3 rounded-xl bg-[#43A2FE] dark:bg-[#294866]'>
                        <i className='ri-headphone-fill text-4xl text-white dark:text-[#b2d9ff]' />
                    </div>
                    <h1 className='sm:text-lg text-lg font-bold'>{t("future-six-title")}</h1>
                    <p className='text-center text-gray-500 dark:text-gray-400'>{t("future-six-description")}</p>
                </div>
            </div>
        </div>
    )
}