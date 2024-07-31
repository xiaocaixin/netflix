import React from "react";
import NetflixLogoSvg from "../../assets/NetflixLogoSvg.png";
import "./Cover.css";
import { useNavigate } from "react-router-dom";

type Props = {};

const Cover = (props: Props) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/profile");
  };

  return (
    <div className="Cover-container">
      <img src={NetflixLogoSvg} className="Cover-logo" alt="logo" />
      <h1 className="Cover-title" onClick={() => onClick()}>
        Clone
      </h1>
    </div>
  );
};

export default Cover;
