"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#002453] to-[#2b476c] px-6 md:px-16 pb-0 xl:px-40 py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 justify-between gap-20 border-b-2 border-blue-300 pb-10">
        <div className="flex flex-col ">
          <h1
            className="relative inline-block text-xl font-bold text-white mb-4 
  after:content-[''] after:block after:w-10 after:h-[2px] after:bg-blue-400 after:mt-2"
          >
            Address
          </h1>
          <p className="text-gray-200 mt-8">
            Alam Bhaban House # 51 1st floor,Rd No 17, Banani C/A, Dhaka 1213
          </p>
          <p className="text-gray-200 mt-2 ">(+880) 1779999938</p>
          <p className="text-gray-200 mt-2">support@takeoffbd.com</p>
        </div>
        <div>
          <h1
            className="relative inline-block text-xl font-bold text-white mb-4 
  after:content-[''] after:block after:w-10 after:h-[2px] after:bg-blue-400 after:mt-2"
          >
            Help
          </h1>
          <p className="text-gray-200 mt-8">FAQ</p>
          <p className="text-gray-200 mt-2 ">Privacy Policy</p>
          <p className="text-gray-200 mt-2">Terms And Conditions</p>
          <p className="text-gray-200 mt-2">Refund & Cancellation</p>
        </div>
        <div>
          <h1
            className=" grid-cols-1 relative inline-block text-xl font-bold text-white mb-4 
  after:content-[''] after:block after:w-10 after:h-[2px] after:bg-blue-400 after:mt-2"
          >
            Quick Links
          </h1>
          <div className="grid grid-cols-1 gap-1">
          <Link href="/about" className="text-gray-200 mt-8 "> About</Link>
          <Link href="/contact" className="text-gray-200 mt-2"> Contact us</Link>
          <Link href="/bank_details" className="text-gray-200 mt-2">Bank Details</Link>
          </div>
        </div>
        <div className=" ">
          <h1
            className="relative inline-block text-xl font-bold text-white mb-4 
  after:content-[''] after:block after:w-10 after:h-[2px] after:bg-blue-400 after:mt-2"
          >
            Payment Method
          </h1>
          <div className="img-box grid grid-cols-4 cursor-pointer mt-8 gap-2">
            <Link href="https://bd.visa.com/" target="_blank">
            <img src="visaCard.svg.png" alt="Description" />
            </Link>
            <Link href="https://www.mastercard.com/" target="_blank">
              <img src="Item.png" alt="Description" />
            </Link>
            
            <Link href="https://www.amex.com/" target="_blank">
              <img src="am.png" alt="Description" />
            </Link>
            <Link href="https://www.bkash.com/" target="_blank">
              <img src="bkash.svg.png" alt="Description" />
            </Link>
          <Link href="https://www.nagad.com.bd/" target="_blank">
              <img src="Item (1).png" alt="Description" />
            </Link>
            <Link href="https://www.upaybd.com//" target="_blank">
              <img src="Item (2).png" alt="Description" />
            </Link>
            <Link href="https://www.flytap.com/pt-pt/" target="_blank">
              <img src="Item (3).png" alt="Description" />
            </Link>
         
              <img src="Item (4).png" alt="Description" />
           
            <Link href="https://www.dutchbanglabank.com/" target="_blank">
              <img src="Item (5).png" alt="Description" />
            </Link>
            <Link href="https://www.dinersclub.com/" target="_blank">
              <img src="Item (6).png" alt="Description" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-0 flex flex-col-reverse  xl:flex-row justify-between items-center ">
        <p className="text-gray-200 mb-10 text-center mt-10">
          © 2023 TakeOff. All rights reserved.
        </p>

        <div className="md:flex md:gap-1">
          <button className="hover:shadow-lg cursor-pointer hover:shadow-indigo-800/100 transition  flex gap-2 p-3 bg-gray-800 justify-center items-center w-50 text-white  mb-2 md:rounded-l-lg  ">
            <h1>Verified by</h1>
            <img src="varify.png" alt="Description" className="" />
          </button>

          <button className=" hover:shadow-lg hover:shadow-indigo-800/100 transition flex gap-2 p-3 bg-gray-800 cursor-pointer justify-center items-center w-50 text-white  mb-2 md:rounded-r-lg  ">
            <h1>Authorized by</h1>
            <img src="iata.png" alt="Description" className="" />
          </button>
        </div>
        <div className="flex gap-2 mt-5 mb-5">
          <Link href="https://twitter.com" target="_blank">
            <img src="twiter.png" alt="twiter" />
          </Link>
          <Link href="https://www.youtube.com/@takeofftravels9509/" target="_blank">
            <img src="youtube.png" alt="youtube" />
          </Link>
          <Link href="https://www.facebook.com/takeofftravelsbd/" target="_blank">
            <img src="facebook.png" alt="facebook" />
          </Link>
          <Link href="https://bd.linkedin.com/jobs/view/assistant-manager-at-takeoff-travels-4315277692" target="_blank">
            <img src="in.png" alt="linkedin" />
          </Link>
        </div>
      </div>
    </div>
  );
}
