import React from 'react';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';
import './App.css';
import Navbar from "../Navfoot/Navbar";
import Footer from "../Navfoot/Footer";

function Appp() {
  return (
    <div className="App">
      <h1>Bike Service Request</h1>
      <Navbar />
      <ServiceForm />
      <ServiceList />
      <Footer />
    </div>
  );
}

export default Appp;
