"use client";

import React from "react";
import useToggleAccordion from "../hooks/useToggleAccordion";

interface AccordionMenuProps {
    title: string;
    description: string;
}

function AccordionMenu({ title, description }: AccordionMenuProps) {
    const { isOpen, toggleAccordion } = useToggleAccordion();

    return (
        <div className={`w-full max-w-3xl md:px-0 px-6`}>
            <button
                className={`hs-accordion-toggle ${isOpen ? "text-[#43A2FE]" : "text-gray-800"} 
                    py-3 inline-flex justify-start items-center gap-x-3 w-full font-semibold text-start 
                    hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg 
                    disabled:opacity-50 disabled:pointer-events-none 
                    dark:${isOpen ? "text-[#43A2FE]" : "text-neutral-200"} dark:hover:text-neutral-400 
                    dark:focus:text-neutral-400`}
                onClick={toggleAccordion}
                aria-expanded={isOpen}
                aria-controls="hs-basic-collapse-one"
            >
                {/* Plus Icon */}
                <svg
                    className={`${isOpen ? "hidden" : "block"} size-3.5`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                </svg>
                {/* Minus Icon */}
                <svg
                    className={`${isOpen ? "block" : "hidden"} size-3.5`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 12h14"></path>
                </svg>
                {title}
            </button>
            <div
                id="hs-basic-collapse-one"
                className={`hs-accordion-content w-full overflow-hidden transition-all duration-300 ease-in-out 
                    ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}
                role="region"
                aria-labelledby="hs-basic-heading-one"
            >
                <p className="text-gray-800 dark:text-neutral-200 mt-4">
                    {description}
                </p>
            </div>
            <hr className="border-gray-200 dark:border-[#111c2a] mt-6" />
        </div>
    );
}

export default AccordionMenu;
