/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import axios from "axios";
import BestFilling from "./BestFilling";
import MapContainer from "./MapContainer";

const { useState, useEffect } = React;

export default function NewTacoPage({
  changePage,
  tacoDetails,
  setTacoDetails,
  setClosestTacos,
}) {
  const { latitude, longitude, price } = tacoDetails;
  const [protein, setProtein] = useState("Best Filling");
  const [displayModal, setDisplayModal] = useState(false);
  const [tacoSubmitText, setTacoSubmitText] = useState("Add This Spot!");
  const submitTaco = (e) => {
    if (Object.values(tacoDetails).includes("")) {
      console.log("MISSING DETAILS", tacoDetails);
      setTacoSubmitText("Please add All Details");
      return;
    }
    console.log("UPDATE POSTGRES");
    console.log(tacoDetails);
    axios
      .post(
        "/vendors",
        { ...tacoDetails },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("CLIENT ATTEMPTING POST *SUCCESS*", response.data);
      })
      .catch((error) => {
        console.log("CLIENT ATTEMPTING POST *ERROR*", error.message);
      });
    axios
      .get("/vendors")
      .then((response) => {
        setClosestTacos(Object.values(response.data).reverse());
      })
      .then(() => {
        changePage(e);
      });
  };

  const clickFilling = (e) => {
    const { name, value } = e.target;
    setTacoDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const fillingProps = {
    setProtein,
    setDisplayModal,
    displayModal,
    tacoDetails,
    setTacoDetails,
  };

  return (
    <div className="new-taco">
      <div className="input-block">
        <input
          placeholder="Name of the Spot"
          name="name"
          value={tacoDetails.name}
          onChange={(e) => clickFilling(e)}
        />
        <input
          //   placeholder="latitude"
          name="latitude"
          value={latitude}
          onChange={(e) => clickFilling(e)}
        />
        <input
          //   placeholder="longitude"
          name="longitude"
          value={longitude}
          onChange={(e) => clickFilling(e)}
        />
        <input
          placeholder="Price"
          name="price"
          value={price}
          onChange={(e) => clickFilling(e)}
        />
        <input
          placeholder="Best Filling"
          name="Best Filling"
          value={protein}
          onChange={(e) => clickFilling(e)}
          onClick={() => setDisplayModal(true)}
        />
      </div>
      <BestFilling {...fillingProps} />
      <MapContainer tacoDetails={tacoDetails} />
      <div className="big-button" name="thanks" onClick={(e) => submitTaco(e)}>
        {tacoSubmitText}
      </div>
      <div
        className="big-button"
        name="front-page"
        onClick={(e) => changePage(e)}
      >
        nvm, I want a Taco!
      </div>
    </div>
  );
}
