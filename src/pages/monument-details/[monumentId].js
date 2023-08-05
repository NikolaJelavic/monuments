import { useRouter } from "next/router";
import Header from "../../components/Header";
import Navbar from "../navbar/navbar";
import useSWR from "swr";
import Carousel from "../../components/Carousel/index";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function MonumentDetailsPage() {
  const { data, error } = useSWR("/api/monuments", fetcher);
  const router = useRouter();
  const { monumentId } = router.query;

  if (!data)
    return (
      <div>
        Loading...<br></br>
        <p>Please turn of VPN if it is working </p>
      </div>
    );
  if (error) return <div>Failed to load, turn off the VPN</div>;

  console.log("slug: ", monumentId);

  const monument = data.find((entry) => {
    if (monumentId === entry.name) {
      return entry;
    } else {
      return;
    }
  });

  if (!monument) {
    return <div>Monument not found</div>;
  }

  const openGoogleMaps = () => {
    const latitude = monument.latitude;
    const longitude = monument.longitude;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  // console.log("filtered data: ", monument);
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <div className="min-h-screen flex flex-col pt-20 items-center bg-gray-100 text-left">
        <h2 className="text-4xl font-bold mb-4">Name: {monument.name}</h2>

        <div className="border rounded p-4 bg-white shadow-md w-96">
          <h3 className="text-lg font-bold">Location: {monument.location}</h3>
          <p className="text-gray-600">State: {monument.state}</p>
          {/* <p className="text-gray-600">
            Coordinates: Lo-{monument.longitude} | La-{monument.latitude}
          </p> */}
          <p className="text-gray-600">
            Coordinates:  
             <a href="#"  onClick={openGoogleMaps}>
              Lo-{monument.longitude} | La-{monument.latitude}
              <Image
                src="/gmaps.png" 
                alt="Google Maps"
                className="w-6 h-6 ml-2 inline-block"
                width={50} height={50}
              />
            </a>
          </p>
          <p className="text-gray-600">Year built: {monument.yearBuilt}</p>
          <p className="text-gray-600">Condition: {monument.condition}</p>
          <p className="text-gray-600">
            Material used: {monument.materialUsed}
          </p>
        </div>
      </div>
    </>
  );
}
