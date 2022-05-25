import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageLayout from "./layouts/MainPageLayout";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
