
import React, {Component} from 'react';
import {createStore, applyMiddleware} from "redux";
import {View,Text,StatusBar,Keyboard,Dimensions} from 'react-native';
import {Drawer, Root} from "native-base";
import {Provider} from 'react-redux';
import ReduxThunk from "redux-thunk";
import rootReducer from './reducers';
import Router from './Router';
// import I18n from 'react-native-i18n';
import {AppLoading,SplashScreen} from 'expo';
import * as Font from 'expo-font';
import { Actions } from 'react-native-router-flux';

// import store from './Store'
class App extends React.Component{
 
  constructor(props) {
    super(props);
  this.state={language:"",
loading:true,
isReady: false,
}}

  async  componentDidMount() {
    SplashScreen.preventAutoHide();

}
  async componentWillMount() {

    await Font.loadAsync({
      arial: require("../assets/fonts/arial.ttf"),
      arialbd:require("../assets/fonts/arialbd.ttf"),
      arialbi:require("../assets/fonts/arialbi.ttf"),
      ariali:require("../assets/fonts/ariali.ttf"),
      ariblk:require("../assets/fonts/ariblk.ttf"),
      TajawalBlack0:require("../assets/fonts/TajawalBlack0.ttf"),
      TajawalBold0:require("../assets/fonts/TajawalBold0.ttf"),
      TajawalExtraBold0:require("../assets/fonts/TajawalExtraBold0.ttf"),
      TajawalExtraLight0:require("../assets/fonts/TajawalExtraLight0.ttf"),
      TajawalLight0:require("../assets/fonts/TajawalLight0.ttf"),
      TajawalMedium0:require("../assets/fonts/TajawalMedium0.ttf"),
      TajawalRegular0:require("../assets/fonts/TajawalRegular0.ttf"),
      AnyelirScriptBoldItalic:require("../assets/fonts/AnyelirScriptBoldItalic.ttf"),
      arialBlack : require("../assets/fonts/arialBlack.ttf"),
      TrebuchetMS:require("../assets/fonts/TrebuchetMS.ttf"),
    });
    this.setState({ loading: false });
  }

  closeDrawer = () => {
    this.drawer._root.close();

  };

  

  openDrawer = () => {
    
    this.drawer._root.open();
    setTimeout(() => Keyboard.dismiss());
  };
  render() {
    console.log(' screeeeen height ', Dimensions.get('window').height)

    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
console.log("store",store)

    return (
      <Provider store={store}>
          <Root>
          <Router />


        </Root>
     
   
      </Provider>
    );
  }
}
const drawerStyles = {
  drawer: {shadowOpacity: 0, elevation: 0},
  main: {shadowOpacity: 0, elevation: 0}
};
export default App