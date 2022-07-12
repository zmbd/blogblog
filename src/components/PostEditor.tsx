import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useCallback, useRef, useState } from "react";
import EditorMenubar from "./EditorMenubar";

import "../EditorMenu.css";
import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Input from "./Input";

const PostEditor = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const editor: Editor | null = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
  });

  const titleSetter = (value: string) => {
    setTitle(value);
  };

  const authorSetter = (value: string) => {
    setAuthor(value);
  };

  const imgUrlSetter = (value: string) => {
    setImgUrl(value);
  };

  const publishPost = async () => {
    const docRef = await addDoc(collection(db, "posts"), {
      authorLabel: author,
      imgUrl: imgUrl,
      name: title,
      pathname: "/article/" + title.replace(/\s/g, "-"),
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
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 pb-9">
            <Input
              stateSetter={titleSetter}
              state={title}
              label="Post title"
              placeholder="Enter post title"
            />
            <Input
              stateSetter={authorSetter}
              state={author}
              label="Author"
              placeholder="Enter author name"
            />
            <Input
              stateSetter={imgUrlSetter}
              state={imgUrl}
              label="Image URL"
              placeholder="Enter image URL"
            />
          </div>
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
