// App.js
import React from 'react';
import Card from './Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Appp from "../Service/Appp";

const App = () => {
  const cardsData = [
    {
        
      title: 'Mountain Bike',
      description: 'A bike suitable for rugged terrain and adventure.',
    //   imageUrl: 'https://via.placeholder.com/300x200?text=Mountain+Bike',
    imageUrl: '/Images/spanner.jpg',
    linkPath: '/Appp',

        
    },
    {
      title: 'Road Bike',
      description: 'Designed for speed and smooth surfaces.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Road+Bike',
    },
    {
      title: 'Hybrid Bike',
      description: 'A perfect mix for both roads and trails.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Hybrid+Bike',
    },
  ];

  return (
    <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          linkPath={card.linkPath}
        />
      ))}
    </div>
  );
};

export default App;
