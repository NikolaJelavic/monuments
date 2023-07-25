import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import useSWR from 'swr';
import Image from 'next/image';
import Filter from '../Filter/filter';

const mapboxAccessToken = process.env.MAPBOX_TOKEN;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function MonumentsMaps() {
  const [popups, setPopups] = useState({});

  const { data, error, isLoading } = useSWR("/api/monuments", fetcher);
  if (!data) return null;
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const handleMarkerClick = (monumentName) => {
    setPopups((prevPopups) => ({
      ...prevPopups,
      [monumentName]: !prevPopups[monumentName],
    }));
  };

  const initialViewState = {
    longitude: 18.293071490972955,
    latitude: 43.857516422855215,
    zoom: 6.1,
  };

  return (
    <>
    <Map
      mapboxAccessToken={mapboxAccessToken}
      initialViewState={initialViewState}
      style={{ width: 1000, height: 850 }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      {data.map((monument) => (
        <Marker
          key={monument.name}
          longitude={monument.longitude}
          latitude={monument.latitude}
        >
          <Image src="/img/pin/redStar.png" alt="logo" width={20} height={20} />

          {popups[monument.name] && ( // Check the popup state for the current monument
            <Popup
              longitude={parseFloat(monument.longitude)}
              latitude={parseFloat(monument.latitude)}
              anchor="bottom"
              onClose={() => handleMarkerClick(monument.name)}
            >
              You are here
            </Popup>
          )}
        </Marker>
        
      ))}
    </Map>
    <Filter/>
    </>
  );
}
