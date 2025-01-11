import React from "react";
import { Link } from "react-router-dom";
import './Ns.css';
import Mainn from "./Mainn";
import Nsbanner from "./Nsbanner";
import Footer from "../Navfoot/Footer";
import Navbar from "../Navfoot/Navbar";

const Mt = () =>{

    return(
        <div>
            <Navbar />
        
        <div class="Ns">
    <div className="imaa"></div>
    <h1>BAJAJ</h1>
    <table>
        <td><h3>ENGINE</h3></td>
        <tr>
            <td>model</td>
            <td>:ns-160</td>
        </tr>
        <tr>
            <td>Cubi Capacity</td>
            <td>:164.82 cc-CC</td>
        </tr>
        <tr>
            <td>stroke</td>
            <td>:4-stroke</td>
        </tr>
        <tr>
            <td>cooling</td>
            <td>:oil-cooled</td>
        </tr>
        <tr>
            <td>Hourse power</td>
            <td>:15.68 bhp @ 8750 rpm</td>
        </tr>
        <tr>
            <td>tourq</td>
            <td>:14.65 Nm @ 6750 rpm</td>
        </tr>
        <tr>
            <td>TopSpeed</td>
            <td>:120kmph</td>
        </tr>
        <tr>
            <td>trasmition</td>
            <td>:5-speed</td>
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
            <td>:Telescopic</td>
        </tr>
        <tr>
            <td>Rear-suspension</td>
            <td>:Monoshock with Nitrox</td>
        </tr>
        <tr>
            <td>front-tyre</td>
            <td>:100/80-17</td>
        </tr>
        <tr>
            <td>Rear-tyre</td>
            <td>:130/70-R17</td>
        </tr>
        <tr>
            <td>Kerb Weight</td>
            <td>:152 kg</td>
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
<Link to="/Nsbanner">
<button className="imgbtn" type="button">IMAGE</button>
</Link>
</div>

</div>
<Footer />
</div>
        );
};

export default Mt;