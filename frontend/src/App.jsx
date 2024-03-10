import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Header from "./partials/Header";
import MyProfile from "./pages/MyProfile";
import Product from "./pages/Product";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <div style={{height:"100vh"}}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/userprofile" element={<MyProfile />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
