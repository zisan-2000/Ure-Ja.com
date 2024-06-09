import React from "react";
import { ButtonYellowComp } from "./ButtonYellowComp";
import FlyImage from "../assets/fly.jpeg";
import MapImage from "../assets/map.jpeg";

export const WorldTourComp = () => {
  return (
    <div className="h-[100%] px-20 py-10 mt-10">
      <div>
        <p className="text-3xl mt-1 text-center">
        আমরা আপনাকে সুরক্ষিত এবং সুখী ভাবে সম্পূর্ণ বিশ্বের অন্য অন্য দিকে পৌঁছে দেব। <br></br>
          <span className="text-[#3781c5]">আপনি আমাদের সাথে ভ্রমণ করার জন্য নিশ্চিত হোন।</span>
        </p>
        <div
          className="bg-contain w-full h-[500px]"
          style={{
            backgroundImage: `url("${MapImage}")`,
          }}
        ></div>
      </div>
    </div>
  );
};
