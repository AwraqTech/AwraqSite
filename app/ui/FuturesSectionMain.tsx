"use client"

import React from 'react'

export default function FuturesSectionMain() {
    return (
        <div className='flex flex-col justify-center items-center gap-4 w-full max-w-6xl mx-auto mt-12'>
            <h1 className='sm:text-4xl text-3xl font-bold'>لماذا تختار منصة أوراق؟</h1>
            <p className='text-center text-gray-500 dark:text-gray-400'>نحرص في منصة أوراق أن نقوم بتلبية جميع رغباتك و إحتياجاتك كصاحب عمل أو منشأة</p>
            <div className='grid sm:grid-cols-3 grid-cols-1 justify-between items-center w-full gap-6 sm:px-0 px-4'>
                <div className='flex flex-col justify-center items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8'>
                    <div className='flex justify-center items-center px-4 py-3 rounded-xl dark:bg-[#133255] bg-[#3B34BE]'>
                        <i className='ri-cloud-fill text-4xl dark:text-[#5e85b3] text-white' />
                    </div>
                    <h1 className='sm:text-lg text-lg font-bold'>تخزين سحابي</h1>
                    <p className='text-center text-gray-500 dark:text-gray-400'>نوفر لك جميع المميزات للتخزين السحابي لجميع عملياتك لتسهيل الوصول إليها في أي مكان</p>
                </div>
                <div className='flex flex-col justify-center items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8'>
                    <div className='flex justify-center items-center px-4 py-3 rounded-xl dark:bg-[#133255] bg-[#3B34BE]'>
                        <i className='ri-pie-chart-2-fill text-4xl dark:text-[#5e85b3] text-white' />
                    </div>
                    <h1 className='sm:text-lg text-lg font-bold'>لوحة تحكم</h1>
                    <p className='text-center text-gray-500 dark:text-gray-400'>لوحة تحكم سهلة و مميزة تمكنك من معرفة إحصائيات نشاطك و عملياتك</p>
                </div>
                <div className='flex flex-col justify-center items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8'>
                    <div className='flex justify-center items-center px-4 py-3 rounded-xl dark:bg-[#133255] bg-[#3B34BE]'>
                        <i className='ri-window-fill text-4xl dark:text-[#5e85b3] text-white' />
                    </div>
                    <h1 className='sm:text-lg text-lg font-bold'>برنامج كاشير</h1>
                    <p className='text-center text-gray-500 dark:text-gray-400'>نوفر لك برنامج كاشير مخصص لك يلبي جميع إحتياجاتك أي كان نشاطك التجاري</p>
                </div>
                <div className='flex flex-col justify-center items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8'>
                    <div className='flex justify-center items-center px-4 py-3 rounded-xl dark:bg-[#133255] bg-[#3B34BE]'>
                        <i className='ri-pin-distance-fill text-4xl dark:text-[#5e85b3] text-white' />
                    </div>
                    <h1 className='sm:text-lg text-lg font-bold'>تعدد الفروع</h1>
                    <p className='text-center text-gray-500 dark:text-gray-400'>مع تعدد الفروع لديك ستتمكن من إدارتها بكل أريحية و سهولة</p>
                </div>
                <div className='flex flex-col justify-center items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8'>
                    <div className='flex justify-center items-center px-4 py-3 rounded-xl dark:bg-[#133255] bg-[#3B34BE]'>
                        <i className='ri-receipt-fill text-4xl dark:text-[#5e85b3] text-white' />
                    </div>
                    <h1 className='sm:text-lg text-lg font-bold'>فواتير رقمية</h1>
                    <p className='text-center text-gray-500 dark:text-gray-400'>نوفر لك فواتير رقمية لعملائك للتوافق مع إشتراطات هيئة الزكاة</p>
                </div>
                <div className='flex flex-col justify-center items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8'>
                    <div className='flex justify-center items-center px-4 py-3 rounded-xl dark:bg-[#133255] bg-[#3B34BE]'>
                        <i className='ri-headphone-fill text-4xl dark:text-[#5e85b3] text-white' />
                    </div>
                    <h1 className='sm:text-lg text-lg font-bold'>دعم فني 24/7</h1>
                    <p className='text-center text-gray-500 dark:text-gray-400'>معك في تجارتك على مدار الساعة مع قسم الدعم الفني في خدمتك دائما</p>
                </div>
            </div>
        </div>
    )
}