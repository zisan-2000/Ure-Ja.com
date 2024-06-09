import React from "react";
import CoinImage from "../assets/coin.png";

export const ServicesComp = () => {
  const ServiceItems = () => {
    return (
      <div className="mt-5">
        <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
          <img src={CoinImage} className="w-[20px] h-[20px]" />
        </div>
        <p className="text-black text-lg mt-2">মূল্য হ্রাসের নিশ্চয়তা </p>
        <div className="w-[200px] mt-1">
          <p className="text-sm text-gray-400">
          মূল্য হ্রাসের নিশ্চয়তা" সম্পর্কে অধিক জানতে আপনি আমাদের সাথে যোগাযোগ করতে পারেন। আমরা আপনার জন্য সর্বোত্তম মূল্য অফার করতে অগ্রগতি করব। 
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="h-[80%] px-20 py-20">
      <div class="grid grid-cols-2 gap-2 h-[90%]">
        <div>
          <p className="text-sm">সর্বোত্তম পছন্দ</p>
          <p className="text-3xl mt-1">
            
কেন উচিত ?
<br></br>আপনি 
            <span className="text-[#3781c5]">
              {" "}
              আমাদের <br></br> সেবা ব্যবহার করুন

            </span>
          </p>
          <ServiceItems />
        </div>
        <div>
          <div className="flex justify-between">
            <ServiceItems />
            <ServiceItems />
          </div>
          <div className="flex justify-between">
            <ServiceItems />
            <ServiceItems />
          </div>
        </div>
      </div>
    </div>
  );
};
