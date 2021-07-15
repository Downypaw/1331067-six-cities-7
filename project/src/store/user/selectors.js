import {NameSpace} from '../../const';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
