import React, { useLayoutEffect } from "react";

const NotFound = () => {
  useLayoutEffect(() => {
    scrollTo({ top: 0 });
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center leading-normal font-bold text-primary-600">
      <span className="text-7xl">Oops...</span>
      <div className="md:w-5/12 h-auto flex justify-center items-center p-10">
        <span className="text-5xl">
          The page you are looking for is with our Lord now...
        </span>
      </div>
    </div>
  );
};

export default NotFound;
