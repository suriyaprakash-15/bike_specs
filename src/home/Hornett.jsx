import React from "react";
import { Link } from "react-router-dom";
import './Hornett.css';
import Mainn from "./Mainn";
import Horbanner from "./Horbanner";
import Navbar from "../Navfoot/Navbar";
import Footer from "../Navfoot/Footer";

const Hornett = () =>{

    return(
        <div>
            <Navbar />
        <div class="hor" style={{ marginTop : '-2cm'}}>
    <div className="imaa"></div>
    <h1>HORNET 160R</h1>
    <table class="alig">
        <td><h3>ENGINE</h3></td>
        <tr>
            <td>model</td>
            <td>:CB Hornet 160r</td>
        </tr>
        <tr>
            <td>cc</td>
            <td>:162cubi capacity</td>
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
            <td>:15.04 bhp @ 8500 rpm</td>
        </tr>
        <tr>
            <td>tourq</td>
            <td>:14.76 Nm @ 6500 rpm</td>
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
            <td>suspension</td>
            <td>:telescope,monoscope</td>
        </tr>
        <tr>
            <td>front-tyre</td>
            <td>:100/80-17</td>
        </tr>
        <tr>
            <td>Rear-tyre</td>
            <td>:140/70-17</td>
        </tr>
        <tr>
            <td>Kerb Weight</td>
            <td>:140 kg</td>
        </tr>
        <tr>
            <td>Ground Clearance</td>
            <td>:164 mm</td>
        </tr>
    </table>
    <div>
    {/* <Link to="/Mainn">
  <button className="out" type="button">Spec</button>
</Link> */}
<Link to="/Horbanner">
<button type="button">image</button>
</Link>
</div>

</div>
<Footer />
</div>
        );
};

export default Hornett;