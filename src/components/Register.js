import React, { Component } from "react";
import { Text, View, Button, Input } from "native-base";
import { Actions } from "react-native-router-flux";
import * as homeAction from "../actions/homeAction";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


export default class RegisterApp extends Component {

    render() {

        return (
            <LinearGradient
                colors={['rgb(55,137,48)', 'rgb(18,62,69)', 'rgb(7,37,78)']}
            >
                <View style={{ width: "100%", height: "100%" }}>
                    <View style={{ width: "100%", height: "100%", marginTop: -120 }} >
                        <View style={{ marginBottom: -120 }}>
                            <Image style={{ marginTop: 200, marginLeft: 30 }} source={require('../assests/images/left.png')} />
                        </View>
                        <View >

                            <Image source={require('../assests/images/Kickjo.png')} style={{ width: 200, height: 130, justifyContent: "center", marginTop: 180, alignSelf: 'center' }} />
                        </View>
                        <View style={{ marginTop: 40 , borderRadius:4, backgroundColor: 'transparent',  justifyContent: 'center',
                                borderColor: "white",
                                alignContent: 'center',
                                width: 350,
                                height:40,
                                borderWidth: 2,
                                alignSelf: "center",}}>

                            
                                <Input keyboardType="numeric" style={{color:'white',lineHeight:10,fontSize:9 , paddingLeft:20}} >Phone Number:
                            </Input> 


                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Button
                                block
                                style={{
                                    borderRadius: 6,
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    width: 350,
                                    alignSelf: "center",

                                }}
                                onPress={()=>[
                                    Actions.home()
                                ]}
                                // onPress={() => {console.warn('pop'),Actions.home()}}
                            >
                                <Text style={{ color: "black", fontFamily: "AnyelirScriptBoldItalic" }}>Register</Text>

                            </Button>

                        </View>
                       
                  
                            </View>

                        
                        
                  
                </View>

            </LinearGradient>





        );
    }
}