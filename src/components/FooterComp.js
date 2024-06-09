import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export const FooterComp = () => {
  return (
    <div className="h-[50%] px-20 py-5 bg-slate-600 ">
      <div class="grid grid-cols-4 gap-10 text-white h-[80%]">
        <div>
          <p className="text-2xl font-bold">উড়ে যা </p>
          <p className="text-sm">ডট কম</p>
          <p className="mt-5 text-sm">
          আমাদের বিমান সংস্থা "উড়ান" আপনাদের জন্য অভিজ্ঞতা এবং সুবিধা নিশ্চিত করে।{" "}
          </p>
          <div className="flex h-14 items-center">
            <a href="#">
              <BsFacebook size={20} />
            </a>
            <a href="#">
              {" "}
              <AiFillTwitterCircle size={20} className="ml-2" />
            </a>
            <a href="#">
              {" "}
              <AiFillInstagram size={20} className="ml-2" />
            </a>
            <a href="#">
              {" "}
              <AiFillLinkedin size={20} className="ml-2" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">যোগাযোগ করুন</p>
          <p className="text-sm">ডট কম</p>
          <div className="items-center mt-10">
            <p className="text-sm ml-2">Phone: +92 123 456789</p>
            <p className="text-sm ml-2">Email: info@gmail.com</p>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">ফ্লাইট</p>
          <div className="items-center mt-10">
            <p className="text-sm ml-2">Asia</p>
            <p className="text-sm ml-2">Africa</p>
            <p className="text-sm ml-2">Europe</p>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">উপকারী সংজুক</p>
          <div className="items-center mt-10">
            <p className="text-sm ml-2">যোগাযোগ করুন</p>
            <p className="text-sm ml-2">আমাদের সম্পর্কে</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full text-white mt-10 text-sm h-[10%]">
        <p>সমস্ত অধিকার সংরক্ষিত।</p>
        <p>শর্তাবলী - গোপনীয়তা নীতি।</p>
      </div>
    </div>
  );
};
