import React from 'react'

function SubscriptionsSectionMain() {
    return (
        <div className='flex flex-col justify-center items-center gap-4 w-full max-w-6xl mx-auto mt-12'>
            <div className="flex justify-end mb-3">
                <div id="toggle-count" className="p-0.5 inline-block rounded-lg dark:bg-[#111c2a] bg-[#f1f1f1]">
                    <label htmlFor="toggle-count-monthly" className="relative inline-block py-2 px-3">
                        <span className="inline-block relative z-10 text-sm font-medium text-black cursor-pointer dark:text-white">
                            شهري
                        </span>
                        <input
                            id="toggle-count-monthly"
                            name="toggle-count"
                            type="radio"
                            className="absolute top-0 end-0 size-full border-transparent bg-transparent bg-none text-transparent rounded-lg cursor-pointer before:absolute before:inset-0 before:size-full before:rounded-lg focus:ring-offset-0 checked:before:bg-white checked:before:shadow-sm checked:bg-none focus:ring-transparent dark:checked:before:bg-[#071321] dark:focus:ring-offset-transparent"
                        />
                    </label>
                    <label htmlFor="toggle-count-annual" className="relative inline-block py-2 px-3">
                        <span className="inline-block relative z-10 text-sm font-medium text-black cursor-pointer dark:text-white">
                            سنوي
                        </span>
                        <input
                            id="toggle-count-annual"
                            name="toggle-count"
                            type="radio"
                            className="absolute top-0 end-0 size-full before:border-transparent before:bg-transparent before:bg-none before:text-transparent rounded-lg cursor-pointer before:absolute before:inset-0 before:size-full before:rounded-lg focus:ring-offset-0 checked:before:bg-white checked:before:shadow-sm checked:bg-none focus:ring-transparent dark:checked:before:bg-[#071321] dark:focus:ring-offset-transparent"
                            defaultChecked
                        />
                    </label>
                </div>
            </div>
            <div className='grid sm:grid-cols-3 grid-cols-1 justify-between items-center w-full gap-6 sm:px-0 px-4'>
                <div className='flex flex-col justify-center items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8'>

                </div>
            </div>
        </div>
    )
}

export default SubscriptionsSectionMain