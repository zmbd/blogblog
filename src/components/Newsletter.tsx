import React from "react";
const Newsletter = () => {
  return (
    <div className="subscribe w-full">
      <div className="lg:h-72 h-auto flex flex-col items-center justify-center bg-primary-whitegray">
        <h2 className="font-semibold md:text-3xl text-2xl py-7">
          Subscribe to our Newsletter
        </h2>
        <div className="md:pt-10 sm:pt-6 p-7 inline-flex justify-center">
          <input
            type="text"
            className="h-12 md:w-72 sm:w-60 w-1/2 bg-primary-whitegray border border-primary-600 rounded-l-sm px-3 text-primary-100"
            placeholder="Enter email address"
          />
          <button className="h-12 bg-primary-600 px-3 font-medium text-primary-whitegray rounded-r-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
