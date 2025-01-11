import React from 'react';

const Cards = () => {
  const cardsData = [
    {
      title: 'Card 1',
      description: 'This is the first card.',
    //   image: 'https://via.placeholder.com/300x200',
    imagepath : '/Images/spanner.jpg'
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
      {cardsData.map((card, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            width: '300px',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src={card.image}
            alt={card.title}
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <div style={{ padding: '16px' }}>
            <h3 style={{ fontSize: '1.5em', margin: '0 0 8px' }}>{card.title}</h3>
            <p style={{ fontSize: '1em', color: '#555' }}>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
