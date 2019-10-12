import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Content, Textarea, Form, Icon, Button, CardItem, Input } from "native-base"
import { Actions } from "react-native-router-flux";
import { LinearGradient } from "expo-linear-gradient";

export default class Number extends Component {
  constructor(props) {
        super(props);
        this.state={
            number:'',
        }
  }
       
    render() {
        return (
            <LinearGradient
            colors={['rgb(170,76,241)', 'rgb(149,104,241)', 'rgb(112,145,228)']}
        > 
            <View  style={{ width:"100%", height:"100%" }}>
            {/* <View>
                    <Header title={'Verify your mobile number'} />
                </View> */}

                <View style={{ justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'flex-start', marginLeft: 30, marginTop: 40 }}>
                        <TouchableOpacity onPress={this.onPress}>
                            <Icon
                                name="md-arrow-back"
                                style={{
                                    color: "white",
                                    width: 30,
                                    height: 30,
                                    justifyContent: "center",
                                }}
                            // onPress={() => Actions.pop()}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: -60 }}>
                        <Text style={{
                            marginTop: 30,
                            marginLeft: 10,
                            fontSize:20,
                            textAlgin: 'center',
                            color: 'white'
                        }}>
                            Verify
           </Text>
                    </View>
                </View>
                <View >
                    <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                        <Text style={{
                            width: 330, height: 46, fontFamily: "TrebuchetMS",
                            fontSize: 20,
                            marginTop: 100,
                            marginBottom: -10,
                            textAlign: "center",
                            color: "white"
                        }}> Enter Verifaction code</Text>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
                        <Text style={{ textAlgin: 'center', fontSize: 10 , color:'white' }} > Please enter the Verifaction code
                           </Text>


                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>


                        <Text style={{
                           color: "white",
                            fontSize: 10,
                            textAlign: "center",
                            marginBottom: -10
                        }}> sent  to +019172423714</Text>
                    </View>
                </View>
                {/* <View style={{ marginTop: -30, justifyContent: "center", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <CardItem style={{ color: "black", width: 50, height: 40, justifyContent: 'center', marginLeft: 80, marginTop: 70 }}>
                        <Input keyboardType='numeric'color="black" value="v" placeholder="df" style={{  width: "60%", fontFamily: 'TajawalRegular0', borderBottomWidth: 1, marginBottom: 30, marginRight: 10, marginLeft: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 22, color: 'black' }} />
                    </CardItem>
                    <CardItem style={{ color: "black", width: 50, height: 40, justifyContent: 'center', marginTop: 70 }}>
                        <Input keyboardType='numeric' style={{ fontFamily: 'TajawalRegular0', borderBottomWidth: 1, marginBottom: 30, marginRight: 10, marginLeft: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 22, color: 'black' }} />
                    </CardItem>

                    <CardItem style={{ color: "black", width: 50, height: 40, justifyContent: 'center', marginTop: 70 }}>
                        <Input keyboardType='numeric' style={{ fontFamily: 'TajawalRegular0', borderBottomWidth: 1, marginBottom: 30, marginRight: 10, marginLeft: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 22, color: 'black' }} />
                    </CardItem>

                    <CardItem style={{ color: "black", width: 50, height: 40, justifyContent: 'center', marginRight: 30, marginTop: 70 }}>
                        <Input keyboardType='numeric' style={{ fontFamily: 'TajawalRegular0', borderBottomWidth: 1, marginBottom: 30, marginRight: 10, marginLeft: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 22, color: 'black' }} />
                    </CardItem>



                </View> */}
                <View style={{ flexDirection: "row", justifyContent: "space-between" , marginTop:30 }}>
                <View style={{ width: 50, backgroundColor:'transparent', borderWidth:1, height: 40, justifyContent: "center",marginLeft:50, alignItems: "center"}}>
                        <Input keyboardType='numeric' color="black"  onPress={()=>this.state.number} style={{maxWidth:"60%", height:"40%"}}/>
                    </View>
                    <View style={{ width: 50, backgroundColor:'transparent', borderWidth:1, height: 40, justifyContent: "center", alignItems: "center"}}>
                        <Input keyboardType='numeric' color="black"  onPress={()=>this.state.number} style={{maxWidth:"60%", height:"40%"}}/>
                    </View>
                    <View style={{ width: 50, backgroundColor:'transparent', borderWidth:1, height: 40, justifyContent: "center", alignItems: "center"}}>
                        <Input keyboardType='numeric' color="black"  onPress={()=>this.state.number} style={{maxWidth:"60%", height:"40%"}}/>
                    </View>
                    <View style={{ width: 50, backgroundColor:'transparent', borderWidth:1, height: 40,marginRight:50, justifyContent: "center", alignItems: "center"}}>
                        <Input keyboardType='numeric' color="black"  onPress={()=>this.state.number} style={{maxWidth:"60%", height:"40%"}}/>
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: 'center'  , flexDirection:'row' }}>

                    <Text style={
                        {
                            marginTop: 30,
                            height: 19,
                            fontFamily: "TrebuchetMS",
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: 'center',
                            color: "white"
                        }}> Didn't get the code? </Text>
<TouchableOpacity>
         <Text style={{color:'white', marginTop:30}}>Resend</Text>
              </TouchableOpacity> 
               </View>
            </View>
       
  </LinearGradient>


        )
    }


}

{/* <Input keyboardType='numeric' style={{ fontFamily: 'TajawalRegular0', borderBottomWidth: 1,  marginRight: 10, marginLeft: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 22 }} /> */ }
