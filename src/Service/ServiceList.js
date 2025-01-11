import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/service-request');
        setRequests(res.data);
      } catch (error) {
        console.error('Error fetching service requests', error);
      }
    };
    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Service Requests</h2>
      <ul>
        {requests.map((request) => (
          <li key={request._id}>
            {request.name} - {request.bikeModel} - {request.serviceType} - {request.contactNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
