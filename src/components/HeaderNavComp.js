import React from "react";
import { Link } from 'react-router-dom';

export const HeaderNavComp = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="flex justify-center col-span-1 p-5 items-center">
        <div>
          <p className="text-3xl font-bold text-white">উড়ে যা </p>
          <p className="text-sm text-white text-center"> ডট কম </p>
        </div>
      </div>
      <div className="col-span-3 p-5 flex justify-center items-center">
        <a href="index.html">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">হোম</p>
          </div>
        </a>
        <a href="index.html" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">আমাদের সম্পর্কে</p>
          </div>
        </a>
        <a href="index.html" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">বুকিং শর্তাবলী</p>
          </div>
        </a>

        <Link to="/searchzisan" className="ml-5">
  <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
    <p className="text-white">ফ্লাইট</p>
  </div>
</Link>
<Link to="/searchoffers" className="ml-5">
  <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
    <p className="text-white">হোটেল</p>
  </div>
</Link>
        <a href="index.html" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">যোগাযোগ করুন</p>
          </div>
        </a>
        <a href="index.html" className="ml-5">
          <div className="py-2 px-5 border-white border-[2px]">
            <p className="text-white">ফ্লাইট খুঁজুন</p>
          </div>
        </a>
      </div>
    </div>
  );
};
