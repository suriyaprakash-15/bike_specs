import React from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../Navfoot/Navbar';
import Footer from '../Navfoot/Footer';


const Banner1 = () => { 

  // Internal styles as a JavaScript object
  const carouselStyles = {
    margin_left:'2cm',
    width: '80%',
    height:'80%',

  };

  const imageStyles = {
    objectFit: 'cover',
    height: '50%',
    width:'50%'
  };
  
  return (
    <div>
      <Navbar />
    <div style={ { marginLeft : '5cm'}}>
      
    <Carousel style={carouselStyles}>
      <Carousel.Item>
        <img 
          className="d-block w-100" 
        //   src={`${process.env.PUBLIC_URL}/image/Nature1.jpg`}
          src={`${process.env.PUBLIC_URL}/Bannerimg/hornet1.jpg`}  
          alt="First slide" 
          style={imageStyles}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100" 
        //   src={`${process.env.PUBLIC_URL}/image/Nature2.jpg`}
          src={`${process.env.PUBLIC_URL}/Bannerimg/hornet2.jpg`}  
          alt="Second slide" 
          style={imageStyles}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100" 
        //   src={`${process.env.PUBLIC_URL}/image/Nature3.jpg`} 
          src={`${process.env.PUBLIC_URL}/Bannerimg/hornet3.jpg`} 
          alt="Third slide" 
          style={imageStyles}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100" 
        //   src={`${process.env.PUBLIC_URL}/image/Nature3.jpg`} 
          src={`${process.env.PUBLIC_URL}/Bannerimg/hornet4.jpg`} 
          alt="Fourth slide" 
          style={imageStyles}
        />
      </Carousel.Item>
    </Carousel>
    

    </div>
    <Footer />
    </div>
  );
};

export default Banner1;
