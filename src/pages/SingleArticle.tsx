import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import Post from "../components/Post";
import Spinner from "../components/Spinner";
import TopicHeading from "../components/TopicHeading";
import { db } from "../firebase/firebase";

const SingleArticle = () => {
  const location = useLocation();
  const { post }: any = location.state !== null && location.state;
  const [currentPost, setCurrentPost] = useState<any>(post);
  const postsCollectionRef = collection(db, "posts");

  useLayoutEffect(() => scrollTo({ top: 0 }), []);

  useEffect(() => {
    let timeout: any;
    if (currentPost === undefined) {
      const getUser = async () => {
        const data = await getDocs(postsCollectionRef);

        const filtered = data.docs.filter(
          (doc: any) => window.location.pathname === doc.data().pathname
        );

        setCurrentPost(filtered[0].data());
      };
      setTimeout(() => {
        getUser();
      }, 750);
    }

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-auto flex flex-col justify-start items-center">
      {currentPost === undefined ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <TopicHeading topic="Single Article" />
          <CardContainer
            post={currentPost}
            order_key={2}
            contentsLoaded={true}
            specialLayout={true}
          />
          <Post post={currentPost.post} />
        </>
      )}
    </div>
  );
};

export default SingleArticle;
