import React from "react";
import { Link } from "react-router-dom";
import './Gixxer.css';
import Mainn from "./Mainn";
import Gixbanner from "./Gixbanner";
import Navbar from "../Navfoot/Navbar";
import Footer from "../Navfoot/Footer";

const Gixxer = () =>{

    return(
        <div>
            <Navbar />
        <div class="gix">
            
    <div className="imaa"></div>
    <h1>GIXXER</h1>
    <table class="aligg">
        <td><h3>ENGINE</h3></td>
        <tr>
            <td>model</td>
            <td>:Gixxer SF</td>
        </tr>
        <tr>
            <td>cc</td>
            <td>:155cubi capacity</td>
        </tr>
        <tr>
            <td>stroke</td>
            <td>:4-stroke</td>
        </tr>
        <tr>
            <td>cooling</td>
            <td>:Air-cooled</td>
        </tr>
        <tr>
            <td>Hourse power</td>
            <td>:13.4 bhp @ 8000 rpm</td>
        </tr>
        <tr>
            <td>tourq</td>
            <td>:13.8 Nm @ 6000 rpm</td>
        </tr>
        <tr>
            <td>TopSpeed</td>
            <td>:116kmph</td>
        </tr>
        <tr>
            <td>trasmition</td>
            <td>:5 speed</td>
        </tr>
        <tr>
            <td>cyclinder</td>
            <td>:single</td>
        </tr>
        <tr>
            <td>valve per cyclinder</td>
            <td>:2</td>
        </tr>
        <td><h3>Wheel&Suspension</h3></td>
        <tr>
            <td>Front-suspension</td>
            <td>:telescope</td>
        </tr>
        <tr>
            <td>Rear-Suspension</td>
            <td>Swing Arm</td>
        </tr>
        <tr>
            <td>front-tyre</td>
            <td>:100/80-17</td>
        </tr>
        <tr>
            <td>Rear-tyre</td>
            <td>:140/60-17</td>
        </tr>
        <tr>
            <td>Kerb Weight</td>
            <td>:148 kg</td>
        </tr>
        <tr>
            <td>Ground Clearance</td>
            <td>:165 mm</td>
        </tr>
    </table>
    <div>
    {/* <Link to="/Mainn">
  <button className="out" type="button">Spec</button>
</Link> */}
<Link to="/Gixbanner">
<button className="imgbtn" type="button">IMAGE</button>
</Link>
</div>
        
</div>
<Footer />
</div>
        );
};

export default Gixxer;