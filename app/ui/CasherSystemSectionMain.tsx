"use client"

import Image from 'next/image'
import React from 'react'

function CasherSystemSectionMain() {
    return (
        <div className='flex sm:flex-row flex-col justify-between items-center gap-4 w-full max-w-6xl mx-auto mt-14 sm:px-0 px-4'>
            <div className='flex sm:justify-start sm:items-start justify-center items-center w-full'>
                <Image src={require('@/public/images/b.jpg')} alt='Cashier Image' width={1920} height={1080} className='w-full sm:h-96 h-72 rounded-xl object-cover'/>
            </div>
            <div className='flex flex-col sm:justify-start sm:items-end justify-center items-center gap-4 w-full'>
                <h1 className='sm:text-4xl text-3xl font-bold text-center'>برنامج كاشير اللي الكل يتكلم عنه</h1>
                <p className='text-gray-500 dark:text-gray-400'>برنامج الكاشير الخاص بنا يوفر لك كل إحتياجات موظفيك و لن يكونون في حاجة لأي مساعدة وذلك لـ:</p>
            </div>
        </div>
    )
}

export default CasherSystemSectionMain