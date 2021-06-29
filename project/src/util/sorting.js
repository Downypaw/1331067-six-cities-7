import {SortDirection} from '../const';


export const sortByProperty = (property, type = SortDirection.ASCENDING) => type === SortDirection.ASCENDING
  ? (offerA, offerB) => offerA[property] - offerB[property]
  : (offerA, offerB) => offerB[property] - offerA[property];
