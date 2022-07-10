import React, { useCallback, useRef, useState } from "react";

import { AiOutlineBold } from "react-icons/ai";

const CustomizePost = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Post Customize Tool</h3>
          <div className="p-9 w-full flex flex-col ">
            <div className="w-full h-9 p-3 flex flex-row justify-start items-center rounded-t-lg bg-primary-200 text-3xl">
              <AiOutlineBold className="text-primary-500 border border-primary-700" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizePost;
