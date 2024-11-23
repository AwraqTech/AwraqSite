import { useState } from 'react'

export default function useTogglePrice() {
    const [isAnnual, setIsAnnual] = useState<boolean>(false);

    const [period, setPeriod] = useState<string>('شهريا');
    const [freemuim, setFreemuim] = useState<string>('مجانا');
    const [basic, setBasic] = useState<string>('99');
    const [pro, setPro] = useState<string>('199');

    const toggleAnnualy = () => {
        setIsAnnual(true);
        setPeriod('سنويا');
        setBasic('999');
        setPro('1999');
    };

    const toggleMonthly = () => {
        setIsAnnual(false);
        setPeriod('شهريا');
        setBasic('99');
        setPro('199');
    }
    return {
        isAnnual,
        period,
        freemuim,
        basic,
        pro,
        toggleAnnualy,
        toggleMonthly,
    }
}