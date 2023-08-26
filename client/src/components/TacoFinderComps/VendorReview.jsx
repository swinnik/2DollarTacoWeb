import React from "react";

export default function VendorReview({
  reviewsOpen,
  openReviews,
  closestTaco,
}) {
  console.log(reviewsOpen);
  const { name, bestFilling } = closestTaco;

  return (
    <>
      {reviewsOpen ? (
        <div id="review-backdrop" onClick={openReviews}>
          <div id="review">
            <div>
              {name} makes delicious taco's for everyone to enjoy. In
              particular, his {bestFilling} is amazing!!!
            </div>
            <div>{name} makes delicious taco's for everyone to enjoy</div>
            <div>{name} makes delicious taco's for everyone to enjoy</div>
            <div>{name} makes delicious taco's for everyone to enjoy</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
