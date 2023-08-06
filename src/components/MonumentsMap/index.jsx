import React, { useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import useSWR from "swr";
import Image from "next/image";
import Filter from "../Filter/filter";
import PopupComponent from "../Popup";
import { useRouter } from "next/router";

const mapboxAccessToken = process.env.MAPBOX_TOKEN;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function MonumentsMaps() {
  const [selectedMonument, setSelectedMonument] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [popup, setPopUp] = useState(false);
  const { data, error } = useSWR("/api/monuments", fetcher);

  const router = useRouter();

  if (!data)
    return (
      <div className="flex flex-col justify-center items-center h-96 mt-32">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-36 h-36 md:w-64 md:h-64">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-red-500 border-solid rounded animate-spin"></div>

            <div className="absolute top-0 left-0 w-full h-full border-4 border-red-500 border-solid rounded animate-ping"></div>

            <div className="absolute top-0 left-0 w-full h-full animate-star-pulse">
              <svg
                className="w-full h-full text-red-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="12 2 15.09 8.69 22 9.82 17 14 18.18 20 12 17.25 5.82 20 7 14 2 9.82 8.69 8.69 12 2 12 2"></polygon>
              </svg>
            </div>
          </div>
          <p>Loading...</p>
        </div>
        {/* <p>Please turn off VPN if it is working</p> */}
      </div>
    );
  if (error) return <div>Failed to load</div>;

  console.log(selectedState);
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

  // First solution
  // const filteredMonuments = selectedState
  //   ? data.filter((monument) => monument.state === selectedState)
  //   : data;

  // second solution
  let filteredMonuments = data;
  if (selectedState) {
    if (selectedState === "Kosovo" || selectedState === "Vojvodina") {
      filteredMonuments = data.filter(
        (monument) => monument.province === selectedState
      );
    } else {
      filteredMonuments = data.filter(
        (monument) => monument.state === selectedState
      );
    }
  }

  const initialViewState = {
    longitude: 18.293071490972955,
    latitude: 43.917516422855215,
    zoom: 5.86,
  };

  return (
    <div className="relative overflow-x-hidden">
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
      <div className="absolute top-5 left-5">
        <Filter
          data={data}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
        />
      </div>
    </div>
  );
}
