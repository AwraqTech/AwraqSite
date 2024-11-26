"use client"

import FailureToast from '@/app/components/FailureToast';
import SubmittingButton from '@/app/components/SubmittingButton';
import SuccessToast from '@/app/components/SuccessToast';
import useSendEmail from '@/app/hooks/useSendEmail';
import { useTranslations } from 'next-intl';
import React from 'react'

export default function ContactUs() {
  const {
    email,
    setEmail,
    name,
    setName,
    phone,
    setPhone,
    inquiry,
    setInquiry,
    isSubmitting,
    errorMessage,
    handleSubmit,
    success,
    failed
  } = useSendEmail();
  const t = useTranslations("contactUs");

  return (
    <div className="flex flex-col justify-start gap-8 pt-28 w-full max-w-6xl mx-auto md:px-0 px-4">
      <h1 className="md:text-4xl text-3xl font-bold text-center">{t('title')}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-center">{t('description')}</p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-4">
          <div>
            <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
              {t('emailLabel')}
            </label>
            <div className="relative" dir='ltr'>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="hs-leading-icon"
                name="hs-leading-icon"
                className="py-3 px-4 ps-11 block w-full border-gray-200 bg-[#f1f1f1] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
                placeholder="you@site.com"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <i className='ri-mail-line text-lg text-neutral-400 dark:text-neutral-500' />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
              {t('nameLabel')}
            </label>
            <div className="relative" dir='ltr'>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="hs-leading-icon"
                name="hs-leading-icon"
                className="py-3 px-4 ps-11 block w-full border-gray-200 bg-[#f1f1f1] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
                placeholder="Mohammed Ahmed"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <i className='ri-id-card-line text-lg text-neutral-400 dark:text-neutral-500' />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">
              {t('phoneLabel')}
            </label>
            <div className="relative" dir='ltr'>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                id="hs-leading-icon"
                name="hs-leading-icon"
                className="py-3 px-4 ps-11 block w-full border-gray-200 bg-[#f1f1f1] shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-[#20344e]"
                placeholder="0512345678"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <i className='ri-phone-line text-lg text-neutral-400 dark:text-neutral-500' />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-8 mt-4">
          <label htmlFor="textarea-label" className="block text-sm font-medium mb-2 dark:text-white">
            {t('inquiryLabel')}
          </label>
          <textarea
            id="textarea-label"
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            className="py-3 px-4 block w-full border-gray-200 bg-[#f1f1f1] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#111c2a] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            rows={10}
          ></textarea>
        </div>
        <SubmittingButton title={t('sendButton')} isSubmitting={isSubmitting} />
      </form>
      {failed && (
        <FailureToast title={t('failureMessageTitle')} message={t('failureMessage')} />
      )}
      {success && (
        <SuccessToast title={t('successMessageTitle')} message={t('successMessage')} />
      )}
    </div>
  )
}