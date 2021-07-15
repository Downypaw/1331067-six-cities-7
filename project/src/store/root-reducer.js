import {combineReducers} from 'redux';
import {appInteraction} from './app-interaction/app-interaction';
import {appData} from './app-data/app-data';
import {user} from './user/user';
import {NameSpace} from '../const';


export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.INTERACTION]: appInteraction,
  [NameSpace.USER]: user,
});
