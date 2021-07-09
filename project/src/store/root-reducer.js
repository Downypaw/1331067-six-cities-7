import {combineReducers} from 'redux';
import {appInteraction} from './app-interaction/app-interaction';
import {appData} from './app-data/app-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: 'DATA',
  INTERACTION: 'INTERACTION',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.INTERACTION]: appInteraction,
  [NameSpace.USER]: user,
});
