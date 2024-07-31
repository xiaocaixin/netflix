import React from "react";
import Hero from "../../assets/Hero.png";
import Popcorn from "../../assets/Popcorn.png";
import Content1 from "../../assets/Content1.png";
import Content2 from "../../assets/Content2.png";
import Content3 from "../../assets/Content3.png";
import Content4 from "../../assets/Content4.png";

import "./Landing.css";
import { useNavigate } from "react-router-dom";

type Props = {};

const Landing = (props: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cover", { replace: true });
  };

  const contentList = [
    {
      id: 1,
      title: "Enjoy on your TV",
      subTitle:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blue-ray players, and more.",
      image: Content1,
    },
    {
      id: 2,
      title: "Watch everywhere",
      subTitle:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      image: Content2,
    },
    {
      id: 3,
      title: "Create profiles for kids",
      subTitle:
        "Send kids on adventures with their favourite characters in a space made just for them--free with your membership.",
      image: Content3,
    },
    {
      id: 4,
      title: "Download your shows to watch offline",
      subTitle: "Watch on plane, train, or submarine...",
      image: Content4,
    },
  ];

  return (
    <div className="landing-container">
      <div className="hero-1-container">
        <img className="hero-1-img" src={Hero} alt="missing"></img>
        <div className="hero-1-info">
          <h1>Unlimited movies, TV shows, and more</h1>
          <div className="hero-1-subtitle">Watch anywhere. Cancel anytime.</div>
          <div className="hero-1-email-container">
            Ready to watch? Enter your email to create or restart your
            membership.
            <div className="email-input-container">
              <input
                type="email"
                placeholder="Email address"
                className="email-input"
              />
              <button className="hero-1-email-btn">Get Started {">"}</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-2-container">
        <img className="hero-2-img" src={Popcorn} alt="missing" />
        <div className="hero-2-info">
          <div className="hero-2-info-title">
            The Netflix you love for just $6.99.
          </div>
          <div className="hero-2-info-subtitle">
            Get the Standard with ads plan.
          </div>
          <button className="hero-2-info-link" onClick={handleClick}>
            Learn More {">"}
          </button>
        </div>
      </div>
      <div className="hero-3-containers">
        {contentList.map((c) => {
          var isEven = c.id % 2 === 0;
          return (
            <div className="hero-3-container">
              <img
                className={
                  isEven ? "hero-3-left hero-img" : "hero-3-right hero-img"
                }
                src={c.image}
                alt="missing"
              />
              <div
                className={
                  isEven
                    ? "hero-3-right hero-3-info"
                    : "hero-3-left hero-3-info"
                }
              >
                <h1 className="hero-3-title">{c.title}</h1>
                <div className="hero-3-subTitle">{c.subTitle}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Landing;
