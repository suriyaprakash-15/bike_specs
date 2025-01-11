import React from 'react';
import { Link } from "react-router-dom";
import './Sty.css';
import Navbar from "../Navfoot/Navbar";
import Footer from "../Navfoot/Footer";
import Rtrr from './Rtrr';
import Hornett from './Hornett';
import Clasic from './Clasic';
import Mt from './Mt';
import Gixxer from './Gixxer';
import Ns from './Ns';
import Appp from '../Service/Appp';
import Btn from '../Service/Btn';
// import { Link } from 'react-router-dom';


const Main = () => {
  
 
  return (
    <div>
      <Navbar />
    

    <div class="Main">
      
     
      <h1 class="spec">Bike Specification 
         {/* <Link to="../Appp"><button className='msb'>Service</button></Link>
        <Link to="../Btn"><button className='Homee'> Home</button>  </Link> */}
        
        </h1>
      <div class="back">
        
      

              {/* first row */}
      <div className="first">
                {/* rtr 200 */}
          <div className='1'>
            <div class='tvs'>
            </div>
            <Link to="/Rtrr">
  <button className="tvs1" type="button">Rtr</button>
</Link>
          </div>
        

          {/* hornet */}
          <div className='1'>
            <div class='hornet'>
            </div>
            <Link to="/Hornett">
  <button className="hornet1" type="button">Hornett</button>
</Link>
          </div>

          <div className='1'>
            <div class='gixxer'>
               </div>
               <Link to="/Gixxer">
              <button className="gixxer1" type="button">gixxersf</button>
              </Link>
          </div>
          

      </div>

      {/* second row */}
      <div class="second">  
          {/* RE */}
          <div class="2">
            <div class="RE"></div>
            <Link to="/Clasic">
  <button className="Cla" type="button">Clasic350</button>
</Link>          
          </div>

          {/* yamaha */}
          <div class="2">
            <div class="yamaha"></div>
            <Link to="/Mt">
            <button className='mmt' type='button'>Mt</button>
            </Link>          
          </div>

          <div class="2">
            <div class="bajaj">
            </div>
            <Link to="/Ns">
            <button class="ns160" type="button"> ns-160</button>
            </Link>
          </div>

          
        </div>


       


      </div>
      

    </div>
    <Footer/>
    </div>
  );

};

export default Main;
