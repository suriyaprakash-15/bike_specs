import React from 'react'
import Navbar from './Navbar'
// import Footer from './Footer'

const About = () => {
  return (
    <div>
        <Navbar/>
    <div >
        <div style={{marginRight : '15cm'}}>
            <h1>cc</h1>
            <p >CC, or cubic capacity, is a measurement of the volume of a bike's engine chamber and the amount of air and fuel mixture it can compress to produce power. A bike's CC is a key factor in its performance, cost</p>
        </div>
        
        <div style={{marginLeft : '15cm'}}>
            <h1>BHP</h1>
            <p>BHP is an acronym for brake horsepower. In the simplest of terms, it is the power of the engine of the bike. Brake horsepower is the total power of the bike without considering any losses such as heat or noise. And it is important to know that there is some loss of power from the engine to the wheels.</p>
        </div>
        <div style={{marginRight : '15cm'}}>
            <h1>Torque</h1>
            <p>Torque is the rotational force that a bike's engine generates, which allows the bike to move forward. It's a performance metric that's determined by a bike's rotations per minute (RPM).</p>
        </div>
        <div style={{   marginLeft : '15cm'}}>
            <h1>RPM</h1>
            <p>RPM in Bike is Rotations Per Minute, which denotes the number of times the engine's crankshaft rotates in a minute. As the crankshaft revolves, it delivers power to the rear wheels through the gearbox. RPM in a bike largely affects the vehicle's fuel consumption and speed.</p>
        </div>
        <div style={{marginRight : '15cm'}}>
            <h1>valve</h1>
            <p>The valves allow the air-fuel mixture to enter the combustion chamber. Naturally, then, if the intake valves allow for better flow of air into the combustion chamber, the engine would be able to breathe better, allowing for a more efficient burning of fuel.</p>
        </div>
        <div style={{marginLeft : '15cm'}}>
            <h1>crankshaft</h1>
            <p>A crankshaft is a mechanical component used in a piston engine to convert the reciprocating motion into rotational motion. The crankshaft is a rotating shaft containing one or more crankpins, that are driven by the pistons via the connecting rods.</p>
        </div>
    </div>
    {/* <Footer/> */}
    </div>
  )
}

export default About
