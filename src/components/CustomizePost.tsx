import React from "react";

const CustomizePost = () => {
  const handleTextAreaInputChange = (): void => {
    const target = document.getElementById("textarea-post") as HTMLElement;
    target.style.height = "";
    target.style.height = `${target.scrollHeight}px`;
  };

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
              placeholder="Post content"
              id="textarea-post"
              onInput={() => handleTextAreaInputChange()}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizePost;
