/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable quotes */
import React, { useEffect } from "react";
import TacoLogo from "./TacoLogo-removebg-preview.png";

export default function Loading({ setPageID, tacoDetails }) {
  console.log(tacoDetails);

  useEffect(() => {
    if (tacoDetails.latitude !== "") {
      setPageID("front-page");
    }
  }, [tacoDetails]);

  return (
    <div id="logo-container">
      <img
        id="taco-logo"
        src={TacoLogo}
        alt="taco logo"
        onClick={() => setPageID("front-page")}
      />
    </div>
  );
}
