import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import useSWR from 'swr';
import Image from 'next/image';
import Filter from '../Filter/filter';

const mapboxAccessToken = process.env.MAPBOX_TOKEN;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function MonumentsMaps() {
  const [selectedMonument, setSelectedMonument] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const { data, error } = useSWR("/api/monuments", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const handleMarkerClick = (monumentName) => {
    setSelectedMonument(monumentName);
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
    <div className='relative'>
      <Map
        mapboxAccessToken={mapboxAccessToken}
        initialViewState={initialViewState}
        style={{ width: 825, height: 705 }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {filteredMonuments.map((monument) => (
          <Marker
            key={monument.name}
            longitude={parseFloat(monument.longitude)}
            latitude={parseFloat(monument.latitude)}
          >
            <Image src="/img/pin/redStar.png" alt="logo" width={20} height={20} />

            <div onClick={() => handleMarkerClick(monument.name)}></div>

            {selectedMonument === monument.name && (
              <Popup
                longitude={parseFloat(monument.longitude)}
                latitude={parseFloat(monument.latitude)}
                anchor="bottom"
                onClose={() => handlePopupClose()}
                style={{ zIndex: 1000 }}
              >
                <div>You are here</div>
              </Popup>
            )}
          </Marker>
        ))}
      </Map>
      <div className='absolute bottom-6 left-6 z-10'>
        <Filter data={data} selectedState={selectedState} setSelectedState={setSelectedState} />
      </div>
    </div>
  );
}
