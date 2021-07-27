import {NameSpace} from '../../const';

export const getActiveCity = (state) => state[NameSpace.INTERACTION].activeCity;
export const getActiveSortOption = (state) => state[NameSpace.INTERACTION].activeSortOption;
