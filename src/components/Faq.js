import React, { useState } from 'react';

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">সচরাচর জিজ্ঞাসিত প্রশ্ন</h1>
      <div className="divide-y divide-gray-300">
        <Question question="আমি কিভাবে ফ্লাইট বুক করতে পারি?" answer="আপনি আমাদের ওয়েবসাইটে যান, আপনার পছন্দসই গন্তব্য, ভ্রমণের তারিখ, এবং পছন্দসই ফ্লাইটের সময় নির্ধারণ করুন এবং তারপরে বুকিং সম্পন্ন করার নির্দেশিকা অনুসরণ করুন।" />
        <Question question="আপনি কোন পেমেন্ট মেথড গুলি গ্রহণ করেন?" answer="আমরা বিভিন্ন পেমেন্ট মেথড গুলি গ্রহণ করি, যেমন ক্রেডিট কার্ড, ডেবিট কার্ড, এবং পেপাল। আপনি বুকিং প্রক্রিয়ার সময় আপনার পছন্দসই পেমেন্ট মেথড চয়ন করতে পারেন।" />
        <Question question="আমি আমার বুকিং পরিবর্তন করতে পারি?" answer="হাঁ, আপনি আপনার বুকিং পরিবর্তন করতে পারেন, যেমন আপনার ভ্রমণের তারিখ আপডেট করা বা প্যাসেঞ্জার তথ্য পরিবর্তন করা। তবে, দয়া করে লক্ষ্য করুন যে, পরিবর্তন অনুমোদনযোগ্যতা এবং উপলব্ধিতে সাবধানতা সহ পরিবর্তনের দাম লাগতে পারে।" />
        <Question question="আপনার রদ করার নীতি কী?" answer="আমাদের রদ করার নীতি আপনার কেনা টিকেটের ধরণ এবং এয়ারলাইনের নীতির উপর নির্ভর করে। অনুগ্রহ করে বুকিং প্রক্রিয়ার সময় উপলব্ধ শর্তাবলী বা সাহায্যের জন্য আমাদের গ্রাহক সহায়তা দলের সাথে যোগাযোগ করুন।" />
        <Question question="আপনি কি রিফান্ড অফার করেন?" answer="রিফান্ডের অর্থনীতি কেনা টিকেটের প্রকার এবং এয়ারলাইনের রিফান্ড নীতি নির্ভর করে। কিছু ক্ষেত্রে, নির্দিষ্ট সময়সীমা মধ্যে আপনি আপনার বুকিং বাতিল করলে আপনি রিফান্ডের অর্থনীতি অনুমোদিত হতে পারেন এবং নির্দিষ্ট শর্তসাপেক্ষে মিলতে পারে। বিস্তারিত জানতে অথবা তথ্যের জন্য অনুগ্রহ করে বুকিং প্রক্রিয়ার শর্তাবলী বা আমাদের গ্রাহক সহায়তা দলের সাথে যোগাযোগ করুন।" />
        <Question question="আমি কিভাবে গ্রাহক সমর্থনে যোগাযোগ করতে পারি?" answer="আমাদের গ্রাহক সমর্থন দল আপনাদের সাহায্য করতে 24/7 উপলব্ধ। আপনি যে কোনও অনুসন্ধান বা আপনার বুকিং সহায়তা সহ ফোন, ইমেল, বা লাইভ চ্যাটের মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারেন।" />
      </div>
    </div>
  );
};

const Question = ({ question, answer = null }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="py-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAnswer}>
        <h2 className="text-lg font-semibold">{question}</h2>
        <span className="text-xl">{showAnswer ? "−" : "+"}</span>
      </div>
      {showAnswer && answer && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
};

export default FAQ;
