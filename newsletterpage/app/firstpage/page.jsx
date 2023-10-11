import Image from "next/image";
import React from "react";
import iconList from "../../public/icon-list.svg";
import bannerMobile from "../../public/illustration-sign-up-desktop.svg";
import bannerDesktop from "../../public/illustration-sign-up-desktop.svg";

const FirstPage = () => {
  return (
    <main className="bg-gray-700 w-full flex min-h-screen justify-center items-center">
      <div className="md:h-3/4 flex flex-col md:flex-row-reverse gap-12 p-4 bg-white  md:rounded-3xl md:p-8 ">
        <div id="banner" className="h-full -m-4 ">
          <div id="banner-mobile" className="">
            <Image
              className="w-full object-contain  md:hidden"
              src={bannerMobile}
              alt="Banner Mobile"
            />
          </div>
          <div id="banner-desktop ">
            <Image
              className="object-contain hidden md:block"
              src={bannerDesktop}
              alt="Banner Desktop"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center md:p-8">
          <div className="font-bold text-4xl text-gray-700">Stay Updated!</div>
          <div className="flex flex-col gap-4">
            <div>
              Join 60,000+ product managers receiving monthly updates on:
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-4">
                <Image src={iconList} alt="icon List" />
                <p>Product discovery and building what matters</p>
              </div>
              <div className="flex items-start gap-4">
                <Image src={iconList} alt="icon List" />
                <p>Measuring to ensure updates are a succes</p>
              </div>
              <div className="flex items-start gap-4">
                <Image src={iconList} alt="icon List" />
                <p>And much more!</p>
              </div>
            </div>
          </div>
          <form action="" className="flex flex-col gap-4">
            <div className="grid grid-cols-2">
              <input
                type="email"
                className="border border-opacity-30 border-gray-700 rounded-lg px-4 py-4 peer col-span-2 order-last invalid:border-red-500
                invalid:bg-tomato
                invalid:bg-opacity-20
                invalid:text-tomato
                invalid:focus:border-red-500
                invalid:active:border-red-500
                invalid:focus-visible:outline-red-500"
                placeholder="email@company.com"
                id="email"
                name="email"
                required
              />
              <label
                htmlFor="email"
                className="text-sm text-gray-700 font-bold"
              >
                Email address
              </label>
              <span className="text-sm text-red-500 font-bold invisible peer-invalid:visible text-end">
                Valid email required
              </span>
            </div>
            <button
              type="submit"
              className="rounded-lg px-4 py-4 text-white bg-gray-700 hover:bg-red-500  font-semibold"
            >
              Subscribe to montly newsletter
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default FirstPage;
