"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function Privacy() {
  const t = useTranslations("PrivacyPage");

  const renderListItems = (section: string, itemCount: number) =>
    Array.from({ length: itemCount }, (_, index) => (
      <li key={index} className="text-gray-500 dark:text-gray-400">
        {t(`${section}_item${index + 1}`)}
      </li>
    ));

  return (
    <div className="flex flex-col justify-start gap-8 pt-28 w-full max-w-6xl mx-auto sm:px-0 px-4">
      <h1 className="sm:text-4xl text-3xl font-bold text-center">{t("privacy_title")}</h1>
      <p className="text-gray-500 dark:text-gray-400">{t("privacy_intro")}</p>

      <h1 className="text-2xl font-bold">{t("privacy_section1_title")}</h1>
      <p className="text-gray-500 dark:text-gray-400">{t("privacy_section1_content")}</p>
      <ul className="list-disc pl-5">{renderListItems("privacy_section1", 5)}</ul>

      <h1 className="text-2xl font-bold">{t("privacy_section2_title")}</h1>
      <p className="text-gray-500 dark:text-gray-400">{t("privacy_section2_content")}</p>
      <ul className="list-disc pl-5">{renderListItems("privacy_section2", 5)}</ul>

      <h1 className="text-2xl font-bold">{t("privacy_section3_title")}</h1>
      <p className="text-gray-500 dark:text-gray-400">{t("privacy_section3_content")}</p>
      <ul className="list-disc pl-5">{renderListItems("privacy_section3", 3)}</ul>

      <h1 className="text-2xl font-bold">{t("privacy_section4_title")}</h1>
      <p className="text-gray-500 dark:text-gray-400">{t("privacy_section4_content")}</p>

      <h1 className="text-2xl font-bold">{t("privacy_section5_title")}</h1>
      <p className="text-gray-500 dark:text-gray-400">{t("privacy_section5_content")}</p>

      <h1 className="text-2xl font-bold">{t("privacy_section6_title")}</h1>
      <p className="text-gray-500 dark:text-gray-400">{t("privacy_section6_content")}</p>
      <ul className="list-disc pl-5">{renderListItems("privacy_section6", 4)}</ul>

      <h1 className="text-2xl font-bold">{t("privacy_section7_title")}</h1>
      <p className="text-gray-500 dark:text-gray-400">{t("privacy_section7_content")}</p>

      <h1 className="text-2xl font-bold">{t("privacy_section8_title")}</h1>
      <p className="text-gray-500 dark:text-gray-400">{t("privacy_section8_content")}</p>

      <h1 className="text-2xl font-bold">{t("privacy_section9_title")}</h1>
      <p className="text-gray-500 dark:text-gray-400">{t("privacy_section9_content")}</p>
    </div>
  );
}
