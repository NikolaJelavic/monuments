import { Popup } from "react-map-gl";

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
        <p className="">Monument: {selectedMonument.name}</p>
        <p className="">Built in year: {selectedMonument.yearBuilt}.</p>

        <button onClick={handlePopupClick}>View Details</button>
      </div>
    </Popup>
  );
}
