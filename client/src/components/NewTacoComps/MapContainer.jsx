import React, { useState } from "react";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function MapContainer({ tacoDetails }) {
  console.log(tacoDetails);
  let { latitude, longitude } = tacoDetails;
  // if (!lat || !long) {

  // }

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap center={{ lat: latitude, lng: longitude }} zoom={15}>
        {/* Add map markers, overlays, or other components */}
      </GoogleMap>
    </LoadScript>
  );
}
