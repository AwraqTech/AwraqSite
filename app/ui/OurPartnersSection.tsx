"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

function OurPartnersSection() {
    const t = useTranslations("HomePage");
    
    return (
        <div className='flex flex-col justify-center items-center gap-4 w-full max-w-6xl mx-auto mt-12'>
            <h1 className='md:text-4xl text-3xl font-bold md:px-0 px-4'>{t("partners")}</h1>
            <div className='grid md:grid-cols-7 grid-cols-3 justify-between items-center w-full gap-6 md:px-0 px-4 lg:py-8 py-4'>
                <Image alt='Partenrs' src={require('@/public/zatcaa.svg')} width={1257} height={323.44} className='flex dark:hidden w-full h-auto object-cover'/>
                <Image alt='Partenrs' src={require('@/public/amazon.svg')} width={1257} height={323.44} className='flex dark:hidden w-full h-auto object-cover'/>
                <Image alt='Partenrs' src={require('@/public/alrajhi.svg')} width={1257} height={323.44} className='flex dark:hidden w-full h-auto object-cover'/>
                <Image alt='Partenrs' src={require('@/public/stc.svg')} width={1257} height={323.44} className='flex dark:hidden w-full h-auto object-cover'/>
                <Image alt='Partenrs' src={require('@/public/stc-solutions.svg')} width={1257} height={323.44} className='flex dark:hidden w-full h-auto object-cover'/>
                <Image alt='Partenrs' src={require('@/public/moyasar.svg')} width={1257} height={323.44} className='flex dark:hidden w-full h-auto object-cover'/>
                <Image alt='Partenrs' src={require('@/public/intercom.svg')} width={1257} height={323.44} className='lg:flex dark:hidden hidden w-full h-auto object-cover'/>

                <Image alt='Partenrs' src={require('@/public/zatca-dark.svg')} width={1257} height={323.44} className='hidden dark:flex w-full h-auto object-cover'/>
                <Image alt='Partenrs' src={require('@/public/amazon-dark.svg')} width={1257} height={323.44} className='hidden dark:flex w-full h-auto object-cover'/>
                <Image alt='Partenrs' src={require('@/public/alrajhi-dark.svg')} width={1257} height={323.44} className='hidden dark:flex w-full h-auto object-cover'/>
                <Image alt='Partenrs' src={require('@/public/stc-dark.svg')} width={1257} height={323.44} className='hidden dark:flex w-full h-auto object-cover'/>
                <Image alt='Partenrs' src={require('@/public/stc-solutions-dark.svg')} width={1257} height={323.44} className='hidden dark:flex w-full h-auto object-cover'/>
                <Image alt='Partenrs' src={require('@/public/moyasar-dark.svg')} width={1257} height={323.44} className='hidden dark:flex w-full h-auto object-cover'/>
                <Image alt='Partenrs' src={require('@/public/intercom-dark.svg')} width={1257} height={323.44} className='hidden lg:dark:flex w-full h-auto object-cover'/>
            </div>
        </div>
    )
}

export default OurPartnersSection;