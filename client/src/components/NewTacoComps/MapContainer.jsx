import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function MapContainer({ tacoDetails }) {
  console.log(tacoDetails);
  let { latitude, longitude } = tacoDetails;
  // if (!lat || !long) {

  // }

  return (
    <LoadScript googleMapsApiKey="AIzaSyB0cbZB8XGRZwBK9g2NzJPywdq4tqG-s8c">
      <GoogleMap center={{ lat: latitude, lng: longitude }} zoom={15}>
        {/* Add map markers, overlays, or other components */}
      </GoogleMap>
    </LoadScript>
  );
}
