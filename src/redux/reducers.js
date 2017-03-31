import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import editor from './modules/Editor';

export default combineReducers({ editor, routing: routerReducer });
