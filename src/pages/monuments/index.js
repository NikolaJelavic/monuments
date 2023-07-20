import Header from "../../../src/components/Header"
import Navbar from "../navbar/navbar"

import Map from 'react-map-gl';



export default function Monuments() {
    
    
    return (
      <>
      <Header/>
      <Navbar/>
      <p className="text-center text-xl">Monuments</p>
      <Map className="flex justify-center m-4"
      mapboxAccessToken="pk.eyJ1IjoiamVsYXZpY25pa29sYSIsImEiOiJjbGs3MXVqc3cwMWtqM3Budjhqd2s2ZXByIn0.qvZtXCdqWqh2BQlt8qEgsg"
      initialViewState={{
        longitude: 17.953071490972955, 
        latitude: 43.667516422855215,
        zoom:5.3
      }}
      style={{width: 800, height: 500}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
      </>
    )
};
