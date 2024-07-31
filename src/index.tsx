import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./constants.css";
import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cover from "./components/cover/Cover";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Landing from "./pages/landing/Landing";
import SignIn from "./pages/signIn/SignIn";
import AccountHome from "./pages/accountHome/AccountHome";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="cover" element={<Cover />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="accountHome" element={<AccountHome />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
