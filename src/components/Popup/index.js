import { Popup } from "react-map-gl";
import Image from "next/image";

export default function PopupComponent({ selectedMonument, onClose, router }) {
  const handlePopupClick = () => {
    router.push(`/monument-details/${selectedMonument.name}`);
  };
  console.log("meow", selectedMonument);
  return (
    <Popup
      key={selectedMonument.name}
      longitude={selectedMonument.longitude}
      latitude={selectedMonument.latitude}
      anchor="bottom"
      onClose={onClose}
      closeButton={true}
      closeOnClick={false}
    >
      <div className="text-md">
        <p className=" text-center font-bold text-xl">{selectedMonument.name}</p>
        <p className="text-black">Built in {selectedMonument.yearBuilt} year.</p>
        {/* <p className="text-black">Made of {selectedMonument.materialUsed}.</p> */}
        <Image src={selectedMonument.images[0]} alt={selectedMonument.images[0]} width={100} height={100}  className="rounded-xl"/>


        <div className="flex justify-center">
          <button
            onClick={handlePopupClick}
            className="text-black mt-1 -mb-2 px-2 hover:bg-gray-200 hover:text-black rounded"
          >
            View Details
          </button>
        </div>
      </div>
    </Popup>
  );
}
