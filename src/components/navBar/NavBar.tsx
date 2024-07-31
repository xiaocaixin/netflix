import React from "react";
import Logo from "../../assets/Logo.png";

import "./NavBar.css";
import { useNavigate } from "react-router-dom";

type Props = {};

const NavBar = (props: Props) => {
  const navigate = useNavigate();

  const onClickImg = () => navigate("/");
  const onClickSignIn = () => navigate("/signin");

  return (
    <div className="navBar-container">
      <img
        src={Logo}
        alt="Missing"
        className="navBar-logo"
        onClick={onClickImg}
      />
      <div className="navBar-right">
        <select className="navBar-select">
          <option className="navBar-option" value="english">
            English
          </option>
          <option className="navBar-option" value="chinese">
            Chinese
          </option>
          <option className="navBar-option" value="japanese">
            Japanese
          </option>
          <option className="navBar-option" value="korean">
            Korean
          </option>
          <option className="navBar-option" value="french">
            French
          </option>
        </select>
        <button className="navBar-btn" onClick={onClickSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default NavBar;
