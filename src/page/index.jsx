import React from "react";
import Login from "./Login";
import Countries from "./Countries";
import CountryDetail from "./CountryDetails";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/details" element={<CountryDetail />} />
    </Routes>
  );
};

export default AppRouter;
