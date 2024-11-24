"use client";

import React from "react";
import useScrollTo from "../hooks/useScrollTo";
import { useSidebar } from "../context/SideBarContext";

export default function SideBarMobileMenu() {
    const { isOpen, closeSidebar } = useSidebar();
    const handleScroll = useScrollTo();

    const handleScrollAndClose = () => {
        handleScroll();
        closeSidebar();
    };

    return (
        <div>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-[100] transition-opacity duration-300 sm:hidden"
                    onClick={closeSidebar}
                    id="backdrop"
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 bottom-0 z-[999] w-64 dark:bg-[#111c2a] bg-[#f1f1f1] border-e border-white dark:border-[#071321] pt-7 pb-10 overflow-y-auto 
        transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:hidden`}
                aria-label="Sidebar"
            >
                <div className="px-6">
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
                </div>
                {/* Sidebar content */}
                <div className="flex flex-col justify-center items-start mt-10 space-y-4 px-6">
                    <a className="text-black dark:text-white focus:text-[#43A2FE] hover:text-[#43A2FE] cursor-pointer">
                        <h3>الشروط و الأحكام</h3>
                    </a>
                    <a className="text-black dark:text-white focus:text-[#43A2FE] hover:text-[#43A2FE] cursor-pointer">
                        <h3>سياسة الخصوصية</h3>
                    </a>
                    <a className="text-black dark:text-white focus:text-[#43A2FE] hover:text-[#43A2FE] cursor-pointer">
                        <h3>تواصل معنا</h3>
                    </a>
                    <button
                        onClick={handleScrollAndClose}
                        className="text-black dark:text-white focus:text-[#43A2FE] hover:text-[#43A2FE] cursor-pointer"
                    >
                        <h3>باقاتنا</h3>
                    </button>
                    <button
                        type="button"
                        className="py-3 px-4 w-full items-center gap-x-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none focus:border-[#3784d1] disabled:opacity-50 disabled:pointer-events-none border-none bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:bg-[#3784d1]"
                    >
                        <h3>🚀إنطلق الأن</h3>
                    </button>
                    <button
                        type="button"
                        className="py-3 px-4 w-full flex flex-row justify-center items-center dark:border-[#364861] border-gray-300 bg-white hover:bg-gray-100 dark:bg-[#2b3c53] dark:hover:bg-[#3a506e] dark:focus:bg-[#364861] gap-x-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none border-none"
                    >
                        <i className="ri-global-fill text-lg text-black dark:text-white" />
                        <h3>تغيير اللغة</h3>
                    </button>
                </div>
            </div>
        </div>
    );
}
