import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Rotuuu from '../home/Rotuuu';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/rotuu' element={<Rotuuu/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;