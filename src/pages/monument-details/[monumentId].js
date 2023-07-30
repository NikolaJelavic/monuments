import { useRouter } from "next/router";
import { useEffect, useState } from "react"; 
import Header from "../../components/Header"
import Navbar from "../navbar/navbar";


const fetchMonumentDetails = async (monumentId) => {
  return {
    _id: monumentId,
    name: monumentId,
    // state:state,
    
    
  };
};

export default function MonumentDetailsPage  (){
  const router = useRouter();
  const { monumentId } = router.query;
  const [monumentDetails, setMonumentDetails] = useState(null); 

  console.log("monumentId:", monumentId);

  useEffect(() => {
    
    const fetchDetails = async () => {
      const details = await fetchMonumentDetails(monumentId);
      setMonumentDetails(details);
    };
    fetchDetails();
  }, [monumentId]); 

  console.log("monumentId:", monumentId);

  if (!monumentDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header/>
    <Navbar/>
    <div>
      <h1>--Details--</h1>
      <h2>Name: {monumentDetails.name}</h2>
      
      <h3>Location: {monumentDetails.location}</h3>
      <h3>State: {monumentDetails.state}</h3>
      <h3>Coordinates: {monumentDetails.longitude}{monumentDetails.latitude}</h3>
      <h3>Year built: {monumentDetails.yearBuilt}</h3>
      <h3>Condition: {monumentDetails.condition}</h3>
      <h3>Material used: {monumentDetails.materialUsed}</h3>
    </div>
    </>
  );
};


