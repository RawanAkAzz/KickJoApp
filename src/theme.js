import { StyleSheet,Dimensions } from 'react-native';
const dimensions=Dimensions.get('window');

module.exports  = StyleSheet.create({
 centerStyle:{
    justifyContent:'center',alignItems:'center'
 },
 transparentBackGround:{
    backgroundColor:"transparent",
    borderWidth:1,
    borderRadius:5
 },
 blueBackgroundColor:{
   backgroundColor: "#003580"
 },
 
 buttonStyle:{
   backgroundColor:'#003580',justifyContent:'center',marginTop:10
},

buttonText:{
   color:"#fcfcfc",fontSize:16,fontFamily:'TajawalBold0',justifyContent:'center',alignItems:'center',marginTop:5, lineHeight: 30,
},
cardItemWithMargin:{
   backgroundColor:"transparent",marginTop:50
},
inputStyle:{
   borderRadius:5,marginBottom:5,backgroundColor:"#fff",height:45
},

transparentBackground:{
   backgroundColor:"transparent"
},
transparentBorder:{
borderColor:"transparent"
},
phoneInputStyle:{
   borderRadius:5,marginBottom:5,backgroundColor:"#fff",textAlign:"right",height:45,width:dimensions.width/1.1
},
phoneViewStyle:{
   flexDirection: "column", width: "100%"
},
renderIcon:{
   color:'#fff',fontSize:30,flex:1
},
viewRenderSuccess:{
   padding:5,paddingRight:10,paddingLeft:10,height:'auto',backgroundColor:'green',borderRadius:5,flexDirection:'row'
},
renderTextSuccess:{
   color:'#fff',fontWeight:'bold',justifyContent:'flex-start',textAlign:'left',marginLeft:0,flex:5
},
verifyCodeInputStyle:{
   fontFamily:'TajawalRegular0', borderBottomWidth:1,borderColor:'#fff',marginRight:10,marginLeft:10,color:'#fff',textAlign:'center',fontWeight:'bold',fontSize:20
},
flagStyle:{
   marginLeft:10,height:30,width:40,flex:0.2
},
verifyModalView:{
   marginTop: 22,flex: 1,padding: 10,backgroundColor: "transparent",justifyContent:'space-between',flexDirection:'column'
},
phoneVerifyCardItem:{
   backgroundColor:"transparent",alignSelf:"center",borderWidth:0.5,borderColor:"#fff",marginTop:100
},
IconModalStyle:{
   color: '#fff',fontSize:25,alignSelf:'flex-start'
},
viewIcon:{
   marginLeft:10,marginTop:20
},
borderBottomWidth0:{
   borderBottomWidth: 0
},
renderTextError:{
   color:'#fff',fontWeight:'bold',justifyContent:'flex-start',textAlign:'left',marginLeft:0,flex:5
},
viewErrorMessage:{
   padding:10,height:'auto',backgroundColor:'#FF3333',borderRadius:5,borderWidth:1,borderColor:'red',flexDirection:'row'
},
renderErrorCard:{
   alignSelf:"center",backgroundColor:"transparent"
},
sendButtonClass:{
   backgroundColor:'#fff',justifyContent:'center',marginTop:10
},
touchableOpacityText:{
   color:"#171717",fontSize:13,fontFamily:'TajawalBold0'
},
servicesText:{
   color:"#003580",
   fontSize:21,
   fontFamily:'TajawalBlack0',lineHeight:30
},
servicesText2:{
   color:"#003580",
   fontSize:18,
   fontFamily:'TajawalBlack0',lineHeight:30
},
sevicesCardItemStyle:{
   backgroundColor:"#fff",
   height:66
},
pickerStyle:{
   borderRadius:5,marginBottom:5,backgroundColor:"#fff",height:45,width:dimensions.width/1.1
},
pickerStyle2:{
   borderRadius:5,marginBottom:5,backgroundColor:"#fff",height:45,width:"50%"
},

datePickerStyle:{
   width:'100%',backgroundColor:"#fff",borderColor:"#fff"
},
headerStyle:{
   elevation: 0 ,
   borderBottomWidth: 0,
   shadowColor: 'transparent',
   shadowRadius: 0,
   shadowOffset: {
       height: 0,
   },
   backgroundColor:"transparent",height:108.3,width:dimensions.width , marginBottom:10 , marginTop:20
},
menuIcon:{
   color:'#FFF',fontSize:35,fontWeight:'bold'
},
whiteBackground:{
   backgroundColor:"#fff"
},
successBackground:{
   backgroundColor:"green"
},
labelStyle:{
   textAlign:'right',marginBottom:5,fontFamily:'TajawalRegular0',lineHeight:25
}
  })