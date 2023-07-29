import React, { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import useSWR from 'swr';
import Image from 'next/image';
import Filter from '../Filter/filter';

const mapboxAccessToken = process.env.MAPBOX_TOKEN;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function MonumentsMaps() {
  const [selectedMonument, setSelectedMonument] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [popup, setPopUp] = useState(false)
  const { data, error } = useSWR("/api/monuments", fetcher);


  if (!data) return <div><p><center>Loading...</center></p><br></br><p><center>Please turn of VPN if it is working</center></p></div>;
  if (error) return <div>Failed to load, turn off the VPN</div>;

  const handleMarkerClick = (monumentName) => {
    setSelectedMonument(monumentName);
    console.log("monumentName",monumentName);
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
            <Image  onClick={() => {setPopUp(true),handleMarkerClick(monument.name)}} src="/img/pin/redStar.png" alt="logo" width={20} height={20} />
          </Marker>
        ))}
        {/*popup starts here */}
          {/* {popup && (
          <>
            {filteredMonuments.map((item) => {
              if (item.name === selectedMonument) {
                console.log("suuposedly", item)
                return (
                  <Popup
                    key={item.name}
                    longitude={parseFloat(item.longitude)}
                    latitude={parseFloat(item.latitude)}
                    anchor="bottom"
                    onClose={() => {
                      setPopUp(false);
                      handlePopupClose();
                    }}
                    // style={{ zIndex: 1000, width }}
                    className="fixed w-100 h-100 z-10"
                  >
                    <div   >You are here</div>
                  </Popup>
                );
              } else {
                return null;
              }
            })}
          </>

        )} */}
           {popup && selectedMonument && (
            <div
              key={selectedMonument.name}
              name={selectedMonument.name}
              longitude={selectedMonument.longitude}
              latitude={selectedMonument.latitude}
              anchor="bottom"
              onClose={() => {
                setPopUp(false);
                handlePopupClose();
              }}
              // style={{ zIndex: 1000, width }}
              className="relative w-100 h-100 bg-red-200"
            >
              Monument: {selectedMonument.name}
            </div>
            )}
           

      </Map>
      <div className='absolute bottom-6 left-6 z-10'>
        <Filter data={data} selectedState={selectedState} setSelectedState={setSelectedState} />
      </div>
    </div>
  );
}
