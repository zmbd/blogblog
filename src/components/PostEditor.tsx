import { Editor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import EditorMenubar from './EditorMenubar';

import '../EditorMenu.css';
import {
  doc,
  addDoc,
  collection,
  getDocs,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import Input from './Input';
import { EditorProps } from '../propTypes';

const PostEditor = (props: EditorProps) => {
  const { post, closeModal, edit } = props;

  const [title, setTitle] = useState('');
  const [authorLabel, setAuthorLabel] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorImage, setAuthorImage] = useState('');

  const editor: Editor | null = useEditor({
    extensions: [StarterKit],
    content: post?.post
      ? post.post
      : '<h1>This is a post template</h1><hr><p>Edit me please</p>',
  });

  const titleSetter = (value: string): void => {
    setTitle(value);
  };

  const authorLabelSetter = (value: string): void => {
    setAuthorLabel(value);
  };

  const imgUrlSetter = (value: string): void => {
    setImgUrl(value);
  };

  const authorNameSetter = (value: string): void => {
    setAuthorName(value);
  };

  const authorImageSetter = (value: string): void => {
    setAuthorImage(value);
  };

  const publishPost = async () => {
    if (
      editor?.getHTML &&
      title &&
      authorLabel &&
      imgUrl &&
      authorName &&
      authorImage
    ) {
      const modal = document.querySelector<HTMLInputElement>('#editormodal');

      if (!edit) {
        const docRef = await addDoc(collection(db, 'posts'), {
          authorLabel: authorLabel,
          imgUrl: imgUrl,
          name: title,
          pathname: '/article/' + title.replace(/\s/g, '-'),
          post: editor?.getHTML(),
          writtenBy: authorName,
          writtenOn: new Date(),
        });
        return;
      }

      if (
        post?.post !== editor?.getHTML() ||
        post?.name !== title ||
        post?.authorLabel !== authorLabel ||
        post?.imgUrl !== imgUrl ||
        post?.writtenBy !== authorName
      ) {
        let _post: any;
        await getDocs(collection(db, 'posts')).then((data) => {
          _post = data.docs.find((doc: any) => doc.data().name === title);
        });

        console.log(_post);
        const postDocRef = await doc(db, 'posts', _post?.id);
        await updateDoc(postDocRef, {
          authorImage: authorImage,
          authorLabel: authorLabel,
          imgUrl: imgUrl,
          name: title,
          post: editor?.getHTML(),
          writtenBy: authorName,
        });
        return;
      }
    }
  };

  useEffect(() => {
    if (post) {
      setTitle(post.name);
      setAuthorLabel(post.authorLabel);
      setImgUrl(post.imgUrl);
      setAuthorName(post.writtenBy);
    }
  }, [post]);

  return (
    <>
      <input type="checkbox" id="editormodal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Post Customize Tool</h3>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 pb-9">
            <Input
              stateSetter={titleSetter}
              state={title}
              label="Post title"
              placeholder="Enter post title"
              data-testid="post-title"
            />
            <Input
              stateSetter={authorLabelSetter}
              state={authorLabel}
              label="Author label"
              placeholder="Enter author label"
              data-testid="author-label"
            />
            <Input
              stateSetter={imgUrlSetter}
              state={imgUrl}
              label="Image URL"
              placeholder="Enter image URL"
              data-testid="image-url"
            />
            <Input
              stateSetter={authorNameSetter}
              state={authorName}
              label="Enter author name"
              placeholder="Author name"
              data-testid="author-name"
            />
            <Input
              stateSetter={authorImageSetter}
              state={authorImage}
              label="Author Image URL"
              placeholder="Enter author iamge URL"
              data-testid="author-image-url"
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
            <button
              onClick={() => publishPost()}
              className="btn btn-success"
              data-testid="publish-update-button"
            >
              {post ? 'Update' : 'Publish'}
            </button>
            <label
              onClick={() => closeModal()}
              htmlFor="editormodal"
              className="btn"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostEditor;
