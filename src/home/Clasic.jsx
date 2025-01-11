import React from "react";
import { Link } from "react-router-dom";
import './Clasic.css';
import Mainn from "./Mainn";
import Navbar from "../Navfoot/Navbar";
import Footer from "../Navfoot/Footer";
import Clasbanner from "./Clasbanner";

const Clasic = () =>{

    return(
        <div class="Cla" style={{ marginTop : '-2cm'}}>
            <Navbar />
    <div className="imaa"></div>
    <h1>ROYAL ENFIELD</h1>
    <table className="algg">
        <td><h3>ENGINE</h3></td>
        <tr>
            <td>model</td>
            <td>:Clasic-350</td>
        </tr>
        <tr>
            <td>cc</td>
            <td>:349-cubi capacity</td>
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
            <td>:20.2 bhp @ 6100 rpm</td>
        </tr>
        <tr>
            <td>tourq</td>
            <td>:27 Nm @ 4000 rpm</td>
        </tr>
        <tr>
            <td>TopSpeed</td>
            <td>:120kmph</td>
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
            <td>front-suspension</td>
            <td>:Up and down Telescopic</td>
        </tr>
        <tr>
            <td>Rear-suspension</td>
            <td>:Twin tube emulsion shock absorbers</td>
        </tr>
        <tr>
            <td>front-tyre</td>
            <td>:100/90 - 19</td>
        </tr>
        <tr>
            <td>Rear-tyre</td>
            <td>:120/80 - 18</td>
        </tr>
        <tr>
            <td>Kerb Weight</td>
            <td>:195 kg</td>
        </tr>
        <tr>
            <td>Ground Clearance</td>
            <td>:170 mm</td>
        </tr>
    </table>
    <div>
    {/* <Link to="/Mainn">
  <button className="out" type="button">Spec</button>
</Link> */}
<Link to="/Clasbanner">
<button className="imgbtn" type="button"> IMAGE</button>
</Link>
</div>
 <Footer />
</div>
        );
};

export default Clasic;