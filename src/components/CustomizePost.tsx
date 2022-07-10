import React, { useCallback, useRef, useState } from "react";

import { AiOutlineBold } from "react-icons/ai";

import {
  createEditor,
  BaseEditor,
  Descendant,
  Transforms,
  Editor,
  Text,
} from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";

type CustomElement = {
  type: "paragraph" | "code";
  children: CustomText[];
};
type CustomText = { text: string; bold?: boolean; italic?: boolean };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const CustomizePost = () => {
  const editorRef = useRef<Editor>();
  if (!editorRef.current) editorRef.current = withReact(createEditor());
  const editor = editorRef.current;

  const renderElement = useCallback((props: any) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props: any) => {
    return <Leaf {...props} />;
  }, []);

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
            <Slate editor={editor} value={initialValue}>
              <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onKeyDown={(e) => {
                  if (!e.ctrlKey) return;
                  switch (e.key) {
                    case "`": {
                      e.preventDefault();
                      const [match]: any = Editor.nodes(editor, {
                        match: (n: any) => n.type === "code",
                      });
                      e.preventDefault();
                      Transforms.setNodes(
                        editor,
                        { type: match ? "paragraph" : "code" },
                        { match: (n) => Editor.isBlock(editor, n) }
                      );
                      break;
                    }
                    case "b": {
                      e.preventDefault();
                      const [match]: any = Editor.nodes(editor, {
                        match: (n: any) => n.bold,
                      });
                      Transforms.setNodes(
                        editor,
                        { bold: match ? false : true },
                        { match: (n) => Text.isText(n), split: true }
                      );
                      break;
                    }
                  }
                }}
              />
            </Slate>
          </div>
        </div>
      </div>
    </>
  );
};

const CodeElement = (props: any) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props: any) => {
  return <p {...props.attributes}>{props.children}</p>;
};

const Leaf = (props: any) => {
  return (
    <span
      {...props.attributes}
      className={props.leaf.bold ? "font-bold" : "font-normal"}
    >
      {props.children}
    </span>
  );
};

export default CustomizePost;
