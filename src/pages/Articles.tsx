import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { propTypes } from "../propTypes";

import TopicHeading from "../components/TopicHeading";
import showContentsObserver from "../functions/IntersectionObserver";
import pagination from "../functions/pagination";
import Pagination from "../components/Pagination";
import { PostsContext } from "../context/PostsContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Articles = () => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const { posts, setPosts }: any = useContext(PostsContext);
  const [pageArticles, setPageArticles] = useState<any>(
    posts && pagination(posts)
  );
  const [articles, setArticles] = useState<any>(0);
  const postsCollectionRef = collection(db, "posts");

  useLayoutEffect(() => {
    showContentsObserver("observer-item", 0, "20%");
    showContentsObserver("article-data", 0, "15%");

    scrollTo({ top: 0 });
  }, [articles]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    if (!posts) {
      setTimeout(() => {
        const getUsers = async () => {
          const data = await getDocs(postsCollectionRef);
          const i: any[] = [];
          data.docs.map((doc: any) => i.push(doc.data()));
          setPosts(i);
          setPageArticles(pagination(i));
        };

        getUsers();
        setLoading(false);
      }, 750);
    } else setLoading(false);
  }, []);

  useEffect(() => {
    posts && setPageArticles(pagination(posts));
  }, [posts]);

  useEffect(() => {
    posts && setArticles(pageArticles[page - 1]);
  }, [page, pageArticles]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <TopicHeading topic="Articles" />
      {loading ? (
        <div>LOXAI</div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 md:w-9/10 items-center gap-16 justify-items-center">
            {articles.map((post: any, i: number) => {
              return (
                <div
                  key={i}
                  className="flex flex-col hover:cursor-pointer transition duration-300 rounded-sm ease-in-out md:w-article-item-w-md md:h-aritcle-item-h-md items-start justify-start"
                >
                  <img
                    className="group-hover:opacity-80 observer-item opacity-0 object-cover w-full"
                    style={{ height: "55%" }}
                    src={post.imgUrl}
                  />
                  <div className="article-data translate-y-full opacity-0 h-full w-full flex flex-col">
                    <span className="text-sm font-medium py-8 text-primary-100">
                      NaN, ADMIN
                    </span>
                    <span className="font-semibold text-3xl leading-tight pb-5 text-primary-600">
                      {post.name}
                    </span>
                    <div className="flex flex-row justify-start items-center w-full h-full py-3">
                      <div className="rounded-full bg-black md:w-20 md:h-20" />
                      <div className="flex flex-col items-start justify-start pl-3">
                        <span className="font-bold">{post.writtenBy}</span>
                        <span className="text-xs font-medium text-primary-100">
                          {post.authorLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination
            posts={posts.length}
            currentPage={page}
            handlePageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Articles;
