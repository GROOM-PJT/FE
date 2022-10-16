import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import Auth from "../hoc/auth";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";

function App() {
  const NewLandingPage = Auth(LandingPage, null, true);
  const NewLoginPage = Auth(LoginPage, false);
  const NewRegisterPage = Auth(RegisterPage, false);
  const NewUploadProductPage = Auth(UploadProductPage, true);

  return (
    <Router>
      <div>
        <nav></nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Routes>
          <Route exact path="/" element={<NewLandingPage />} />
          <Route
            exact
            path="/product/upload"
            element={<NewUploadProductPage />}
          />
          <Route exact path="/login" element={<NewLoginPage />} />
          <Route exact path="/register" element={<NewRegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
