import React from "react";
import MainPage from "../pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cardnews/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
