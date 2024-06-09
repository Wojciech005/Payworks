'use client'

import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";

export default function Popup({ popupHandler, acceptedAmount, popupContent, buttonName }) {

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 popup">
        <section className="w-[90%] h-auto xs:w-96 xs:h-80 bg-white rounded-lg shadow-xl p-4 flex flex-col justify-between">
          <div className="">
            <Image
              src="/Payworks-logo.svg"
              width={120}
              height={120}
              alt="Payworks - company logo."
            />
            <p className="font-light mt-10">{popupContent}</p>
            <h5 className="text-3xl font-light text-center my-5">£{acceptedAmount}.00</h5>
            {/* {paymentStatus && <h5 className="text-xl font-light my-5">Payment done! Back to dashbord</h5>} */}
        
          </div>
          {/* <Link href="/" className="bg-teal-700 text-white px-3 py-2 rounded shadow"></Link> */}
          <div className="text-end">
          <button  onClick={popupHandler} className="bg-emerald-600 text-white px-5 py-2 rounded shadow-lg w-fit tracking-wider mt-10 xs:mt-0">{buttonName}</button>
          </div>
        </section>
      </div>
    </>
  );
}
