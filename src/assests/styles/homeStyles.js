import {React} from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
module.exports  = StyleSheet.create({


  imagesStyle:{
      height:Dimensions.get('window').height/4.5,
      width:"100%",
      alignItems:"center",
      alignItems:"center",
      justifyContent:"center",
  },
  imagesCradItem:{

    backgroundColor:"transparent",
    borderColor:"transparent",
    // borderWidth:1,
    // borderRadius:5,
    // height:129
  },
  categoriesText:{
    color:"#ffffff",fontSize:14
  }
  })