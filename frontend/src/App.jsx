import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Header from "./partials/Header";
import MyProfile from "./pages/MyProfile";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    setUserId(localStorage.getItem("userId"));
    if (!userId && location.pathname != "/signup") {
      navigate("/signin");
    }
  }, [location.pathname]);

  return (
    <div style={{ height: "100vh", overflow: "auto" }}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/userprofile" element={<MyProfile />} />
        <Route exact path="/products/:id" element={<Product />} />
        {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
