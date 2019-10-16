 import React, { Component } from "react";
 import { Text, View, Button } from "native-base";
import { Actions } from "react-native-router-flux";
import { Image, Dimensions, TouchableOpacity } from "react-native";


export default class firstPage extends React.Component {

  render() {

    return (
      <View style={{ width: "100%", flexDirection: 'column' }}>
        <TouchableOpacity onPress={() =>
          Actions.home()
        } 
        style={{justifyContent:'center',alignItems:"center"}}
        >
          <Image source={require('../assests/images/Kickjo.png')} style={{ width:Dimensions.get('window').width/1.30, height: 200, justifyContent: "center", marginTop: Dimensions.get('window').height/2.80, alignSelf: 'center' }} />
        </TouchableOpacity>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 40 }} >
          <Text style={{ fontSize: 9, fontFamily: 'AnyelirScriptBoldItalic', color: "#7A7A7A",lineHeight: 12, justifyContent: "center", marginTop:Dimensions.get('window').height/2.96 }}>
            ⓒKICKJO 2019
         </Text>

        </View>
      </View>
    );
  }
}
//  import { SplashScreen } from 'expo';
//  import { Asset } from 'expo-asset';


//  export default class App extends React.Component {
//    state = {
//      isReady: false,
//    };

//    componentDidMount() {
//      SplashScreen.preventAutoHide();
//    }

//    render() {
//      if (!this.state.isReady) {
//        return (
//          <View style={{ flex: 1 }}>
//            <Image
//              source={require('../assests/images/Kickjo.png')}
//              onLoad={this._cacheResourcesAsync}
//            />
//          </View>
//        );
//      }

//    }
//  }