import React, { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import useSWR from 'swr';
import Image from 'next/image';
import Filter from '../Filter/filter';
import PopupComponent from '../Popup';
import { useRouter } from 'next/router';

const mapboxAccessToken = process.env.MAPBOX_TOKEN;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function MonumentsMaps() {
  const [selectedMonument, setSelectedMonument] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [popup, setPopUp] = useState(false)
  const { data, error } = useSWR("/api/monuments", fetcher);

  const router = useRouter();

  if (!data) return <div>Loading...<br></br><p>Please turn of VPN if it is working</p></div>;
  if (error) return <div>Failed to load, turn off the VPN</div>;

  // const handleMarkerClick = (monumentName) => {
  //   setSelectedMonument(monumentName);
  //   console.log("monumentName",monumentName);
  // };
  const handleMarkerClick = (monument) => {
    setSelectedMonument(monument);
    setPopUp(true);
  };

  const handlePopupClose = () => {
    setSelectedMonument(null);
  };

  // Filter the monuments based on the selected state
  const filteredMonuments = selectedState
    ? data.filter((monument) => monument.state.toLowerCase() === selectedState.toLowerCase())
    : data;

  const initialViewState = {
    longitude: 18.293071490972955,
    latitude: 43.917516422855215,
    zoom: 5.86,
  };

  return (
    <div className='relative overflow-x-hidden'>
      <Map
        mapboxAccessToken={mapboxAccessToken}
        initialViewState={initialViewState}
        style={{ width: "100vw", height: "80vh" }}
        // style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
      {filteredMonuments.map((monument) => (
      <Marker
        key={monument.name}
        longitude={monument.longitude}
        latitude={monument.latitude}
        anchor="bottom"
      >
        <Image
          onClick={() => handleMarkerClick(monument)} 
          src="/img/pin/redStar.png"
          alt="logo"
          width={20}
          height={20}
        />
      </Marker>
        ))}
       {popup && selectedMonument && (
          <PopupComponent
            selectedMonument={selectedMonument}
            onClose={() => setPopUp(false)}
            router={router} 
          />
        )}
      </Map>
      <div className='absolute top-5 left-5'>
        <Filter data={data} selectedState={selectedState} setSelectedState={setSelectedState} />
      </div>
    </div>
  );
}
