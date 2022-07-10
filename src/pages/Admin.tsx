import Login from "../components/Login";

import { collection, getDocs } from "firebase/firestore";
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";
import { UserProps } from "../propTypes";
import Spinner from "../components/Spinner";
import CustomizePost from "../components/CustomizePost";

const Admin = () => {
  const [posts, setPosts] = useState<any>();
  const [singlePost, setSinglePost] = useState<any>();
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const postsCollectionRef = collection(db, "posts");

  const handlePostSelection = (post: any): void => {
    const dropdownElement =
      document.querySelector<HTMLElement>(".dropdown-content");
    dropdownElement?.classList.toggle("dropdown-open");
    dropdownElement?.blur();

    setSinglePost(post);
  };

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

  useEffect(() => {
    if (sessionStorage.getItem("LOGGED_USER")) {
      const user = JSON.parse(sessionStorage.getItem("LOGGED_USER") || "");
      setUser(user);
    }
  }, []);

  const toggleCustomizePostModal = (): ReactElement => {
    return (
      <>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              Youve been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </div>
        </div>
      </>
    );
  };

  useEffect(() => {
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
        <div className="w-full h-full flex flex-col">
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
                  posts.map((post: any, i: number) => (
                    <li onClick={() => handlePostSelection(post)} key={i}>
                      <a>{post.name}</a>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <label
                htmlFor="my-modal-5"
                className="btn modal-button btn-success"
              >
                add post
              </label>
              <CustomizePost />
            </div>
          </div>
          <div className="w-full h-auto flex justify-center my-20">
            {singlePost && (
              <div className="card w-full sm:w-72 h-96 md:h-admin-card-md-h lg:w-96 bg-base-100 shadow-xl">
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
                      <button className="btn w-full btn-warning">Edit</button>
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
                          <div className="modal-action">
                            <a className="btn hover:btn-error">Delete</a>
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
