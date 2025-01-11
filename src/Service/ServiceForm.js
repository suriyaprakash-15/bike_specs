import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Btn from './Btn';

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    bikeModel: '',
    serviceType: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/service-request', formData);
      console.log('Service request submitted:', res.data);
      alert(' submited team will be you back')
    } catch (error) {
      console.error('Error submitting service request', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="bikeModel"
        placeholder="Bike Model"
        value={formData.bikeModel}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="serviceType"
        placeholder="Service Type"
        value={formData.serviceType}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="contactNumber"
        placeholder="Contact Number"
        value={formData.contactNumber}
        onChange={handleChange}
        required
      />    


        
      <button type="submit">Submit</button>

      <div>
        <Link to="../Btn">
        <button className="Home">Home </button>
        </Link>
      </div>
    </form>

    
  );
};

export default ServiceForm;
