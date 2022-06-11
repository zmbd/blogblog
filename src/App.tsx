import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useLayoutEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import { PostsContext } from "./context/PostsContext";
import { db } from "./firebase/firebase";
import MainPageLayout from "./layouts/MainPageLayout";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";

function App() {
  const [posts, setPosts] = useState<any>();
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(postsCollectionRef);

      setPosts(data.docs.map((doc: any) => ({ ...doc.data() })));
    };

    getUsers();
  }, []);

  return (
    <>
      <PostsContext.Provider value={{ posts, setPosts }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPageLayout />}>
              <Route path="" element={<Home />} />
              <Route path="articles" element={<Articles />} />
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
              <Route path="article/:articleId" element={<SingleArticle />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsContext.Provider>
    </>
  );
}

export default App;
