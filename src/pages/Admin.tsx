import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";

const Admin = () => {
  const [posts, setPosts] = useState<any>();
  const [singlePost, setSinglePost] = useState<any>();
  const postsCollectionRef = collection(db, "posts");

  const handlePostSelection = (post: any): void => {
    const dropdownElement =
      document.querySelector<HTMLElement>(".dropdown-content");
    dropdownElement?.classList.toggle("dropdown-open");
    dropdownElement?.blur();

    setSinglePost(post);
  };

  useEffect(() => {
    console.log("useEffect called..");
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc: any) => ({ ...doc.data() })));
    };

    getPosts();
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-16 pr-32 inline-flex items-center justify-between">
        <Link to={"/"} className="ml-16 text-5xl">
          &larr;
        </Link>
        <div className="inline-flex justify-between items-center w-auto">
          <span>
            Welcome, <b>admin</b>
          </span>
          <button className="btn bg-primary-500 no-animation ml-5">
            Log out
          </button>
        </div>
      </div>
      <div data-theme="mytheme" className="dropdown 2xl:mt-28 mt-16">
        <label tabIndex={0} className="btn min-w-60 w-auto ml-16 bg-primary">
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
                  <button className="btn w-full btn-error">Delete</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
