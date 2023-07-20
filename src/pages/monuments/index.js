import Header from "../../../src/components/Header"
import Navbar from "../navbar/navbar"

import Map from 'react-map-gl';



export default function Monuments() {
    
    
    return (
      <>
      <Header/>
      <Navbar/>
      <p className="text-center text-xl">Monuments</p>
      <div className="flex justify-center ">
      <Map 
      mapboxAccessToken="pk.eyJ1IjoiamVsYXZpY25pa29sYSIsImEiOiJjbGs3MXVqc3cwMWtqM3Budjhqd2s2ZXByIn0.qvZtXCdqWqh2BQlt8qEgsg"
      initialViewState={{
        longitude: 18.293071490972955,  // |
        latitude: 43.857516422855215,   // -
        zoom:6.1
      }}
      style={{width: 1000, height: 850}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    /></div>
      </>
    )
};
