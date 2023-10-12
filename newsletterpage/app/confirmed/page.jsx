"use client";
import Image from "next/image";
import React from "react";
import iconSuccess from "../../public/icon-success.svg";
import { useRouter } from "next/navigation";

const Confirmed = () => {
  const router = useRouter();
  const email = router.query;

  return (
    <main className="bg-gray-700 w-full min-h-screen flex justify-center items-center">
      <div className="min-h-screen md:min-h-0 md:w-[28rem] flex flex-col justify-between gap-12 p-8 bg-white md:rounded-3xl md:p-8 ">
        <div className="flex flex-col justify-center flex-1 gap-8">
          <div>
            <Image src={iconSuccess} />
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-gray-700 text-4xl font-bold">
              Thanks for subscribing
            </div>
            <div className="text-gray-700">
              A confirmation email has been sent to
              <span className="font-bold"> {email}</span>. Please open it and
              click the button inside to confirm your sunscription.
            </div>
          </div>
        </div>
        <button className="px-4 py-4 bg-gray-700 text-white rounded-xl hover:bg-red-500 ">
          Dismiss massege
        </button>
      </div>
    </main>
  );
};

export default Confirmed;
