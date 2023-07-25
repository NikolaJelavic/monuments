import Header from "../../../src/components/Header";
import Navbar from "../navbar/navbar";
import MonumentsMap from "@/components/MonumentsMap";

export default function Monuments() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center ">
        <MonumentsMap />
      </div>
    </>
  );
}

// Longitude and Latitude in DB
