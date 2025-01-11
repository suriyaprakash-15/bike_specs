import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Signup from './components/Signup';
// import Login from './components/Login';
import Main from '../home/Main';
import Rtrr from './Rtrr';
import Hornett from '../home/Hornett';
import Clasic from './Clasic';
import Mt from './Mt';
import Gixxer from './Gixxer';

const Rotuuu = () => {
  return (
    <Router>
      <div className="Rotuuu">
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Rtrr" element={<Rtrr />} />
          <Route path="/Hornett" element={<Hornett />}/>
          <Route path="/Clasic" element={<Clasic />}/>
          <Route path='/Mt' element={<Mt />}/>
          <Route path='/Gixxer' element={<Gixxer />}/>
          

          
        </Routes>
      </div>
    </Router>
  );
};

export default Rotuuu;