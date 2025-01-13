import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <>
      <div className="container mx-auto lg:h-screen py-6 px-4">
        <div className="flex justify-center items-center flex-col lg:flex-row h-full gap-6 lg:gap-x-8 xl:gap-x-12">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              Crafts - مكتبة كرافتس
            </h1>
            <p className="mt-3 text-2xl text-gray-600 font-bold dark:text-neutral-400">
              تقطيع ليزر - هدايا العاب تعليمية - تنمية مهارات
            </p>
          </div>

          <div className="relative flex-1 w-full h-full min-h-[250px]">
            <Image
              className="rounded-xl object-contain px-5"
              src="/images/banner.jpg"
              alt="Hero Image"
              loading="eager"
              property="true"
              fill
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
