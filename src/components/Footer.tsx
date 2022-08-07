import { FooterListItem } from "./FooterListItem";
import React from "react";

import {
  BsFillMapFill,
  BsFillTelephoneFill,
  BsMessenger,
} from "react-icons/bs";

import { FaMapMarker } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-primary-700">
      <div className="md:h-fit flex flex-col justify-start items-center py-12">
        <div className="w-full md:w-9/10 h-fit lg:w-footer-container-lg flex md:flex-row flex-col items-center justify-between">
          <div className="md:w-footer-item-1-md w-full md:h-64 h-60 flex flex-col items-start p-2">
            <h3 className="text-white font-semibold text-lg pb-6">Lorem</h3>
            <p className="text-grayish p-3 font-normal text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              quaerat harum reiciendis ab deserunt rem quisquam impedit quam,
              consectetur odit.
            </p>
          </div>
          <div className="md:w-footer-item-2-md w-full md:h-64 h-60 flex flex-col items-start p-2">
            <h3 className="text-white font-semibold text-lg pb-6">Lorem</h3>
            <ul className="text-grayish">
              <FooterListItem />
              <FooterListItem />
              <FooterListItem />
              <FooterListItem />
            </ul>
          </div>

          <div className="md:w-footer-item-3-md w-full md:h-64 h-60 flex flex-col items-start p-2">
            <h3 className="text-white font-semibold text-lg pb-6">Lorem</h3>
            <div className="text-grayish">
              <div className="flex flex-row h-14 items-center justify-start p-3">
                <FaMapMarker className="text-2xl text-primary-100" />
                <span className="pl-3">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </div>
              <div className="flex flex-row h-8 md:h-12 items-center justify-start p-3">
                <BsFillTelephoneFill className="text-lg text-primary-100" />
                <span className="pl-3">86 123 456 78</span>
              </div>
              <div className="flex flex-row h-8 md:h-12 items-center justify-start p-3">
                <BsMessenger className="text-lg text-primary-100" />
                <span className="pl-3">info@blog.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-center pt-10">
          <span className="text-lg text-gray-dark">
            Copyright ©2022 All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
