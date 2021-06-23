import {SortingDirection} from '../const';


export const sortByProperty = (property, type = SortingDirection.INCREASING) => {
  if (type === SortingDirection.INCREASING) {
    return (offerA, offerB) => offerA[property] - offerB[property];
  } else {
    return (offerA, offerB) => offerB[property] - offerA[property];
  }
};
