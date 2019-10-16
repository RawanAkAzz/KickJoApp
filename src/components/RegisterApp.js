import React, { Component } from "react";
import { Text, View, Button, Input } from "native-base";
import { Actions } from "react-native-router-flux";
import * as homeAction from "../actions/homeAction";
import { connect } from "react-redux"; import { Image, Dimensions, TouchableOpacity, } from "react-native";
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
                                width: Dimensions.get('window').width/1.20,
                                height:Dimensions.get('window').height/14,
                                borderWidth: 2,
                                borderRadius:5,
                                alignSelf: "center",}}>

                            
                                <Input keyboardType='numeric' style={{color:'white',lineHeight:10,fontSize:'12px' , paddingLeft:20}} >Phone Number: 
                            </Input> 


                        </View>
                        <View style={{ marginTop: 30 }}>
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
                                onPress={() => { Actions.Register() }}
                            >
                                <Text style={{ color: "black", fontFamily: "AnyelirScriptBoldItalic" , fontSize:'19px'}}>Send</Text>

                            </Button>

                        </View>
                        <View>
                            <Text style={{ marginTop: 20, marginBottom: 20, fontSize:'11px', color: '#BCBCBC', lineHeight: 9, textAlign: 'center', alignItems: 'center' }}>
                                or
                 </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center',alignItems:'center', textAlign:'center', marginBottom: 20, marginTop: 10 }}>
                            <View style={{ width: '45%', marginLeft: -50 }}>
                                <Button block style={{ borderRadius: 4, marginLeft: 20, paddingLeft: 20, backgroundColor: "#3b5998" }}
                                >

                                    <Image source={require("../assests/images/Facebook.png")} style={{ marginRight: -10 }} />
                                    <Text style={{ color: "white", fontSize: '6px', alignSelf: 'center'}}>SIGN UP WITH FACEBOOK</Text>

                                </Button>
                            </View>
                            <View style={{ width: '45%', marginLeft: -10 }}>
                                <Button block style={{ borderRadius: 4, marginLeft: 20, paddingLeft: 20, backgroundColor: "#db4437" }}
                                >

                                    <Image source={require("../assests/images/google.png")} style={{ marginRight: -10 }} />
                                    <Text style={{ color: "white", fontSize: '6px', alignSelf: 'center' }}>SIGN UP WITH GOOGL</Text>

                                </Button>
                            </View>

                            <View>

                            </View>

                        </View>
                        <View>
                            <Text style={{ marginTop: 20, marginBottom: 20, fontSize:'11px', color: '#BCBCBC', lineHeight: 9, textAlign: 'center', alignItems: 'center' }}>
                                اللغة العربية</Text>
                        </View>
                    </View>
                </View>

            </LinearGradient>





        );
    }
}