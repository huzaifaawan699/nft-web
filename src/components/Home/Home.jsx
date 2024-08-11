import React from "react";
import "./Home.css";
import character from '../../assets/character.png';

const Home = () => (
  <div className="nft__home" id="Home">
    <div className="nft__home-image">
      <img src={character} alt="character" />
    </div>
    <div className="nft__home-content">
    <h1>
        The <span className="nft__home-h1-word">Gaming</span>{" "}
        <span className="nft__home-h1-word nft__home-h1-pitshop">Pit-Shop</span>, Fueled By{" "}
        <span className="nft__home-h1-word">Passion</span>
    </h1>


      <p>
        GameStop is a lightweight and free streaming and game recording software to PCs that lets you capture and stream gameplay of a full-screen window desktop with one click and no lags.
        <span className="nft__home-button">
          <button>Download</button>
        </span>
        {/* <span className="nft__home-button-img">
            <img src=/>
        </span> */}
      </p>
    </div>
  </div>
);

export default Home;
