import React from "react";
import { ButtonYellowComp } from "./ButtonYellowComp";
import FlyImage from "../assets/fly.jpeg";

export const ProfessionalExpComp = () => {
  return (
    <div className="h-[80%] px-20 py-[140px] mb-10">
      <div class="grid grid-cols-2 gap-5 h-[90%]">
        <div className="flex justify-center">
        <div
  className="bg-contain w-[550px] h-[350px]"
  style={{
    backgroundImage: `url("${FlyImage}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
></div>


        </div>
        <div>
          <div>
            <div>
              <p className="text-sm">সর্বোত্তম পরিবেশনার ব্যাপারে আমরা অত্যন্ত নির্ভরযোগ্য। </p>
              <p className="text-3xl mt-1">
              আমাদের দক্ষ, পেশাদার দল আপনার কাছে প্রফেশনাল, অভিজ্ঞ পরিবেশনা করবে।<br></br>
                <span className="text-[#3781c5]">
                  {" "}
                  আমাদের সাথে কাজ করে আপনি সঠিক নির্ণয় নিতে পারবেন এবং সম্পূর্ণ সন্তুষ্ট হবেন।
                </span>
              </p>
            </div>
          </div>

          <p className="mt-3">
          স্বাগতম আকাশে পাখির সম্প্রদায়ে! আমরা গর্বিতভাবে প্রদান করছি আকাশে উড়ানের সেবা। 
          </p>
          <p className="mt-5">
          আমাদের বাংলাদেশের আকাশে উড়ানের সফরে আপনাকে স্বাগতম! আমরা আপনার স্বপ্নকে পাখির মত বাড়িয়ে তুলতে সাহায্য করতে প্রস্তুত। আসুন, একটি নতুন উড়ানের অভিজ্ঞতা অবসর করুন আমাদের সংগে! আমাদের ওয়েবসাইটে আপনি পাবেন সমস্ত উড়ানের তথ্য, টিকিট বুকিং বিবরণ এবং অনেক আরও। স্বপ্ন দেখুন, আকাশে উড়ে যান!
          </p>
          <div className="flex">
            <ButtonYellowComp label={"আরও পড়ুন।"} extraStyle={"mt-10"} />
          </div>
        </div>
      </div>
    </div>
  );
};
