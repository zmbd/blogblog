import React from "react";

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
          <div className="p-9 w-full">
            <textarea
              className="textarea w-full textarea-primary"
              placeholder="Bio"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizePost;
