import { useState, useEffect } from "react";
import Hero from "../../assets/Hero.png";
import HeroAcc from "../../assets/HeroAccountHome.png";
import HeroTitle from "../../assets/TitleOfHighlight.png";
import PlayButton from "../../assets/PlayButton.png";
import MoreInfo from "../../assets/MoreInfo.png";
import CatAnimation from "../../assets/Cat.gif";

import "./AccountHome.css";

type Props = {};

const getImage = (name: string) => require(`../../assets/${name}.png`);

const imagesMatched = [
  getImage("SpaceForce"),
  getImage("Suits"),
  getImage("The"),
  getImage("Alien"),
  getImage("TheGlory"),
];

const imagesNew = [
  getImage("Sleep"),
  getImage("Revenger"),
  getImage("TheGlory"),
  getImage("mario"),
  getImage("dragon"),
];

const imagesTop = [
  getImage("1"),
  getImage("SpaceForce"),
  getImage("2"),
  getImage("Suits"),
  getImage("3"),
  getImage("The"),
  getImage("4"),
  getImage("Alien"),
  getImage("5"),
  getImage("TheGlory"),
];

const repeatedImagesMatched = Array(2).fill(imagesMatched).flat();
const repeatedImagesNew = Array(2).fill(imagesNew).flat();
const repeatedImagesTop = Array(2).fill(imagesTop).flat();

const AccountHome = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const containerWidth = (e.target as HTMLDivElement).offsetWidth;
    const scrollWidth = (e.target as HTMLDivElement).scrollWidth;
    const maxScrollPosition = scrollWidth - containerWidth;
    setScrollPosition(maxScrollPosition);
  };

  useEffect(() => {
    const idkAnymoreContainer = document.querySelector(
      ".idk-anymore-container"
    );
    if (idkAnymoreContainer) {
      idkAnymoreContainer.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <div className="acc-home-container">
      <img className="acc-img" src={HeroAcc} alt="missing"></img>
      <div className="acc-title-container">
        <img src={HeroTitle} alt="missing"></img>
        <div className="acc-desc">
          Years after retiring from their formidable ninja lives, a
          dysfunctional family must return to shadowy missions to counteract a
          string of looming threats.
        </div>
        <div className="buttons-container">
          <button className="acc-btn">
            <img src={PlayButton} alt="missing"></img>
          </button>
          <button className="acc-btn">
            <img src={MoreInfo} alt="missing"></img>
          </button>
        </div>
        <div
          className="other-stuff-container"
          onMouseOver={handleMouseOver}
          onMouseLeave={() => setScrollPosition(0)}
        >
          <div className="other-stuff-erm">
            <h1 className="each-container">
              Matched to Youuuuuuuu
              <img
                src={CatAnimation}
                alt="cat animation"
                className="cat-animation"
              ></img>
            </h1>
            <div className="idk-anymore-container">
              {repeatedImagesMatched.map((image, index) => (
                <img src={image} alt="missing" key={index} />
              ))}
              <img
                src={getImage("Extraordinary")}
                alt="missing"
                className="opacity-50"
              ></img>
            </div>
            <div className="each-container">
              <h1 className="title-container">New on Netflix</h1>
              <div className="idk-anymore-container">
                {repeatedImagesNew.map((image, index) => (
                  <img src={image} alt="missing" key={index} />
                ))}
              </div>
            </div>

            <div className="each-container">
              <h1 className="title-container">
                Top 10 movies in the U.S. Today
              </h1>
              <div className="top-movies-container">
                {repeatedImagesTop.map((image, index) => (
                  <img
                    src={image}
                    alt="missing"
                    className="top-movies-imgs"
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHome;
