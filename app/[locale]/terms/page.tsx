"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function Terms() {
  const t = useTranslations("TermsPage");

  const renderListItems = (section: string, itemCount: number) =>
    Array.from({ length: itemCount }, (_, index) => (
      <li key={index} className="text-gray-500 dark:text-gray-400">
        {t(`${section}_item${index + 1}`)}
      </li>
    ));

  return (
    <div className="flex flex-col justify-start gap-8 pt-28 w-full max-w-6xl mx-auto md:px-0 px-4">
      <h1 className="md:text-4xl text-3xl font-bold text-center">{t("title")}</h1>
      <p className="text-gray-500 dark:text-gray-400">{t("intro")}</p>
      <div className="gap-4 flex flex-col">
        <h1 className="text-2xl font-bold">{t("section1_title")}</h1>
        <p className="text-gray-500 dark:text-gray-400">{t("section1_content")}</p>

        <h1 className="text-2xl font-bold">{t("section2_title")}</h1>
        <ul className="list-disc pl-6">{renderListItems("section2", 3)}</ul>

        <h1 className="text-2xl font-bold">{t("section3_title")}</h1>
        <ul className="list-disc pl-6">{renderListItems("section3", 4)}</ul>

        <h1 className="text-2xl font-bold">{t("section4_title")}</h1>
        <ul className="list-disc pl-6">{renderListItems("section4", 3)}</ul>

        <h1 className="text-2xl font-bold">{t("section5_title")}</h1>
        <p className="text-gray-500 dark:text-gray-400">{t("section5_content")}</p>

        <h1 className="text-2xl font-bold">{t("section6_title")}</h1>
        <p className="text-gray-500 dark:text-gray-400">{t("section6_content")}</p>

        <h1 className="text-2xl font-bold">{t("section7_title")}</h1>
        <p className="text-gray-500 dark:text-gray-400">{t("section7_content")}</p>
      </div>
    </div>
  );
}
