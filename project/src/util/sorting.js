export const sortOffersPriceToHigh = (offerA, offerB) => {
  const valueA = offerA.price;
  const valueB = offerB.price;

  return valueA - valueB;
};

export const sortOffersPriceToLow = (offerA, offerB) => {
  const valueA = offerA.price;
  const valueB = offerB.price;

  return valueB - valueA;
};

export const sortOffersRating = (offerA, offerB) => {
  const valueA = offerA.rating;
  const valueB = offerB.rating;

  return valueB - valueA;
};
