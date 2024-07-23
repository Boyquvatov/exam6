import React from 'react';
import './App.css';
import nav from "./assets/IMAGE.png"
import main from "./assets/IMAGE (1).png"
import main1 from "./assets/IMAGE (2).png"
import main2 from "./assets/IMAGE (3).png"
import main4 from "./assets/IMAGE (4).png"
import main5 from "./assets/IMAGE (5).png"
function App() {
  return (
    <>
      <div className="wrapper-navbar">
        <div className="nav">
          <img src= {nav} alt="navbar" className="img-nav" />
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Pages</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="wrapper">
        <div className="wrapper-text">
          <h2>
            Tell your creativity to the world with <span>UIUXer</span>
          </h2>
          <div className="wrapper-texts">
            UIUXer is a creative, minimal, and cleanly designed personal and portfolio Webflow template.
          </div>
        </div>
      </div>
      <div className="wrapper-button">
        <div className="wrapper-btn">
          <button>Buy Template</button>
          <button className="btn-2">Explore Page</button>
        </div>
      </div>
      <div className="wrapper-image">
        <img src={main} alt="" />
      </div>
      <div className="wrappers">
        <h2>Professional Home Pages</h2>
        <p>Attractive and stylish home layouts bring your portfolio website to the next level.</p>
      </div>
      <div className="wrappers-img">
        <div className="wrapper-imgs">
           <img src={main1} alt="main1" />
          <h3>Home UX Designer</h3>
        </div>
        <div className="wrappers-text">
          <img src= {main2} alt="main2" />
          <h3>Home UI Designer</h3>
        </div>
      </div>
      <div className="wrappers">
        <h2>Supportive Pages</h2>
        <p>Attractive and stylish home layouts bring your portfolio website to the next level.</p>
      </div>
      <div className="wrappers-img">
        <div className="wrapper-imgs">
         <img src={main4} alt="main4" />
          <h3>About Me</h3>
        </div>
        <div className="wrappers-text">
         <img src={main5} alt="main5" />
          <h3>Blog</h3>
        </div>
      </div>
    </>
  );
}

export default App;
