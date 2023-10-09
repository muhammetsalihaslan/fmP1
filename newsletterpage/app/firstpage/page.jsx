import Image from "next/image";
import React from "react";
import iconList from "../../public/icon-list.svg";
import bannerMobile from "../../public/illustration-sign-up-desktop.svg";
import bannerDesktop from "../../public/illustration-sign-up-desktop.svg";
const FirstPage = () => {
  return (
    <main className="bg-gray-700 w-full min-h-screen flex justify-center items-center">
      <div className="bg-white w-2/4 md:h-3/4 flex flex-col md:flex-row-reverse gap-12 p-4 md:rounded-3xl md:p-8">
        <div id="banner" className="h-full -m-4">
          <div id="banner-mobile">
            <Image
              className="w-full object-contain md:hidden"
              src={bannerMobile}
              alt="Banner Mobile"
            />
          </div>
          <div id="banner-desktop">
            <Image
              className="object-contain md:block"
              src={bannerDesktop}
              alt="Banner Desktop"
            />
          </div>
        </div>
        <div className="mt-20 ml-8 w-2/4npm run de">
          <h1 className="font-bold text-4xl text-slate-700 ">Stay Updated</h1>
          <div className="flex flex-col gap-5">
            <p className="mt-6 ">
              Join 60,000+ product mangers receiving montly updates on:
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <Image src={iconList} alt="icon List" />
                <p>Product discovery and building what matters</p>
              </div>
              <div className="flex items-start gap-4">
                <Image src={iconList} alt="icon List" />
                <p>Measuring to ensure updates are a success</p>
              </div>
              <div className="flex items-start gap-4">
                <Image src={iconList} alt="icon List" />
                <p>And much more!</p>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2">
              <input
                type="email"
                className="border border-gray-700/25 rounded-lg px-4 py-4 peer col-span-2 order-last invalid:border-red-500 "
                id="email"
                name="email"
                required
              />
              <label
                htmlFor="email"
                className="text-sm text-gray-700 font-bold"
              >
                Email adress
              </label>
              <span className="text-sm text-tomato font-bold invisible peer-invalid:visible text-end">
                Valid email required
              </span>
            </div>
            <button
              type="submit"
              className="bg-gray-700 hover:bg-tomato rounded-lg px-4 py-4 text-white font-semibold"
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
