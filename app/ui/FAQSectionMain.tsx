import React from 'react'
import AccordionMenu from './AccordionMenu'
import { useTranslations } from 'next-intl';

function FAQSectionMain() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full max-w-6xl mx-auto mt-12">
        <h1 className='sm:text-4xl text-3xl font-bold sm:px-0 px-4'>{t("faq-title")}</h1>
        <AccordionMenu 
        title={t("faq-one-title")}
        description={t("faq-one-description")}
        />
        <AccordionMenu 
        title={t("faq-two-title")}
        description={t("faq-two-description")}
        />
        <AccordionMenu 
        title={t("faq-three-title")}
        description={t("faq-three-description")}
        />
        <AccordionMenu 
        title={t("faq-four-title")}
        description={t("faq-four-description")}
        />
    </div>
  )
}

export default FAQSectionMain