import React from "react";
import { Link } from "react-router-dom";
import './Rtrr.css';
import Mainn from "./Mainn";
import Rtrbanner from "./Rtrbanner";
import Navbar from "../Navfoot/Navbar";
import Footer from "../Navfoot/Footer";

const Rtrr = () =>{

    return(
        <div>
        <Navbar />
<div class="rtr">
    <div className="imaa"></div>
    <h1>RTR</h1>
    <table class="algg">
        <td><h3>ENGINE</h3></td>
        <tr>
            <td>model</td>
            <td>:apache rtr 1604v</td>
        </tr>
        <tr>
            <td>cc</td>
            <td>:159cubi capacity</td>
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
            <td>:17.31 bhp @ 9250 rpm</td>
        </tr>
        <tr>
            <td>tourq</td>
            <td>:14.73 Nm @ 7250 rpm</td>
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
            <td>:4</td>
        </tr>
        <td><h3>Wheel&Suspension</h3></td>
        <tr>
            <td>suspension</td>
            <td>:telescope,monoscope</td>
        </tr>
        <tr>
            <td>wheel</td>
            <td>:front:90/90-17:rear:110/80-17</td>
        </tr>
        <tr>
            <td></td>
        </tr>
    </table>
    <div>
    <Link to="/Mainn">
  <button className="out" type="button">Spec</button>
</Link>
<Link to="/Rtrbanner">
<button className="imgbtn" type="button">Image</button>
</Link>
</div>

</div>
<Footer />
</div>
    );
};

export default Rtrr;