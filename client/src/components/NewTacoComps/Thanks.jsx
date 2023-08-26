import React, { useEffect } from "react";

export default function Thanks({ setPageID }) {
  useEffect(() => {
    setTimeout(() => {
      setPageID("front-page");
    }, 3000);
  });

  return (
    <div id="thanks">
      <div className="glisten">Thanks for submitting a Taco!</div>
    </div>
  );
}
