import { useState } from "react";

const useToggleAccordion = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    return { isOpen, toggleAccordion };
};

export default useToggleAccordion;
