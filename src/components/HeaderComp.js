import React from "react";
import FlayInnImage from "../assets/flyinn.jpeg";
import { ButtonYellowComp } from "./ButtonYellowComp";
import { FlightBookingFormComp } from "./FlightBookingFormComp";
import { HeaderNavComp } from "./HeaderNavComp";

export const HeaderComp = () => {
  return (
    <div
      className="w-full h-[80%] bg-red-300 bg-contain"
      style={{
        backgroundImage: `url("${FlayInnImage}")`,
        
      }}
    >
      <HeaderNavComp />
      <div className="grid grid-cols-2 h-[80%]">
        <div className="flex p-5 items-center">
          <div>
            <p className="text-white text-xl">উড়ে যা ডট কম </p>
            <p className="text-white text-5xl">প্রযুক্তিগত এবং অভিজ্ঞতামূলক - আমরা সত্যই বিশ্বস্ত। </p>
            <p className="text-yellow-400 text-5xl">
            পেশাদার, অভিজ্ঞ
            </p>
            <p className="text-white text-sm mt-3">
              <span className="text-yellow-400">উড়ে যা ডট কম</span> ফ্লাইন বাজেট আপনাকে সম্পূর্ণ পরিষেবা সরবরাহ করে একটি সমর্থনশীল ওয়েবসাইট।
            </p>
            <p className="text-white text-sm">
            কম দামে পূর্ণ পরিষেবা এবং অভিজ্ঞতার সঙ্গে পেশাদার বিমানপ্রয়াণ।{" "}
              <span className="text-yellow-400">reduce fairs.</span>
            </p>
            <ButtonYellowComp label={"ফ্লাইট খুঁজুন।"} extraStyle={"flex mt-5"} />
          </div>
        </div>
        <div className="flex">
          <FlightBookingFormComp />
        </div>
      </div>
    </div>
  );
};
