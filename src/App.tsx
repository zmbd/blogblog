import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useLayoutEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import { AboutContext } from "./context/AboutContext";
import { PostsContext } from "./context/PostsContext";
import { db } from "./firebase/firebase";
import MainPageLayout from "./layouts/MainPageLayout";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Articles from "./pages/Articles";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";

function App() {
  return (
    <>
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
          <Route path="admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
