import React from 'react'
import Fashion4 from '../assets/Fashion4.svg'
export function FooterFour() {
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
                <p className="mb-4  text-base font-medium">Discover The Epitome of High Fashion</p>
                <p className="text-sm text-gray-900">
                  &copy; Copyright 2024. All Rights Reserved by Fashion.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-900">
                Website
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Shop-Now
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Orders
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-900">
                Contact Us
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    63786450
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
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Licensing
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
