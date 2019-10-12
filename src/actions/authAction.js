import {
    GET_USER_TEXT,
    START_AUTH_LOADING,
    RECOVER_PASS_MSG,
    
    IS_USER_LOGGEDIN,
    SHOW_MOBILE_CODE_MODAL,
    MOBILE_AUTHENTICATION_TEXTS,
    MOBILE_AUTHNTICATION_LOADING,
    MOBILE_AUTHNTICATION_MESSAGE,
    REGISTER_MSG,
    RESET_AUTH_MSG
    
  } from './types';
  import { Keyboard } from "react-native";
  import axios from 'axios';
  import { Actions } from 'react-native-router-flux';
  import { AsyncStorage } from 'react-native';
import client from '../constants';
// import {currentLocale } from '../../Locales/i18n'

  // const base_URL = 'https://bolisati.qiotic.info/app';
  //START GETTING INPUTS TEXT ACTION
export const getUserText = ({prop, value}) => {
    const obj = {type: GET_USER_TEXT,payload: {prop,value}};
    return obj;
  };
  //END GETTING INPUTS TEXT ACTION
//START GET MOBILE AUTH TEXT VALUE
export const getMobileAuthTextsValue = ({prop,value})=>
{
  return dispatch =>
  {
    dispatch({type:MOBILE_AUTHENTICATION_TEXTS,payload:{prop,value}})
  }
}
//END GET MOBILE AUTH TEXT VALUE


//START SIGN UP USER ACTION
export const signupUser = (phone_number,message) => {


    return (dispatch) => {
      if (phone_number.number == '') {
        dispatch({
          type: REGISTER_MSG,
          payload: {
            isError: true,
            isSuccess: false,
            msg:message
          }
        });
     
  
      } 
  
      
          else{
            Keyboard.dismiss();
            dispatch({
                type: START_AUTH_LOADING,
                payload: {
      
                  signup_loading: true
                }
              });

          client.post(`processregistration`, {

            customers_telephone:phone_number.number,
            // email:email
        
  
          }).then(function(response) {
            console.log("response",response)
            dispatch({
              type: START_AUTH_LOADING,
              payload: {
                signup_loading: false,
              }
            });
            if(response.data.status!="400")
            {
        
            dispatch({type: SHOW_MOBILE_CODE_MODAL, payload: true});

            AsyncStorage.setItem("user",JSON.stringify(response.data.data));


          }
            else{
              dispatch({
                type: REGISTER_MSG,
                payload: {
                  isError: true,
                  isSuccess: false,
                  msg: response.data.message
                }
              });
            }
  // Actions.login()
          }).catch(function(error) {
            console.log("error11111111",error)
            const res = JSON.parse(error.request._response);
            dispatch({
              type: REGISTER_MSG,
              payload: {
                isError: true,
                isSuccess: false,
                msg: res.message
              }
            });
            dispatch({
              type: START_AUTH_LOADING,
              payload: {
                signup_loading: false,
              }
            });
  
          });
        }
    
    }
  };
  //END LOGIN USER ACTION

  //START CHECK USER IF LOGGED IN
export const isLoggIn = () => {
  return dispatch => {
    AsyncStorage.getItem("user").then(
      res => {

        dispatch({
          type: IS_USER_LOGGEDIN,
          payload:
            res != null
              ? {
                  isLoggedIn: true,
                  data: JSON.parse(res)
                }
              : {
                  isLoggedIn: false,
                  data: null
                }
        });
      },
      error => {
        dispatch({
          type: IS_USER_LOGGEDIN,
          payload: {
            isLoggedIn: false,
            data: null
          }
        });
      }
    );
  };
};
//END CHECK USER IF LOGGED IN

  //START RESETTING ERROR AND SUCCESS MESSAGES ACTION
export const resetAuthMessage = () => {
    return ({type: RESET_AUTH_MSG})
  }
  //END RESETTING ERROR AND SUCCESS MESSAGES ACTION



  //START SHOW/HIDE MODAL
export const showMobileCodeModal = value => {
  return {type: SHOW_MOBILE_CODE_MODAL, payload: value};
};
//END SHOW/HIDE MODAL





//START SIGN OUT USER
export const signOut = () => {
  return dispatch => {
    AsyncStorage.removeItem("user");
    dispatch({
      type: IS_USER_LOGGEDIN,
      payload: {isLoggedIn: false, data: null}
    });

  };
};
//END SIGN OUT USER

