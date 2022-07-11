import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useCallback, useRef, useState } from "react";
import EditorMenubar from "./EditorMenubar";

import "../EditorMenu.css";
import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

const PostEditor = () => {
  const editor: Editor | null = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
  });

  const publishPost = async () => {
    const docRef = await addDoc(collection(db, "posts"), {
      authorLabel: "John Doe",
      imgUrl:
        "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80",
      name: "Custom generated post",
      pathname: "/article/custom-generated-post",
      post: editor?.getHTML(),
      writtenBy: "John Doe",
      writtenOn: new Date(),
    });
    console.log(docRef.id);
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
          <div className="w-full h-auto flex flex-col justify-start items-center"></div>
          <div className="w-full flex flex-col border border-black">
            <div
              id="button-group"
              className="w-full h-9 flex flex-row justify-start items-center rounded-t-lg text-3xl border-b border-black"
            >
              <EditorMenubar editor={editor} />
            </div>
            <div className="outline-none px-2 py-6">
              <EditorContent editor={editor} />
            </div>
          </div>
          <div className="modal-action">
            <button onClick={() => publishPost()} className="btn btn-success">
              Publish
            </button>
            <button className="btn">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostEditor;
