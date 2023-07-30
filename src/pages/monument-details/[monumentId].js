import { useRouter } from "next/router";
import Header from "../../components/Header";
import Navbar from "../navbar/navbar";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function MonumentDetailsPage() {
  const { data, error } = useSWR("/api/monuments", fetcher);
  const router = useRouter();
  const { monumentId } = router.query;

  if (!data)
    return (
      <div>
        Loading...<br></br>
        <p>Please turn of VPN if it is working</p>
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

  console.log("filtered data: ", monument);
  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen flex flex-col pt-20 items-center bg-gray-100 text-left">
        <h2 className="text-4xl">Name: {monument.name}</h2>
     
        <h2>Name: {monument.name}</h2>

        <h3>Location: {monument.location}</h3>
        <h3>State: {monument.state}</h3>
        <h3>
          Coordinates: Lo-{monument.longitude}|La-{monument.latitude}
        </h3>
        <h3>Year built: {monument.yearBuilt}</h3>
        <h3>Condition: {monument.condition}</h3>
        <h3>Material used: {monument.materialUsed}</h3>
      </div>
    </>
  );
}
