"use client";

import React, { useState, useEffect } from "react";
import useTogglePrice from "../hooks/useTogglePrice";
import { useTranslations } from "next-intl";

function SubscriptionsSectionMain() {
    const t = useTranslations("HomePage");
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
                            {t("period-selection-month")}
                        </span>
                    </label>
                    <label
                        onClick={toggleAnnualy}
                        htmlFor="toggle-count-annual"
                        className={`relative inline-block py-2 px-6 cursor-pointer rounded-lg ${isAnnual ? "dark:bg-[#071321] bg-white" : "bg-transparent"
                            }`}
                    >
                        <span className="inline-block relative z-10 text-sm font-medium text-black cursor-pointer dark:text-white">
                            {t("period-selection-annual")}
                        </span>
                    </label>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 grid-cols-1 justify-between items-start w-full gap-6 md:px-0 px-4">
                {/* Freemium Plan */}
                <div className="flex flex-col h-full justify-between items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8 cursor-pointer hover:scale-[1.01] transition-all duration-300">
                    <div className="flex flex-col justify-center items-center gap-4 w-full">
                        <h3 className="font-bold md:text-right text-center">{t("freemuim-title")}</h3>
                        <span className="flex flex-row justify-center items-start gap-4">
                            <h1
                                className={`font-bold md:text-5xl text-4xl text-center transition-opacity duration-200 ${fadeClass}`}
                            >
                                {freemuim}
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400">{t("freemuim-period-monthly")}</p>
                        </span>
                        <span className="flex flex-col justify-start items-start gap-2 mt-8 w-full">
                            <p>{t("freemuim-future-1")}</p>
                            <p>{t("freemuim-future-2")}</p>
                            <p className="text-gray-500 dark:text-gray-400">{t("freemuim-future-3")}</p>
                            <p>{t("freemuim-future-4")}</p>
                            <p>{t("freemuim-future-5")}</p>
                            <p>{t("freemuim-future-6")}</p>
                            <p>{t("freemuim-future-7")}</p>
                            <p>{t("freemuim-future-8")}</p>
                            <p>{t("freemuim-future-9")}</p>
                            <p>{t("freemuim-future-10")}</p>
                        </span>
                    </div>
                    <a href='https://app.awraq.tech' className="md:mt-12 w-full mt-0 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:outline-none focus:bg-[#3784d1] disabled:opacity-50 disabled:pointer-events-none dark:bg-[#b2d9ff] dark:text-[#43A2FE] dark:hover:bg-[#a5d2ff] dark:focus:bg-[#a5d2ff]">
                        {t("go-packages")}
                    </a>
                </div>

                {/* Basic Plan */}
                <div className="flex flex-col h-full justify-between items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8 cursor-pointer hover:scale-[1.01] transition-all duration-300">
                    <div className="flex flex-col justify-center items-center gap-4 w-full">
                        <h3 className="font-bold md:text-right text-center">{t("basic-title")}</h3>
                        <div className="flex flex-row justify-center items-start gap-4">
                            <h1
                                className={`font-bold md:text-5xl text-4xl text-center transition-opacity duration-200 ${fadeClass}`}
                            >
                                {basic}
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400">{t("basic-price-currency")} / {period}</p>
                        </div>
                        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium dark:bg-[#b2d9ff] dark:text-[#5386d3] bg-[#43A2FE] text-white">{t("basic-badge")}</span>
                        <span className="flex flex-col justify-start items-start gap-2 mt-8 w-full">
                            <p>{t("basic-future-1")}</p>
                            <p>{t("basic-future-2")}</p>
                            <p className="text-gray-500 dark:text-gray-400">{t("basic-future-3")}</p>
                            <p>{t("basic-future-4")}</p>
                            <p>{t("basic-future-5")}</p>
                            <p>{t("basic-future-6")}</p>
                            <p>{t("basic-future-7")}</p>
                            <p>{t("basic-future-8")}</p>
                            <p>{t("basic-future-9")}</p>
                            <p>{t("basic-future-10")}</p>
                            <p>{t("basic-future-11")}</p>
                            <p>{t("basic-future-12")}</p>
                            <p>{t("basic-future-13")}</p>
                        </span>
                    </div>
                    <a href='https://app.awraq.tech' className="md:mt-12 w-full mt-0 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:outline-none focus:bg-[#3784d1] disabled:opacity-50 disabled:pointer-events-none dark:bg-[#b2d9ff] dark:text-[#43A2FE] dark:hover:bg-[#a5d2ff] dark:focus:bg-[#a5d2ff]">
                        {t("go-packages")}
                    </a>
                </div>

                {/* Pro Plan */}
                <div className="flex flex-col justify-between items-center rounded-xl gap-4 dark:bg-[#111c2a] bg-[#f1f1f1] p-8 cursor-pointer hover:scale-[1.01] transition-all duration-300">
                    <div className="flex flex-col justify-center items-center gap-4 w-full">
                        <h3 className="font-bold md:text-right text-center">{t("pro-title")}</h3>
                        <div className="flex flex-row justify-center items-start gap-4">
                            <h1
                                className={`font-bold md:text-5xl text-4xl text-center transition-opacity duration-200 ${fadeClass}`}
                            >
                                {pro}
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400">{t("pro-price-currency")} / {period}</p>
                        </div>
                        <span className="flex flex-col justify-start items-start gap-2 mt-8 w-full">
                            <p>{t("pro-future-1")}</p>
                            <p>{t("pro-future-2")}</p>
                            <p className="text-gray-500 dark:text-gray-400">{t("pro-future-3")}</p>
                            <p>{t("pro-future-4")}</p>
                            <p>{t("pro-future-5")}</p>
                            <p>{t("pro-future-6")}</p>
                            <p>{t("pro-future-7")}</p>
                            <p>{t("pro-future-8")}</p>
                            <p>{t("pro-future-9")}</p>
                            <p>{t("pro-future-10")}</p>
                            <p>{t("pro-future-11")}</p>
                            <p>{t("pro-future-12")}</p>
                            <p>{t("pro-future-13")}</p>
                            <p>{t("pro-future-14")}</p>
                            <p>{t("pro-future-15")}</p>
                        </span>
                    </div>
                    <a href='https://app.awraq.tech' className="md:mt-12 w-full mt-0 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#43A2FE] text-white hover:bg-[#3784d1] focus:outline-none focus:bg-[#3784d1] disabled:opacity-50 disabled:pointer-events-none dark:bg-[#b2d9ff] dark:text-[#43A2FE] dark:hover:bg-[#a5d2ff] dark:focus:bg-[#a5d2ff]">
                        {t("go-packages")}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionsSectionMain;
