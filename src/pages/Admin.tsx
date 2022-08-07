import Login from "../components/Login";

import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";
import { postType, UserProps } from "../propTypes";
import Spinner from "../components/Spinner";
import PostEditor from "../components/PostEditor";

type alertType = {
  value: boolean;
  text: string;
}

const Admin = () => {
  const [posts, setPosts] = useState<postType[]>();
  const [singlePost, setSinglePost] = useState<postType>();
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [displayEditor, setDisplayEditor] = useState<boolean>(false);
  const [displayAddPostEditor, setDisplayAddPostEditor] =
    useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<alertType>();
  const postsCollectionRef = collection(db, "posts");

  const alertSetter = (text: string):void => {
    setShowAlert({
      value: true,
      text: text
    });

    setTimeout(() => {
      setShowAlert({
        value: false,
        text: ""
      })
    }, 5000);
  }

  const handlePostSelection = (post: postType): void => {
    const dropdownElement =
      document.querySelector<HTMLElement>(".dropdown-content");
    dropdownElement?.classList.toggle("dropdown-open");
    dropdownElement?.blur();

    setSinglePost(post);
  };

  const handleDeleteAction = async (post: postType): Promise<void> => {

    let _post: any;
    await getDocs(collection(db, "posts")).then((data) => {
      _post = data.docs.find((doc: any) => doc.data().name === post.name);
    });

    await deleteDoc(doc(db, "posts", _post?.id));
    setSinglePost(undefined);

    setShowAlert({value: true, text: "Post was successfully deleted."});
    setTimeout(() => {
      setShowAlert({value: false, text: ""});
    }, 5000);
  }

  const updateUserState = (value: UserProps): void => {
    sessionStorage.setItem("LOGGED_USER", JSON.stringify(value));
    setUser(value);
  };

  const logUserOut = (): void => {
    setUser(null);
    sessionStorage.clear();
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const closeEditorModal = (): void => {
    setDisplayEditor(false);
  };

  const closeAddPostEditorModal = (): void => {
    setDisplayAddPostEditor(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("LOGGED_USER")) {
      const user = JSON.parse(sessionStorage.getItem("LOGGED_USER") || "");
      setUser(user);
    }
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc: any) => ({ ...doc.data() })));
    };

    getPosts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Spinner />
        </div>
      ) : user ? (
        <div className="w-full h-full flex flex-col justify-start items-center">
          {showAlert?.value && (
            <div className="mt-16 fixed alert bg-primary-500 text-white shadow-lg w-full h-12 sm:w-48 md:w-96">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{showAlert.text}</span>
              </div>
            </div>
          )
        }
          <div className="w-full h-16 pr-32 inline-flex items-center justify-between">
            <Link to={"/"} className="ml-16 text-5xl">
              &larr;
            </Link>
            <div className="inline-flex justify-between items-center w-auto">
              <span>
                Welcome, <b>admin</b>
              </span>
              <button
                onClick={() => logUserOut()}
                className="btn bg-primary-500 no-animation ml-5"
              >
                Log out
              </button>
            </div>
          </div>
          <div className="w-full h-auto flex flex-row 2xl:mt-28 mt-16">
            <div data-theme="mytheme" className="dropdown mr-16">
              <label
                tabIndex={0}
                className="btn w-60 lg:w-96 ml-16 bg-primary overflow-hidden"
              >
                {singlePost ? singlePost.name : "Select post"}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu ml-16 p-2 shadow bg-base-100 rounded-box w-auto"
              >
                {posts &&
                  posts.map((post: postType, i: number) => (
                    <li onClick={() => handlePostSelection(post)} key={i}>
                      <a>{post.name}</a>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <label
                htmlFor="editormodal"
                onClick={() => setDisplayAddPostEditor(true)}
                className="btn modal-button btn-success"
              >
                add post
              </label>
              {displayAddPostEditor && (
                <PostEditor alertSetter={alertSetter} closeModal={closeAddPostEditorModal} edit={false} />
              )}
            </div>
          </div>
          <div className="w-full h-auto flex justify-center my-20">
            {singlePost && (
              <div className="card w-full h-96 lg:h-admin-card-md-h lg:w-96 bg-base-100 shadow-xl">
                <figure className="h-3/5">
                  <img
                    src={singlePost.imgUrl}
                    className="w-full h-full"
                    alt="alt"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{singlePost.name}</h2>
                  <p>Editable post, choose options below.</p>
                  <div className="card-actions flex-nowrap flex-row w-full h-full">
                    <div className="w-full h-full">
                      <label
                        htmlFor="editormodal"
                        onClick={() => setDisplayEditor(true)}
                        className="btn w-full btn-warning modal-button"
                      >
                        edit post
                      </label>
                      {displayEditor && (
                        <PostEditor
                          alertSetter={alertSetter}
                          post={singlePost}
                          closeModal={closeEditorModal}
                          edit={true}
                        />
                      )}
                    </div>
                    <div className="h-full w-1/5">
                      <label
                        htmlFor="my-modal-3"
                        className="btn w-full modal-button btn-error"
                      >
                        delete
                      </label>
                      <input
                        type="checkbox"
                        id="my-modal-3"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box relative">
                          <label
                            htmlFor="my-modal-3"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                          >
                            ✕
                          </label>
                          <h3 className="text-lg font-bold mr-4">
                            This action is {""}
                            <span className="text-error">IRREVERSIBLE</span> and
                            cannot be undone. Please confirm your action by
                            clicking on the delete button below.
                          </h3>
                          <div className="modal-action" onClick={() => handleDeleteAction(singlePost)}>
                            <label htmlFor="my-modal-3" className="btn btn-error">
                              Delete
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Login updateUserState={updateUserState} />
      )}
    </>
  );
};

export default Admin;
