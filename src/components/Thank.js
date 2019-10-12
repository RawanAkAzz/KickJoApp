import React, { Component } from "react";
import { Text, View, Button, Input } from "native-base";
import { Actions } from "react-native-router-flux";
import * as homeAction from "../actions/homeAction";
import { Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


export default class RegisterApp extends Component {

    render() {

        return (
            <LinearGradient
                colors={['rgb(55,137,48)', 'rgb(18,62,69)', 'rgb(7,37,78)']}
            >
                <View style={{ width: "100%", height: "100%" }}>
                    <View style={{ width: "100%", height: "100%", marginTop: -120 }} >

                        <View style={{
                            marginTop: -70, justifyContent: 'center',

                            alignSelf: "center", borderColor: 'white', borderRadius: 60, shadowOffset: {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.2,
                            shadowRadius: 1.84,
                            elevation: 2, height: 130, justifyContent: "center", marginTop: 180, alignSelf: 'center'
                        }}>

                            <Image source={require('../assests/images/Art2.png')} style={{ width: 100, height:100, justifyContent: 'center', alignSelf: 'center' , marginBottom:-200}} />
                        </View>



                        <View style={{ marginTop: 100, justifyContent: 'center', alignSelf: 'center' }}>

                            <Text style={{ color: "white", fontSize: 30, textAlign: 'center', fontFamily: "AnyelirScriptBoldItalic" }}>Order Sent!</Text>


                        </View>

                        <View style={{ marginTop: 20, justifyContent: 'center', alignSelf: 'center' }}>

                            <Text style={{ color: "gray", fontSize: 17, textAlign: 'center', marginTop: -20 }}>Thank You</Text>


                        </View>

                    </View>

                    <View>

                        <TouchableOpacity style={{ marginLeft: 20, height: 50, paddingLeft: 2, width: 300, justifyContent: 'center', alignSelf: 'center' }}
                        >
                            {/* <Icon name='md-close' style={{color:'white' , marginTop:10}} /> */}
                            <Image source={require('../assests/images/close.png')} style={{ width: 20, color: 'white', justifyContent: 'center', alignSelf: 'center' }} />
                        </TouchableOpacity>
                    </View>



                </View>

            </LinearGradient>





        );
    }
}