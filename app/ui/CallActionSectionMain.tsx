import React from 'react'

function CallActionSectionMain() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full max-w-6xl mx-auto mt-12 sm:px-0 px-4">
            <div className='flex flex-col justify-center items-center max-h-80 p-8 gap-8 rounded-xl dark:bg-[#111c2a] bg-[#f1f1f1] bg-cover bg-center bg-no-repeat sm:h-[800px] h-[450px] bg-[url("/images/bg-hero-light-gradient.png"),_url("/images/bg-hero-light-shadow.png")] dark:bg-[url("/images/bg-hero-dark-gradient.png"),_url("/images/bg-hero-dark-shadow.png")] w-full overflow-hidden'>
                <h1 className='text-3xl font-bold text-center'>لا تفوت فرصة تطوير تجارتك و إشترك الآن</h1>
                <button type="button" className="py-3 w-full max-w-56 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:outline-none focus:bg-[#3784d1] disabled:opacity-50 disabled:pointer-events-none dark:bg-[#b2d9ff] dark:text-[#43A2FE] dark:hover:bg-[#a5d2ff] dark:focus:bg-[#a5d2ff]">
                    إنطلق الآن
                </button>
            </div>
        </div>
    )
}

export default CallActionSectionMain