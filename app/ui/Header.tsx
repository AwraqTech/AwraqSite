import React from 'react'

export default function Header() {
  return (
    <header className='flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-transparent text-sm py-3 z-50 absolute top-0 left-0 right-0'>
      <nav className='max-w-6xl w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between'>
        <a
          className="sm:order-1 flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
          href="#"
        >
          <img
            src="/awraq-logo.svg"
            className="h-10 object-contain dark:hidden"
            alt="Logo"
          />
          <img
            src="/dark-awraq-logo.svg"
            className="h-10 object-contain hidden dark:block"
            alt="Dark Logo"
          />
        </a>
        <div className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2'>
          <div className='flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5'>
            <a className='text-black dark:text-white focus:text-[#3B34BE] hover:text-[#564fd6] cursor-pointer'>
              <h3>الشروط و الأحكام</h3>
            </a>
            <a className='text-black dark:text-white focus:text-[#3B34BE] hover:text-[#564fd6] cursor-pointer'>
              <h3>الشروط و الأحكام</h3>
            </a>
            <a className='text-black dark:text-white focus:text-[#3B34BE] hover:text-[#564fd6] cursor-pointer'>
              <h3>الشروط و الأحكام</h3>
            </a>
          </div>
        </div>
        <div className="sm:order-3 flex items-center gap-x-2">
          <button
            type="button"
            className="hs-collapse-toggle relative size-11 flex justify-center items-center gap-x-2 rounded-lg border dark:border-[#364861] border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#2b3c53] dark:hover:bg-[#3a506e] dark:focus:bg-[#364861]"
            id="hs-navbar-alignment-collapse"
            aria-expanded="false"
            aria-controls="hs-navbar-alignment"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-navbar-alignment"
          >
            <i className='ri-sun-fill text-lg text-white hidden dark:flex' />
            <i className='ri-moon-fill text-black text-lg flex dark:hidden' />
          </button>
          <button
            type="button"
            className="sm:flex hidden hs-collapse-toggle relative size-11 justify-center items-center gap-x-2 rounded-lg border dark:border-[#364861] border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#2b3c53] dark:hover:bg-[#3a506e] dark:focus:bg-[#364861]"
            id="hs-navbar-alignment-collapse"
            aria-expanded="false"
            aria-controls="hs-navbar-alignment"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-navbar-alignment"
          >
            <i className='ri-global-fill text-lg text-black dark:text-white' />
          </button>
          <button
            type="button"
            className="sm:hidden hs-collapse-toggle relative size-11 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:hover:bg-white/90 dark:focus:bg-white/90"
            id="hs-navbar-alignment-collapse"
            aria-expanded="false"
            aria-controls="hs-navbar-alignment"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-navbar-alignment"
          >
            <i className='ri-menu-line text-black text-lg' />
            <i className='ri-close-large-line text-black text-lg hs-collapse-open:block hidden shrink-0' />
            <span className="sr-only">Toggle</span>
          </button>
          <button type="button" className="py-3 px-4 sm:inline-flex hidden items-center gap-x-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none focus:border-[#3784d1] disabled:opacity-50 disabled:pointer-events-none border-none bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:bg-[#3784d1]">
            <h3>🚀إنطلق الأن</h3>
          </button>
        </div>
      </nav>
    </header>
  )
}