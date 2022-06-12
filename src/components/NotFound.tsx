import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const NotFound = () => {
  const [redirectTime, setRedirectTime] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);
  const interval = useRef<any>(null);
  const navigate = useNavigate();

  const clearInterval = (): void => {
    window.clearInterval(interval.current);
  };

  useEffect(() => {
    interval.current = window.setInterval(() => {
      setRedirectTime((prevRedirectTime) => prevRedirectTime - 1);
    }, 1000);

    return clearInterval;
  }, []);

  useEffect(() => {
    let timeout: any;
    if (redirectTime === 0) {
      setLoading(true);
      timeout = setTimeout(() => navigate("/"), 750);
      return clearInterval;
    }
    return () => clearTimeout(timeout);
  }, [redirectTime]);

  useLayoutEffect(() => {
    scrollTo({ top: 0 });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center leading-normal font-bold">
      {!loading ? (
        <>
          <span className="text-7xl text-primary-700">Oops...</span>
          <div className="w-full h-auto flex flex-col justify-center items-center p-10">
            <span className="text-5xl text-primary-600">
              The page you are looking for is with our Lord now...
            </span>
            <div className="mt-32 inline-flex items-center">
              <span className="text-primary-500 text-lg">
                You will be redirected to <b>Home</b> page in{" "}
              </span>
              <span className="text-primary-700 w-1 text-3xl ml-2">
                {" " + redirectTime}
              </span>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default NotFound;
