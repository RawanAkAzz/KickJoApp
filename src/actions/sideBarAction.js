import {GET_LANGUAGE_TEXT } from './types';

import {AsyncStorage} from 'react-native';

//START FETCHING CATEGORIES
export const getLanguageText = (language) => {
return (dispatch) => {
  AsyncStorage.setItem("locale", language);

  AsyncStorage.getItem("locale").then((value) => {
    dispatch({type: GET_LANGUAGE_TEXT, payload: value})
    });
    // dispatch({type: GET_LANGUAGE_TEXT, payload: language})




}
};
//END FETCHING CATEGORIES