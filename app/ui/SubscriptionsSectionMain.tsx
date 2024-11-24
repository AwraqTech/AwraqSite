"use client";

import React, { useState, useEffect } from "react";
import useTogglePrice from "../hooks/useTogglePrice";

function SubscriptionsSectionMain() {
    const {
        isAnnual,
        freemuim,
        basic,
        pro,
        toggleAnnualy,
        toggleMonthly,
        period,
    } = useTogglePrice();

    const [fadeClass, setFadeClass] = useState("opacity-100");

    // Trigger fade effect when values change
    useEffect(() => {
        setFadeClass("opacity-0");
        const timeout = setTimeout(() => setFadeClass("opacity-100"), 200);
        return () => clearTimeout(timeout);
    }, [freemuim, basic, pro]);

    return (
        <div id="subscriptionsSection" className="flex flex-col justify-center items-center gap-4 w-full max-w-6xl mx-auto mt-12">
            {/* Toggle Section */}
            <div className="flex justify-end mb-3">
                <div id="toggle-count" className="p-1 inline-block rounded-lg dark:bg-[#111c2a] bg-[#f1f1f1]">
                    <label
                        onClick={toggleMonthly}
                        htmlFor="toggle-count-annual"
                        className={`relative inline-block py-2 px-6 cursor-pointer rounded-lg ${!isAnnual ? "dark:bg-[#071321] bg-white" : "bg-transparent"
                            }`}
                    >
                        <span className="inline-block relative z-10 text-sm font-medium text-black cursor-pointer dark:text-white">
                            شهري
                        </span>
                    </label>
                    <label
                        onClick={toggleAnnualy}
                        htmlFor="toggle-count-annual"
                        className={`relative inline-block py-2 px-6 cursor-pointer rounded-lg ${isAnnual ? "dark:bg-[#071321] bg-white" : "bg-transparent"
                            }`}
                    >
                        <span className="inline-block relative z-10 text-sm font-medium text-black cursor-pointer dark:text-white">
                            سنوي
                        </span>
                    </label>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid sm:grid-cols-3 grid-cols-1 justify-between items-start w-full gap-6 sm:px-0 px-4">
                {/* Freemium Plan */}
                <div className="flex flex-col h-full justify-between items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8 cursor-pointer hover:scale-[1.01] transition-all duration-300">
                    <div className="flex flex-col justify-center items-center gap-4 w-full">
                        <h3 className="font-bold sm:text-right text-center">الباقة المجانية</h3>
                        <span className="flex flex-row justify-center items-end gap-4">
                            <p className="text-gray-500 dark:text-gray-400">لأول 30 يوم</p>
                            <h1
                                className={`font-bold sm:text-5xl text-4xl text-center transition-opacity duration-200 ${fadeClass}`}
                            >
                                {freemuim}
                            </h1>
                        </span>
                        <span className="flex flex-col justify-start items-end gap-2 mt-8 w-full">
                            <p>عدد المنتجات 50 منتج</p>
                            <p>عدد الفروع فرع واحد فقط</p>
                            <p className="text-gray-500 dark:text-gray-400">مع كل فرع إضافة 249 ر.س شهريا</p>
                            <p>دعم الفواتير الإلكترونية</p>
                            <p>تطبيق كاشير</p>
                            <p>إدارة المصروفات</p>
                            <p>إستقبال 100 طلب يوميا</p>
                            <p>الحد الأقصى للعملاء 200 عميل</p>
                            <p>إستقبال جميع المدفوعات</p>
                            <p>خاضع لهيئة الزكاة و الضريبة</p>
                        </span>
                    </div>
                    <button type="button" className="sm:mt-12 w-full mt-0 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:outline-none focus:bg-[#3784d1] disabled:opacity-50 disabled:pointer-events-none dark:bg-[#b2d9ff] dark:text-[#43A2FE] dark:hover:bg-[#a5d2ff] dark:focus:bg-[#a5d2ff]">
                        إنطلق الآن
                    </button>
                </div>

                {/* Basic Plan */}
                <div className="flex flex-col h-full justify-between items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8 cursor-pointer hover:scale-[1.01] transition-all duration-300">
                    <div className="flex flex-col justify-center items-center gap-4 w-full">
                        <h3 className="font-bold sm:text-right text-center">أوراق الأساسية</h3>
                        <div className="flex flex-row justify-center items-end gap-4">
                            <p className="text-gray-500 dark:text-gray-400">ر.س / {period}</p>
                            <h1
                                className={`font-bold sm:text-5xl text-4xl text-center transition-opacity duration-200 ${fadeClass}`}
                            >
                                {basic}
                            </h1>
                        </div>
                        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium dark:bg-[#b2d9ff] dark:text-[#5386d3] bg-[#43A2FE] text-white">إختيارك الأفضل</span>
                        <span className="flex flex-col justify-start items-end gap-2 mt-8 w-full">
                            <p>عدد المنتجات 2500 منتج</p>
                            <p>عدد الفروع فرعين إثنين فقط</p>
                            <p className="text-gray-500 dark:text-gray-400">مع كل فرع إضافة 249 ر.س شهريا</p>
                            <p>دعم الفواتير الإلكترونية</p>
                            <p>تطبيق كاشير</p>
                            <p>إستقبال المسترجعات كحد 500 كل يوم</p>
                            <p>إدارة المخزون</p>
                            <p>إدارة الموردين كحد أقصى 100 مورد</p>
                            <p>إدارة المصروفات</p>
                            <p>إستقبال 2500 طلب يوميا</p>
                            <p>الحد الأقصى للعملاء 25,000 عميل</p>
                            <p>إستقبال جميع المدفوعات</p>
                            <p>خاضع لهيئة الزكاة و الضريبة</p>
                        </span>
                    </div>
                    <button type="button" className="sm:mt-12 w-full mt-0 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:outline-none focus:bg-[#3784d1] disabled:opacity-50 disabled:pointer-events-none dark:bg-[#b2d9ff] dark:text-[#43A2FE] dark:hover:bg-[#a5d2ff] dark:focus:bg-[#a5d2ff]">
                        إنطلق الآن
                    </button>
                </div>

                {/* Pro Plan */}
                <div className="flex flex-col justify-between items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8 cursor-pointer hover:scale-[1.01] transition-all duration-300">
                    <div className="flex flex-col justify-center items-center gap-4 w-full">
                        <h3 className="font-bold sm:text-right text-center">أوراق الإحترافية</h3>
                        <div className="flex flex-row justify-center items-end gap-4">
                            <p className="text-gray-500 dark:text-gray-400">ر.س / {period}</p>
                            <h1
                                className={`font-bold sm:text-5xl text-4xl text-center transition-opacity duration-200 ${fadeClass}`}
                            >
                                {pro}
                            </h1>
                        </div>
                        <span className="flex flex-col justify-start items-end gap-2 mt-8 w-full">
                            <p>عدد المنتجات لا محدود</p>
                            <p>عدد الفروع 3 فروع فقط</p>
                            <p className="text-gray-500 dark:text-gray-400">مع كل فرع إضافة 199 ر.س شهريا</p>
                            <p>دعم الفواتير الإلكترونية</p>
                            <p>تطبيق كاشير</p>
                            <p>إستقبال المسترجعات لا محدود كل يوم</p>
                            <p>إدارة المخزون</p>
                            <p>العروض الترويجية</p>
                            <p>نظام الإشتراكات - للمغاسل و النوادي</p>
                            <p>إدارة الموردين لا محدود</p>
                            <p>إدارة المصروفات</p>
                            <p>إستقبال طلبات لا محدودة يوما</p>
                            <p>عدد عملاء لا محدود</p>
                            <p>إستقبال جميع المدفوعات</p>
                            <p>خاضع لهيئة الزكاة و الضريبة</p>
                        </span>
                    </div>
                    <button type="button" className="sm:mt-12 w-full mt-0 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:outline-none focus:bg-[#3784d1] disabled:opacity-50 disabled:pointer-events-none dark:bg-[#b2d9ff] dark:text-[#43A2FE] dark:hover:bg-[#a5d2ff] dark:focus:bg-[#a5d2ff]">
                        إنطلق الآن
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionsSectionMain;
