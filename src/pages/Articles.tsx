import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { propTypes } from "../propTypes";

import TopicHeading from "../components/TopicHeading";
import showContentsObserver from "../functions/IntersectionObserver";
import pagination from "../functions/pagination";
import Pagination from "../components/Pagination";
import { PostsContext } from "../context/PostsContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

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
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <TopicHeading topic="Articles" />
          <div className="grid md:grid-cols-2 grid-cols-1 md:w-9/10 items-center md:gap-x-14 gap-y-40 justify-items-center">
            {articles.map((post: any, i: number) => {
              return (
                <Link
                  to={`/article/${post.name
                    .replaceAll(" ", "-")
                    .toLocaleLowerCase()}`}
                  state={{ post: post }}
                  key={i}
                  className="flex flex-col hover:cursor-pointer transition duration-300 rounded-sm ease-in-out md:w-article-item-w-md md:h-aritcle-item-h-md items-start justify-start"
                >
                  <img
                    className="group-hover:opacity-80 observer-item pb-3 opacity-0 object-cover w-full md:h-80"
                    src={post.imgUrl}
                  />
                  <div className="article-data translate-y-full opacity-0 h-full w-full">
                    <span className="text-xs font-medium text-primary-100">
                      NaN, ADMIN
                    </span>
                    <div className="flex flex-col items-start w-full h-full">
                      <div className="w-full h-32 flex justify-start items-center">
                        <span className="font-semibold md:text-2xl items-center lg:text-2xl xl:text-3xl leading-tight text-primary-600">
                          {post.name}
                        </span>
                      </div>
                      <div className="flex flex-row justify-start w-full h-fit">
                        <div className="rounded-full bg-black md:w-16 md:h-16" />
                        <div className="flex flex-col items-start justify-start pl-3">
                          <span className="font-bold">{post.writtenBy}</span>
                          <span className="text-xs font-medium text-primary-100">
                            {post.authorLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
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
