import { combineReducers } from 'redux';
import game from './game';
import layout from './layout';

export default combineReducers({ game, layout });