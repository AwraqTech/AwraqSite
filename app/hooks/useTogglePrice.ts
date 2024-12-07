import { useTranslations } from 'next-intl';
import { useState } from 'react'

export default function useTogglePrice() {
    const [isAnnual, setIsAnnual] = useState<boolean>(false);
    const t = useTranslations("HomePage");

    const [period, setPeriod] = useState<string>(t("period-selection-month"));
    const [freemuim, setFreemuim] = useState<string>(t("freemuim-price-month"));
    const [basic, setBasic] = useState<string>('44.85');
    const [pro, setPro] = useState<string>('90.85');

    const toggleAnnualy = () => {
        setIsAnnual(true);
        setPeriod(t("period-selection-annual"));
        setFreemuim(t("freemuim-price-annual"))
        setBasic('448.5');
        setPro('908.5');
    };

    const toggleMonthly = () => {
        setIsAnnual(false);
        setPeriod(t("period-selection-month"));
        setFreemuim(t("freemuim-price-month"))
        setBasic('44.85');
        setPro('90.85');
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