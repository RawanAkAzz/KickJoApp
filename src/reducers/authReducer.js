import {
    GET_USER_TEXT,
    START_AUTH_LOADING,
    REGISTER_MSG,
    RESET_AUTH_MSG,
    SHOW_MOBILE_CODE_MODAL,
    MOBILE_AUTHENTICATION_TEXTS,
    IS_USER_LOGGEDIN

    
}from '../actions/types';
import { Platform } from 'expo-core';

const initialState ={
 
  phone_number:{
      code:1,
      number:''
      },
      user: {
          isLoggedIn: false,
          data: null
        },
  show_mobile_modal:false,
  register_msg:null,

  firstInput:'',
  secondInput:'',
  thirdInput:'',
  fourthInput:'',
  codeInput: '',
  show_resend_code:false,
  firstInputRecover:'',
  secondInputRecover:'',
  thirdInputRecover:'',
  customerInfo:[],
  fourthInputRecover:'',
  start_loading_of:{
      signup_loading:false,
  
    }  
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_MSG:
    return {...state,register_msg:action.payload}
   
    case GET_USER_TEXT:
    return {...state,[action.payload.prop]:action.payload.value};

    case START_AUTH_LOADING:
    return {...state,start_loading_of:action.payload};

    case RESET_AUTH_MSG:
        return {
          ...state,
          register_msg: ""
        };

    case SHOW_MOBILE_CODE_MODAL:
       return {...state, show_mobile_modal: action.payload};

       case MOBILE_AUTHENTICATION_TEXTS:
       return {...state, [action.payload.prop]:action.payload.value};

       case IS_USER_LOGGEDIN:
       return {...state, user: action.payload};

      default:
          return state;
  }
}
