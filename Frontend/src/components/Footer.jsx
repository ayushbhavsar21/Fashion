import React from 'react'
import Fashion4 from '../assets/Fashion4.svg'
import { useTranslation } from 'react-i18next'

export default function Footer() {

 const {t}=useTranslation()

  return (
    <section className="relative overflow-hidden py-10 bg-quaternary text-white font-playfair">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
               <img src={Fashion4} className='h-[15vh]' alt="" />
               
              </div>
              <div>
                <p className="mb-4  text-base font-medium">{t("Discover The Epitome of High Fashion")}</p>
                <p className="text-sm text-gray-900">
                  &copy; {t("Copyright 2024. All Rights Reserved by Fashion.")}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-900">
                {t("Website")}
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    {t("Home")}
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    {t("Shop-Now")}
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    {t("Orders")}
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-900">
                {t("Contact Us")}
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    {t("63786450")}
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    fashion@gmail.com
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    www.fashion.com
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-900">
                {t("Legals")}
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    {t("Terms")} &amp; {t("Conditions")}
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    {t("Privacy Policy")}
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    {t("Licensing")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
