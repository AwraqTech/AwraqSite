import { useState } from 'react'

function useToggleAccordion() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((prevState) => !prevState);
    };

    return{
        isOpen,
        toggleAccordion
    }
}

export default useToggleAccordion