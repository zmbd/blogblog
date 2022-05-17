import React from "react";
const Newsletter = () => {
  return (
    <div className="subscribe w-full">
      <div className="md:h-72 sm:h-40 flex flex-col items-center justify-center bg-primary-whitegray">
        <h2 className="font-semibold md:text-3xl sm:text-2xl">
          Subscribe to our Newsletter
        </h2>
        <div className="md:pt-10 sm:pt-6">
          <input
            type="text"
            className="h-12 md:w-72 sm:w-60 bg-primary-whitegray border border-primary-600 rounded-l-sm px-3 text-primary-100"
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
