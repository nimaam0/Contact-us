import React, { Component } from "react";
import ItemBox from "./components/mapItems/Item";
import { setAdress } from "./components/mapItems/items";
import  CustomButton  from "./components/Customs/CustomButton";
import CustomFrame from "./components/Customs/frame";
import CustomInput from "./components/Customs/CustomInput";

export default function ContactUs() {
  return (
    <div className="bg-blue-950 font-[peyda] flex items-center justify-center min-h-screen p-5 lg:p-20 relative"> 
      <div className="tracking-normal container max-w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 2xl:px-36 mx-auto relative">
        {/* Background Image with Overlay and Heading */}
        <header className="relative w-ful h-[450px] lg:h-[505px] bg-cover bg-center rounded-3xl lg:rounded-2xl overflow-hidden" style={{ backgroundImage: "url('/image 12.svg')" }}>
          <div className="absolute inset-0 gap-3 bg-black bg-opacity-20 lg:bg-opacity-40 flex flex-col items-start justify-end text-white p-8">
            <h1 className="text-2xl lg:text-4xl font-bold">تماس با ما</h1>
            <p className="mb-3 max-w-2xl lg:leading-9 text-base lg:text-2xl font-normal">در تماس باشید؛ همکاری‌های بزرگ از یک گفت‌وگو شروع می‌شوند!</p>
            <ItemBox data={setAdress} />
          </div>
        </header>
        <main className="flex flex-col lg:flex-row mt-16 gap-x-16 gap-y-10">
          {/* Right Contact Form */}
          <section className="w-full lg:w-1/2 h-auto">
            <h2 className="text-4xl text-justify font-bold mb-10">اگر سوال یا درخواستی دارید، می‌توانید از طریق فرم زیر با ما در ارتباط باشید</h2>
            <form className="flex flex-col space-y-4">
              <CustomInput placeholder="نام و نام خانوادگی" />
              <CustomInput placeholder="شماره تماس" />
              <textarea placeholder="متن پیام" className="bg-blue-950 p-3 border-gray-500 border rounded-xl h-56" />
              <CustomButton text="ارسال پیام"/>
            </form>
          </section>
          {/* Left Map */}
          <section className="w-full lg:w-1/2 h-96 lg:h-auto rounded-2xl overflow-hidden">
            <CustomFrame width="100%" height="100%"/>
          </section>
        </main>
      </div>
    </div>  
  );
}
