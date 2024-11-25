import { useTranslations } from 'next-intl';
import { useState } from 'react'

export default function useTogglePrice() {
    const [isAnnual, setIsAnnual] = useState<boolean>(false);
    const t = useTranslations("HomePage");

    const [period, setPeriod] = useState<string>(t("period-selection-month"));
    const [freemuim, setFreemuim] = useState<string>(t("freemuim-price-month"));
    const [basic, setBasic] = useState<string>('99');
    const [pro, setPro] = useState<string>('199');

    const toggleAnnualy = () => {
        setIsAnnual(true);
        setPeriod(t("period-selection-annual"));
        setFreemuim(t("freemuim-price-annual"))
        setBasic('999');
        setPro('1999');
    };

    const toggleMonthly = () => {
        setIsAnnual(false);
        setPeriod(t("period-selection-month"));
        setFreemuim(t("freemuim-price-month"))
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