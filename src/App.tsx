import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageLayout from "./layouts/MainPageLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainPageLayout>
                <Home />
              </MainPageLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
