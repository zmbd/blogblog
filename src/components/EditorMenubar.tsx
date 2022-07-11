import React from "react";

import { Editor } from "@tiptap/react";

import "../EditorMenu.css";

const activeStyling = "bg-primary-500";

const EditorMenubar = (props: { editor: Editor | null }) => {
  const { editor } = props;
  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        className="h-full"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={editor.isActive("bold") ? activeStyling : ""}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z"
            fill={editor.isActive("bold") ? "white" : "black"}
          />
        </svg>
      </button>
      <button
        className="h-full"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={editor.isActive("italic") ? activeStyling : ""}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z"
            fill={editor.isActive("italic") ? "white" : "black"}
          />
        </svg>
      </button>
      <button
        className="h-full"
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={editor.isActive("strike") ? activeStyling : ""}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.086 4.086 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099.436.313.974.562 1.613.75.62.18 1.297.414 2.03.699z"
            fill={editor.isActive("strike") ? "white" : "black"}
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className="h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={editor.isActive("code") ? activeStyling : ""}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z"
            fill={editor.isActive("code") ? "white" : "black"}
          />
        </svg>
      </button>
      <div className="divider divider-horizontal"></div>
      {/* <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button> */}
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className="h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={editor.isActive("paragraph") ? activeStyling : ""}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 6v15h-2v-5a6 6 0 1 1 0-12h10v2h-3v15h-2V6h-3zm-2 0a4 4 0 1 0 0 8V6z"
            fill={editor.isActive("paragraph") ? "white" : "black"}
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className="h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={
            editor.isActive("heading", { level: 1 }) ? activeStyling : ""
          }
        >
          <path fill="none" d="M0 0H24V24H0z" />
          <path
            d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z"
            fill={editor.isActive("heading", { level: 1 }) ? "white" : "black"}
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className="h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={
            editor.isActive("heading", { level: 2 }) ? activeStyling : ""
          }
        >
          <path fill="none" d="M0 0H24V24H0z" />
          <path
            d="M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148 0-.966-.784-1.75-1.75-1.75-.918 0-1.671.707-1.744 1.606l-.006.144h-2C14.75 9.679 16.429 8 18.5 8z"
            fill={editor.isActive("heading", { level: 2 }) ? "white" : "black"}
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className="h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={
            editor.isActive("heading", { level: 3 }) ? activeStyling : ""
          }
        >
          <path fill="none" d="M0 0H24V24H0z" />
          <path
            d="M22 8l-.002 2-2.505 2.883c1.59.435 2.757 1.89 2.757 3.617 0 2.071-1.679 3.75-3.75 3.75-1.826 0-3.347-1.305-3.682-3.033l1.964-.382c.156.806.866 1.415 1.718 1.415.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75c-.286 0-.556.069-.794.19l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z"
            fill={editor.isActive("heading", { level: 3 }) ? "white" : "black"}
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className="h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={
            editor.isActive("heading", { level: 4 }) ? activeStyling : ""
          }
        >
          <path fill="none" d="M0 0H24V24H0z" />
          <path
            d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm9-12v8h1.5v2H22v2h-2v-2h-5.5v-1.34l5-8.66H22zm-2 3.133L17.19 16H20v-4.867z"
            fill={editor.isActive("heading", { level: 4 }) ? "white" : "black"}
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className="h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={
            editor.isActive("heading", { level: 5 }) ? activeStyling : ""
          }
        >
          <path fill="none" d="M0 0H24V24H0z" />
          <path
            d="M22 8v2h-4.323l-.464 2.636c.33-.089.678-.136 1.037-.136 2.21 0 4 1.79 4 4s-1.79 4-4 4c-1.827 0-3.367-1.224-3.846-2.897l1.923-.551c.24.836 1.01 1.448 1.923 1.448 1.105 0 2-.895 2-2s-.895-2-2-2c-.63 0-1.193.292-1.56.748l-1.81-.904L16 8h6zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z"
            fill={editor.isActive("heading", { level: 5 }) ? "white" : "black"}
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className="h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={
            editor.isActive("heading", { level: 6 }) ? activeStyling : ""
          }
        >
          <path fill="none" d="M0 0H24V24H0z" />
          <path
            d="M21.097 8l-2.598 4.5c2.21 0 4.001 1.79 4.001 4s-1.79 4-4 4-4-1.79-4-4c0-.736.199-1.426.546-2.019L18.788 8h2.309zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z"
            fill={editor.isActive("heading", { level: 6 }) ? "white" : "black"}
          />
        </svg>
      </button>
      <div className="divider divider-horizontal"></div>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className="h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={editor.isActive("bulletList") ? activeStyling : ""}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"
            fill={editor.isActive("bulletList") ? "white" : "black"}
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className="h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={editor.isActive("orderedList") ? activeStyling : ""}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"
            fill={editor.isActive("orderedList") ? "white" : "black"}
          />
        </svg>
      </button>
      {/* <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        code block
      </button> */}
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className="h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={editor.isActive("blockquote") ? activeStyling : ""}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
            fill={editor.isActive("blockquote") ? "white" : "black"}
          />
        </svg>
      </button>
      <button
        className="h-full"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
          className={editor.isActive("horizontalRule") ? activeStyling : ""}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z"
            fill={editor.isActive("horizontalRule") ? "white" : "black"}
          />
        </svg>
      </button>
      <div className="divider divider-horizontal"></div>
      <button
        className="h-full"
        onClick={() => editor.chain().focus().undo().run()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z"
            fill="#000"
          />
        </svg>
      </button>
      <button
        className="h-full"
        onClick={() => editor.chain().focus().redo().run()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="full"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M18.172 7H11a6 6 0 1 0 0 12h9v2h-9a8 8 0 1 1 0-16h7.172l-2.536-2.536L17.05 1.05 22 6l-4.95 4.95-1.414-1.414L18.172 7z"
            fill="#000"
          />
        </svg>
      </button>
    </>
  );
};

export default EditorMenubar;
