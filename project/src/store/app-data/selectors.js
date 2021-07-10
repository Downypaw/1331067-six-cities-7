import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getLoadedOffersStatus = (state) => state[NameSpace.DATA].isOffersLoaded;
export const getFullOfferInformation = (state) => state[NameSpace.DATA].fullOfferInformation;
export const getLoadedFullInformationStatus = (state) => state[NameSpace.DATA].isFullOfferInformationLoaded;
export const getFavoriteOffers = (state) => state[NameSpace.DATA].favoriteOffers;
export const getLoadedFavoriteOffersStatus = (state) => state[NameSpace.DATA].isFavoriteOffersLoaded;
