import {combineReducers} from 'redux';
import AuthReducer from './authReducer'
import SideBarReducer from './sideBarReducer';

export default combineReducers({
    authReducer : AuthReducer,
    sideBarReducer:SideBarReducer

})