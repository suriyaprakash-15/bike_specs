import React from "react";
import { Link } from "react-router-dom";
import './Main.css';
import Appp from "../Service/Appp";
import Mainn from "../home/Mainn";
import Login from "../logg/Login";
import Navbar from "../Navfoot/Navbar";
import Footer from "../Navfoot/Footer";
// import Cards from "./Cards";
// import Cardapp from "../Navfoot/Cardapp";
import Cards from "../Navfoot/Cards";

 
function Main(){
    return(


        <div>
            <Navbar />
            {/* <img 
            src="/Images/road.jpg"
            alt=" descrition"
            style={{height : '500px', width : '1300px'}}
            /> */}
            <h6>.</h6>
            {/* <h3>.</h3> */}
             <video controls width="1270px" height= "500px">
        <source src="/Images/anivideo.mp4" 
         autoPlay
         loop
         muted
        type="video/mp4" />
        Your browser does not support the video tag.
      </video>
              <Cards/>
        <div>
        


<div className="home" style={{marginTop : '-1CM'}}>
     
{/* <h1>Bikes Specs</h1>

  <div className="btnm">      
    <div className="Service">
        <Link to='/Appp'>
        <button className="servicebtn">service</button>
        </Link>
            
    </div>

    <div className="specm">
        <Link to='/Mainn'>
        <button className="specsbtn">Specs</button>
        </Link>
    </div>
  </div>
    <div className="Lout">
        <Link to='/Login'>
        <button ClassName="Log"> Logout </button>
        </Link>
    </div> */}

</div>
 
</div>
<Footer />
</div>
    );
}


export default Main;