export const mobileAuthentication= (phone_number, code) => {


  return (dispatch) => {
    // if (code.length == 4) {
    //   dispatch({
    //     type: MOBILE_AUTHNTICATION_MESSAGE,
    //     payload: {
    //       isError: true,
    //       isSuccess: false,
    //       msg: "please enter a valid code!"
    //     }
    //   });

    // } 
 
    //   else {
    //     Keyboard.dismiss();
    //     dispatch({
    //       type: MOBILE_AUTHNTICATION_LOADING,
    //       payload: {
    //         mobile_auth_loading: true
  
    //       }
    //     });
        client.post(`verify-user`, {
          contact_number	: phone_number.number,
          code: code
        }).then(function(response) {
          console.log("response12345",response)
          dispatch({
            type: MOBILE_AUTHNTICATION_LOADING,
            payload: {
              mobile_auth_loading: false
            }
          });
          if (response.data.message !="not verified")
          {
            dispatch({type: SHOW_MOBILE_CODE_MODAL, payload: false});

Actions.login()
      
          }
         if(response.data.message =="not verified"){
          console.log("here response.data.success",response.data.message)
          dispatch({type: SHOW_MOBILE_CODE_MODAL, payload: false});

                   dispatch({type: SHOW_RESEND_CODE_MODAL, payload: true});

        // dispatch({
        //   type: SIGINUP_MSG,
        //   payload: {
        //     isError: true,
        //     isSuccess: false,
        //     msg: response.data.message
        //   }
        // });
      }
        }).catch(function(error) {
          console.log("error",error)
          const res = JSON.parse(error.request._response);
          dispatch({
            type: MOBILE_AUTHNTICATION_MESSAGE,
            payload: {
              isError: true,
              isSuccess: false,
              msg: "error in something"
            }
          });
          dispatch({
            type: MOBILE_AUTHNTICATION_LOADING,
            payload: {
              mobile_auth_loading: false,

            }
          });
        
        });
      }
    // }

  // }
};

export const forgetverify= (phone_number, code) => {
  console.log("phone number",phone_number.number)
  console.log("code",code)
  
    return (dispatch) => {
      // if (code.length == 4) {
      //   dispatch({
      //     type: MOBILE_AUTHNTICATION_MESSAGE,
      //     payload: {
      //       isError: true,
      //       isSuccess: false,
      //       msg: "please enter a valid code!"
      //     }
      //   });
  
      // } 
   
      //   else {
      //     Keyboard.dismiss();
      //     dispatch({
      //       type: MOBILE_AUTHNTICATION_LOADING,
      //       payload: {
      //         mobile_auth_loading: true
    
      //       }
      //     });
          client.post(`forgetverify`, {
            customers_telephone	: phone_number.number,
            code: code
          }).then(function(response) {
            console.log("response12345",response)
            dispatch({
              type: MOBILE_AUTHNTICATION_LOADING,
              payload: {
                mobile_auth_loading: false
              }
            });
            dispatch({type: RECOVER_PASSWORD_MODAL, payload: true});

      
           console.log("here response.data.success",response.data.message)
          dispatch({
            type: MOBILE_AUTHNTICATION_MESSAGE,
            payload: {
              isError: true,
              isSuccess: false,
              msg: response.data.message
            }
          });
         
          }).catch(function(error) {
            console.log("error",error)
            const res = JSON.parse(error.request._response);
            dispatch({
              type: MOBILE_AUTHNTICATION_MESSAGE,
              payload: {
                isError: true,
                isSuccess: false,
                msg: "error in something"
              }
            });
            dispatch({
              type: MOBILE_AUTHNTICATION_LOADING,
              payload: {
                mobile_auth_loading: false,
  
              }
            });
          
          });
        }
      // }
  
    // }
  };
  


export const resendCode = (phone_number) => {
  console.log("phone_number,bumber",phone_number.number)
  return (dispatch) => {
    if (phone_number.number == '') {
      dispatch({
        type: RECOVER_PASS_MSG,
        payload: {
          isError: true,
          isSuccess: false,
          msg: "Number is required"
        }
      });

    }

    else {
      // dispatch({
      //   type: START_AUTH_LOADING,
      //   payload: {
      //     signin_loading: false,
      //     signup_loading: false,
      //     recover_loading: true
      //   }
      // });
      client.post(`sendcode`,{
        customers_telephone:phone_number.number
      }).then(function(response) {
        console.log("responsee od send code ",response)
        dispatch({
          type: START_AUTH_LOADING,
          payload: {
            signin_loading: false,
            signup_loading: false,
            recover_loading: false
          }
        });
        dispatch({type: SHOW_MOBILE_CODE_MODAL, payload: true});

        dispatch({type: SHOW_RESEND_CODE_MODAL, payload: false});

        // dispatch({type: SHOW_MOBILE_CODE_MODAL_RECOVER_PASSWORD, payload: true});

        dispatch({
          type: RECOVER_PASS_MSG,
          payload: {
            isError: false,
            isSuccess: true,
            msg: response.data.message
          }
        });
      }).catch(function(error) {
        console.log("error",error)
        const res = JSON.parse(error.request._response);
  
        dispatch({type: RECOVER_PASS_MSG, payload: response.data.message});

      });
    }
  }
};