import Map from 'react-map-gl'
import useSWR from "swr"
// import connectDB from "../../../db/connect";
import { Marker } from 'react-map-gl';

const mapboxAccessToken = process.env.MAPBOX_TOKEN


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function MonumentsMaps(){
  

  const { data, error, isLoading  } = useSWR("/api/monuments", fetcher);
  if (!data) return null;
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const initialViewState = {
    longitude: 18.293071490972955,
    latitude: 43.857516422855215,
    zoom: 6.1,
  };

  return (
    <Map
      mapboxAccessToken={mapboxAccessToken}
      initialViewState={initialViewState}
      style={{ width: 1000, height: 850 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {data.map((monument) => (
        <Marker
          key={monument.name}
          longitude={parseFloat(monument.longitude)}
          latitude={parseFloat(monument.latitude)}
        >
          
        </Marker>
      ))}
    </Map>
  );
}












{/* Render your custom marker component here */}
          {/* For example, you could use a tooltip with the monument name */}
          {/* <Tooltip>{monument.name}</Tooltip> */}