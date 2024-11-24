"use client"

import Image from 'next/image'
import React from 'react'

function CasherSystemSectionMain() {
    return (
        <div className='flex sm:flex-row flex-col justify-between items-center gap-4 w-full max-w-6xl mx-auto mt-14 sm:px-0 px-4'>
            <div className='flex sm:justify-start sm:items-start justify-center items-center w-full'>
                <Image src='/images/b.jpg' alt='Cashier Image' width={1920} height={1080} className='w-full sm:h-96 h-72 rounded-xl object-cover' />
            </div>
            <div className='flex flex-col sm:justify-start sm:items-end justify-center items-end gap-4 w-full'>
                <h1 className='sm:text-4xl text-3xl font-bold sm:text-right text-center'>برنامج كاشير اللي الكل يتكلم عنه</h1>
                <p className='text-gray-500 dark:text-gray-400 sm:text-right text-center'>برنامج الكاشير الخاص بنا يوفر لك كل إحتياجات موظفيك و لن يكونون في حاجة لأي مساعدة وذلك لـ:</p>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <p className='text-gray-500 dark:text-gray-400'>سهولة الإستعمال ووضوح الخيارات</p>
                    <p className='text-[#43A2FE]'>✅</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <p className='text-gray-500 dark:text-gray-400'>تعدد و تنوع اللغات لموظفينك</p>
                    <p className='text-[#43A2FE]'>✅</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <p className='text-gray-500 dark:text-gray-400'>سرعة الإستخدام و الإستجابة</p>
                    <p className='text-[#43A2FE]'>✅</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <p className='text-gray-500 dark:text-gray-400'>تعدد الخصائص لتواكب نشاطك التجاري</p>
                    <p className='text-[#43A2FE]'>✅</p>
                </div>
            </div>
        </div>
    )
}

export default CasherSystemSectionMain