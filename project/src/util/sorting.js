import {SortDirection} from '../const';


export const sortByProperty = (property, type = SortDirection.INCREASING) => {
  return type === SortDirection.INCREASING
    ? (offerA, offerB) => offerA[property] - offerB[property]
    : (offerA, offerB) => offerB[property] - offerA[property]
};
