import { combineReducers } from 'redux';
import game from './game';
import layout from './layout';
import form from './form';

export default combineReducers({ game, layout, form });