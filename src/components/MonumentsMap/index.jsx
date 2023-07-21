import Map from 'react-map-gl'



export default function MonumentsMaps(){
  const mapboxAccessToken = "pk.eyJ1IjoiamVsYXZpY25pa29sYSIsImEiOiJjbGs3MXVqc3cwMWtqM3Budjhqd2s2ZXByIn0.qvZtXCdqWqh2BQlt8qEgsg";

  const initialViewState = {
    longitude: 18.293071490972955,
    latitude: 43.857516422855215,
    zoom: 6.1,
  };

  return (
    <Map 
    mapboxAccessToken={mapboxAccessToken}
    initialViewState={initialViewState}
    style={{width: 1000, height: 850}}
    mapStyle="mapbox://styles/mapbox/streets-v9" 
  />
  );
};



