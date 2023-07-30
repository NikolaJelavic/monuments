import Header from "../../components/Header";
import Navbar from "../navbar/navbar";
// import MonumentsMap from "@/components/MonumentsMap";
import MonumentsMaps from "../../components/MonumentsMap/index";

export default function Monuments() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center ">
        <MonumentsMaps />
      </div>
    </>
  );
}

// Longitude and Latitude in DB
