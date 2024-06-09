import React from "react";
import { InputTextComp } from "./InputTextComp";
import { IoIosAirplane } from "react-icons/io";
import { ButtonYellowComp } from "./ButtonYellowComp";

export const FlightBookingFormComp = () => {
  return (
    <div className="bg-white pb-5 w-[45%] rounded-3xl absolute mt-2 shadow shadow-gray-300 grid grid-cols-2 gap-4">
      <div className="col-span-2 p-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-3xl text-white">
        <p className="font-semibold">
          <span className="text-yellow-400">ফ্লাইট বুকিং</span> করুন
        </p>
      </div>
      <div className="col-span-2 flex bg-gray-800 text-white justify-center py-3 rounded-t-3xl">
        <div className="flex items-center">
          <input
            className="text-yellow-400 mr-2"
            type="radio"
            id="oneWay"
            name="tripType"
            value="oneWay"
          />
          <label htmlFor="oneWay" className="text-sm cursor-pointer">
            একমুখী
          </label>
        </div>
        <div className="flex items-center ml-4">
          <input
            className="text-yellow-400 mr-2"
            type="radio"
            id="roundTrip"
            name="tripType"
            value="roundTrip"
          />
          <label htmlFor="roundTrip" className="text-sm cursor-pointer">
            রাউন্ড ট্রিপ
          </label>
        </div>
      </div>
      <div className="col-span-1 p-5">
        {[1, 2, 3].map((index) => (
          <InputTextComp
            key={index}
            image={<IoIosAirplane />}
            placeholder={"শহরের নাম লিখুন"}
            label={`প্রস্থান ${index}`}
            extraStyle={index === 1 ? "" : "mt-2"}
          />
        ))}
      </div>
      <div className="col-span-1 p-5">
        {[4, 5, 6].map((index) => (
          <InputTextComp
            key={index}
            image={<IoIosAirplane />}
            placeholder={"শহরের নাম লিখুন"}
            label={`প্রস্থান ${index}`}
            extraStyle={index === 4 ? "" : "mt-2"}
          />
        ))}
      </div>
      <div className="col-span-2 px-5">
        <ButtonYellowComp label={"ফ্লাইট খুঁজুন"} extraStyle={"mt-5"} />
      </div>
    </div>
  );
};
