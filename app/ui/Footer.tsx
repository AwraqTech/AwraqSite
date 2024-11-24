import React from 'react'

function Footer() {
    return (
        <div className="flex flex-col justify-center items-center gap-6 w-full max-w-6xl mx-auto mt-12 py-12 sm:px-0 px-4">
            <a
                className="text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
                href="#"
            >
                <img
                    src="/awraq-logo.svg"
                    className="h-14 object-contain dark:hidden"
                    alt="Logo"
                />
                <img
                    src="/dark-awraq-logo.svg"
                    className="h-14 object-contain hidden dark:block"
                    alt="Dark Logo"
                />
            </a>
            <span className='flex flex-col justify-center items-center gap-2'>
                <h1 className='text-2xl font-bold'>منصتك الأفضل لإدارة تجارتك ✨</h1>
                <p className='text-gray-500 dark:text-gray-400 sm:text-right text-center'>
                    منصة أوراق هي منصة تمكن التجار من إدارة أنشطتهم التجارية بكل سهولة و تيسيير
                </p>
            </span>
            <span className='flex flex-row justify-center items-center gap-2 text-[#43A2FE] cursor-pointer'>
                <a href="https://x.com/awraqit">
                    <i className='ri-twitter-x-line text-xl hover:text-[#3784d1]' />
                </a>
                <a href="https://instagram.com">
                    <i className='ri-instagram-line text-xl hover:text-[#3784d1]' />
                </a>
                <a href="https://facebook.com">
                    <i className='ri-facebook-box-line text-xl hover:text-[#3784d1]' />
                </a>
                <a href="https://linkedin.com">
                    <i className='ri-linkedin-box-line text-xl hover:text-[#3784d1]' />
                </a>
            </span>
            <span className="flex flex-row justify-center items-center gap-6 cursor-pointer">
                <a className="group flex flex-row justify-start items-center gap-2" href="tel:+800120060">
                    <i className="ri-phone-line text-xl group-hover:text-neutral-400" />
                    <p className="sm:text-right text-center group-hover:text-neutral-400">800120060</p>
                </a>
                <a className="group flex flex-row justify-start items-center gap-2" href="mailto:care@awraq.tech">
                    <i className="ri-mail-line text-xl group-hover:text-neutral-400" />
                    <p className="sm:text-right text-center group-hover:text-neutral-400">care@awraq.tech</p>
                </a>
            </span>
            <p className='text-gray-500 dark:text-gray-400 sm:text-right text-center mt-8'>
                جميع الحقوق محفوظة لدى منصة أوراق 2024
            </p>
        </div>
    )
}

export default Footer