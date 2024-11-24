const useScrollTo = () => {
    const handleScroll = () => {
        const targetSection = document.getElementById("subscriptionsSection");
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return handleScroll;
};

export default useScrollTo;
