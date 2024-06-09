"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Popup({
  popupHandler,
  acceptedAmount,
  popupContent,
}) {
  const router = useRouter();
  useRouter;

  const [paymentStatus, setPaymentStatus] = useState(false);

  function submitPaymentHandler() {
    setPaymentStatus(true);
  }

  function goToDashboard() {
    router.push("/");
  }

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
            {!paymentStatus && (
              <div>
                <p className="font-light mt-10">{popupContent}</p>
                <h5 className="text-3xl font-light text-center mt-5 mb-10">
                  £{acceptedAmount.toLocaleString("en-US")}
                </h5>
              </div>
            )}
          </div>
          {paymentStatus && (
            <h5 className="text-xl font-light my-5 text-center">
              Payment done! Go to dashbord.
            </h5>
          )}
          <div className="text-end">
            {acceptedAmount === 0 ? (
              <button
                onClick={popupHandler}
                className="bg-[#3E826D] text-white px-5 py-2 rounded shadow-lg w-fit tracking-wider">
                Close
              </button>
            ) : (
              <div>
                {!paymentStatus && (
                  <button
                    onClick={popupHandler}
                    className="bg-red-500 text-white px-5 py-2 rounded shadow-lg w-fit tracking-wider me-4">
                    Cancel
                  </button>
                )}

                <button
                  className="bg-[#3E826D] text-white px-5 py-2 rounded shadow-lg w-fit tracking-wider"
                  onClick={
                    !paymentStatus ? submitPaymentHandler : goToDashboard
                  }>
                  {!paymentStatus ? "Confirm" : "Dashboard"}
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
