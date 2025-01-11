import Home from './Home';
import Login from './Login';
import Register from './Register';
import Mainn from '../home/Mainn';
import Btn from '../Service/Btn';
import Rtrr from '../home/Rtrr';
import Rtrbanner from '../home/Rtrbanner';
import Hornett from '../home/Hornett';
import Horbanner from '../home/Horbanner';
import Clasic from '../home/Clasic';
import Clasbanner from '../home/Clasbanner';
import Mt from '../home/Mt';
import Mtbanner from '../home/Mtbanner';
import Gixxer from '../home/Gixxer';
import Gixbanner from '../home/Gixbanner';
import Ns from '../home/Ns';
import Nsbanner from '../home/Nsbanner';
import Appp from '../Service/Appp';
import ServiceForm from '../Service/ServiceForm';
import Cards from "../Navfoot/Cards";
import About from "../Navfoot/About";



import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from '../home/Mainn';

function App() {

  return (
    // <div style={{marginTop : '0px'}}>
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/Btn" element={<Btn/>} />
          <Route path="/Cards" element={<Cards/>} />
          <Route path="/About" element={<About/>} />

          <Route path="/mainn" element ={<Mainn/>} />
          <Route path="/Appp" element ={<Appp/>} />
          <Route path="Mainn/Appp" element ={<Appp/>} />
          <Route path="/Rtrr" element={<Rtrr />} />
          <Route path="/Rtrr/mainn" element={<Mainn />} />
          <Route path="/Rtrbanner" element={<Rtrbanner />} />
          <Route path="/Hornett" element={<Hornett />}/>
          <Route path="/Hornett/mainn" element={<Mainn />} />
          <Route path="/Horbanner" element={<Horbanner />} />

          <Route path="/Clasic" element={<Clasic />}/>
          <Route path="/Clasic/mainn" element={<Mainn />} />
          <Route path="/Clasbanner" element={<Clasbanner />} />

          <Route path='/Mt' element={<Mt />}/>
          <Route path="/Mt/mainn" element={<Mainn />} />
          <Route path='/Mtbanner' element={<Mtbanner />}/>
          <Route path='/Gixxer' element={<Gixxer />}/>
          <Route path="/Gixxer/mainn" element={<Mainn />} />
          <Route path="/Gixbanner" element={<Gixbanner />} />
          <Route path='/Ns' element={<Ns />}/>
          <Route path="/Ns/mainn" element={<Mainn />} />
          <Route path='/Nsbanner' element={<Nsbanner />}/>
          <Route path='/Appp' element={<Appp />}/>
          <Route path='/ServiceForm' element={<ServiceForm />}/>
          <Route path='/Appp/Btn' element={<Btn />}/>

                    {/* <Route path="/home" element ={<Home/>} /> */}
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App