import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css"; // Include this for styles if needed
// import Appp from "../Service/Appp";

const App = () => {
  const cards = [
    {
      image: "/Images/spanner.jpg",
      title: "Service",
      link: "/Appp"
  
    },
    {
      image: "/Images/spec.jpg",
      title: "Specs",
      link: "/Mainn",
    
    },
    {
      image: "/Images/about.jpg",
      title: "About us",
      link: "/About",
    },
  ];

  return (
    <div>
      <div className="grid-container">
        {cards.map((card, index) => (
          <div className="grid-item" key={index}>
            <div className="card">
              <img src={card.image} alt={card.title} style={{ width: "100%" }} />
              <p className="title">{card.title}</p>
              <p>
                <button type="button">
                  <a href={card.link}>View</a>
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
