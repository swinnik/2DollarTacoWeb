import React from "react";

export default function DonatePage({ changePage }) {
  return (
    <div className="new-taco">
      <div>Generous supporters like YOU!</div>
      <div id="donation-box">
        Donate <a href="https://www.paypal.me/SeanWinnik"> Here!</a>
      </div>
      <div>
        {" "}
        help keep{" "}
        <span name="front-page" onClick={(e) => changePage(e)}>
          2$ Taco
        </span>
        {" running!"}
      </div>
    </div>
  );
}
