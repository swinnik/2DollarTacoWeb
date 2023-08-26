/* eslint-disable import/extensions */
/* eslint-disable quotes */
import axios from "axios";
import React, { useState, useEffect } from "react";
import ImHungryButton from "./FrontPageComps/ImHungryButton.jsx";
import NewTacoButton from "./FrontPageComps/NewTacoButton.jsx";
import FrontPage from "./FrontPageComps/FrontPage.jsx";
import TacoFinderPage from "./TacoFinderComps/TacoFinderPage.jsx";
import NewTacoPage from "./NewTacoComps/NewTacoPage.jsx";
import DonatePage from "./DonateComps/DonatePage.jsx";
import Thanks from "./NewTacoComps/Thanks.jsx";
import Loading from "./FrontPageComps/Loading.jsx";

// note: if App parent re-renders child components will render too
export default function App() {
  const [pageID, setPageID] = useState("loading");
  const [latLong, setLatLong] = useState({ latitude: "", longitude: "" });
  const [tacoDetails, setTacoDetails] = useState({
    name: "",
    latitude: "",
    longitude: "",
    protein: "",
    price: "",
  });
  const [closestTacos, setClosestTacos] = useState([]);
  let latitude, longitude;
  const changePage = (e) => {
    setPageID(e.target.getAttribute("name"));
    console.log(e.target.getAttribute("name"));
  };
  useEffect(() => {
    axios.get("/vendors").then((response) => {
      setClosestTacos(Object.values(response.data));
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleError = (error) => {
    console.log("Geolocation error:", error);
  };

  const handleSuccess = (position) => {
    // Access position.coords.latitude and position.coords.longitude here
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log("App: success", latitude, longitude);
    setLatLong({ latitude, longitude });
    setTacoDetails((tacoDetails) => ({
      ...tacoDetails,
      latitude: latitude,
      longitude: longitude,
    }));
  };

  const commonProps = {
    latLong,
    latitude,
    longitude,
    pageID,
    setPageID,
    changePage,
    tacoDetails,
    setTacoDetails,
    closestTacos,
    setClosestTacos,
  };

  let Page = <FrontPage {...commonProps} />;

  // const pages = {
  //   "front-page": <FrontPage {...commmonProps} />,
  //   "new-spot": <NewTacoPage {...commmonProps} />,
  //   donate: <DonatePage {...commmonProps} />,
  //   "taco-finder": <TacoFinderPage {...commmonProps} />,
  // };
  switch (pageID) {
    case "front-page":
      Page = <FrontPage {...commonProps} />;
      break;
    case "new-spot":
      Page = <NewTacoPage {...commonProps} />;
      break;
    case "taco-finder":
      Page = <TacoFinderPage {...commonProps} />;
      break;
    case "donate":
      Page = <DonatePage {...commonProps} />;
      break;
    case "thanks":
      Page = <Thanks {...commonProps} />;
      break;
    case "loading":
      Page = <Loading {...commonProps} />;
      break;
    default:
      Page = <FrontPage {...commonProps} />;
  }

  // useEffect(() => {
  //   Page = pages[pageID];
  //   console.log(pageID, Page);
  // }, [pageID]);

  return (
    <>
      <div id="App">{Page}</div>
      <div className="footer">
        Built by{" "}
        <a href="https://github.com/swinnik?tab=repositories"> Swinnik</a>
      </div>
    </>
  );
}
