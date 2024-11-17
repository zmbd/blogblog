import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { postType, propTypes } from "../propTypes";

import TopicHeading from "../components/TopicHeading";
import showContentsObserver from "../functions/IntersectionObserver";
import { pagination } from "../functions/pagination";
import Pagination from "../components/Pagination";
import { PostsContext } from "../context/PostsContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Spinner from "../components/Spinner";
import CardContainer from "../components/CardContainer";
import { useOutletContext } from "react-router-dom";

const Articles = () => {
  const [page, setPage] = useState<number>(1);
  const { loading, setLoading }: any = useOutletContext();
  const { posts, setPosts }: any = useContext(PostsContext);
  const [pageArticles, setPageArticles] = useState<any>(
    posts && pagination(posts)
  );
  const [articles, setArticles] = useState<any>();
  const postsCollectionRef = collection(db, "posts");

  useLayoutEffect(() => {
    showContentsObserver("article-data", 0.15, "0%", "active");
    scrollTo({ top: 0 });
  }, [articles]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    let timeout: any;
    if (!posts) {
      setLoading(true);
      timeout = setTimeout(() => {
        const getPosts = async () => {
          const data = await getDocs(postsCollectionRef);
          const i: any[] = [];
          data.docs.map((doc: any) => i.push(doc.data()));
          setPosts(i);
          setPageArticles(pagination(i));
        };

        getPosts();
        setLoading(false);
      }, 750);
    } else loading && setLoading(false);

    return () => clearTimeout(timeout);
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
          <div className="grid md:grid-cols-2 2xl:grid-cols-3 grid-cols-1 w-9/10 md:w-grid-box-md lg:w-grid-box-lg xl:w-grid-box-xl  2xl:w-grid-box-2xl 3xl:w-gird-box-3xl items-center gap-x-14 gap-y-12 md:gap-y-24 justify-items-center mb-32">
            {articles &&
              articles.map((post: postType, i: number) => {
                return (
                  <CardContainer
                    post={post}
                    specialLayout={false}
                    key={i}
                    forKey={i}
                    order_key={i}
                  />
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
