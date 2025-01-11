import React from "react";
import { Link } from "react-router-dom";
import './Mt.css';
import Mainn from "./Mainn";
import Mtbanner from "./Mtbanner";
import Navbar from "../Navfoot/Navbar";
import Footer from "../Navfoot/Footer";


const Mt = () =>{

    return(
        <div> <Navbar />
        <div class="Mmt">
    <div className="imaa"></div>
    <h1>YAMAHA</h1>
    <table>
        <td><h3>ENGINE</h3></td>
        <tr>
            <td>model</td>
            <td>:mt-15</td>
        </tr>
        <tr>
            <td>Cubi Capacity</td>
            <td>:155-CC</td>
        </tr>
        <tr>
            <td>stroke</td>
            <td>:4-stroke</td>
        </tr>
        <tr>
            <td>cooling</td>
            <td>:Liquid-cooled</td>
        </tr>
        <tr>
            <td>Hourse power</td>
            <td>:18.1 bhp @ 10000 rpm</td>
        </tr>
        <tr>
            <td>tourq</td>
            <td>:14.1 Nm @ 7500 rpm</td>
        </tr>
        <tr>
            <td>TopSpeed</td>
            <td>:130kmph</td>
        </tr>
        <tr>
            <td>trasmition</td>
            <td>:6-speed</td>
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
            <td>front-suspension</td>
            <td>:Up and down Telescopic</td>
        </tr>
        <tr>
            <td>Rear-suspension</td>
            <td>:monoscope</td>
        </tr>
        <tr>
            <td>front-tyre</td>
            <td>:100/80-17</td>
        </tr>
        <tr>
            <td>Rear-tyre</td>
            <td>:140/70-R17</td>
        </tr>
        <tr>
            <td>Kerb Weight</td>
            <td>:141 kg</td>
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
<Link to="/Mtbanner">
<button className="imgbtn" type="button">IMAGE</button>
</Link>
</div>

</div>
        <Footer />
</div>
        );
};

export default Mt;