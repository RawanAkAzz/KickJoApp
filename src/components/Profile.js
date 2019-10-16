import React, { Component } from "react";
import {

    Text,
    View,
    Body,
    Left,
    Right,
    Icon,
    Button,
    Input,
    Drawer,
    Item,
    Form,
    Label
} from "native-base";
import CheckBox from 'react-native-check-box'
import {
    Image,
    Slider,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Swiper } from 'react-native-swiper'
import * as Font from "expo-font";
import Dots from "react-native-dots-pagination";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Actions } from "react-native-router-flux";
import { Images, Metrics, Colors } from "../Themes";
import Footer from './footerPage';
import Header from './headerProfile'
import { connect } from "react-redux";

export default class Profile extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <View style={{ width: "100%", ...Platform.select({
                ios: {
                    height:Dimensions.get('window').height/1.01,
                },
                android: {
                    height:Dimensions.get('window').height/0.7,
                   
                }
            })
        }}
            >
                {Platform.OS === 'ios' ?

                    <View style={{ width: "100%", height:Dimensions.get('window').height/12 }}>
                    <LinearGradient
                colors={['rgb(7,37,78)','rgb(18,62,69)','rgb(55,137,48)']}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
            >
            <Header title={'MY PROFILE'} >
            <View style={{ justifyContent:'flex-start'}}>
                   
            <Left>
              <TouchableOpacity onPress={this.onPress}>
                <Icon
                  name="md-arrow-back"
                  style={{
                    color: "white",
                    width: 20,
                    height: 30,
                    
                  }}
                />
              </TouchableOpacity>
            </Left>
                      </View>   </Header> 
                        </LinearGradient>
                    </View>
                    :
                    <View style={{ width: "100%", height:Dimensions.get('window').height/7.6}}>
                    <LinearGradient
                colors={['rgb(7,37,78)','rgb(18,62,69)','rgb(55,137,48)']}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                style={{height:150, alignItems:"center"}}
            >
            <Header title={'MY PROFILE'} style={{fontFamily:"AnyelirScriptBoldItalic"}}>
            <View style={{ justifyContent:'flex-start'}}>
                   
            <Left>
              <TouchableOpacity onPress={this.onPress}>
                <Icon
                  name="md-arrow-back"
                  style={{
                    color: "white",
                    width: 20,
                    height: 30,
                    
                  }}
                />
              </TouchableOpacity>
            </Left>
                      </View>   </Header> 
                        </LinearGradient>
                    </View>
                    
                }
                   
                    <View style={{ flexDirection: 'column', justifyContent: 'center'}}>
                      <View style={{justifyContent:'center', alignItems:'center'}}>
                          {Platform.OS==='ios'  ?
                         <Image source={require('../assests/images/Artboard33.png')} style={{justifyContent:'center',marginTop:Dimensions.get('window').height/20,}}/> 
                
                :
                <Image source={require('../assests/images/Artboard33.png')} style={{justifyContent:'center',marginTop:Dimensions.get('window').height/35,}}/> 

                        }
                         </View>

                   
                  <Text style={{ fontSize: 12, color: 'black', textAlign: 'center',}}>
                            Name
                             </Text>
                        <Text style={{ color: '#a4a4a4', fontSize: 12, textAlign: 'center',  }}>Amman,Jordan</Text>
                    </View>

                    <View >
                        <Form style={{ }}>
                            <Item inlineLabel>
                                <Label type="First Name">First Name</Label>
                                <Input />
                            </Item>
                            <Item inlineLabel>
                                <Label type="Last Name">Last Name</Label>
                                <Input />
                            </Item>
                            <Item inlineLabel>
                                <Label type="Phone Number">Phone Number</Label>
                                <Input />

                            </Item>
                            <Item inlineLabel>
                                <Label type="Email">Email</Label>
                                <Input />
                            </Item>
                            <Item inlineLabel>
                                <Label type="Gender">Gender</Label>
                                <Input />
                            </Item>
                            <Item inlineLabel>
                                <Label type="Password">Password</Label>
                                <Input secureTextEntry />
                            </Item>
                            <Item inlineLabel last>
                                <Label
                                    type="password"
                                    style={{ underlineColorAndroid: '#fff' }}>
                                    Confirm Password
              </Label>
                                <Input secureTextEntry />
                            </Item>
                         

                        </Form>
                    </View>

                    <View style={{ width: '90%', marginTop: 20, marginBottom:20 ,  alignSelf: 'center', height: 50, paddingLeft: 2, width: 360, justifyContent: 'center', alignSelf: 'center' }}>
                     {Platform.OS==='ios'   ?
                        <LinearGradient
                         colors={['rgb(7,37,78)','rgb(18,62,69)','rgb(55,137,48)']}
                         start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                         style={{borderRadius:10 , width:Dimensions.get('window').width/1.20}}
                        >
                            <TouchableOpacity style={{ height: 50, paddingLeft: 2, width: Dimensions.get('window').width/1, justifyContent: 'center', alignSelf: 'center'}}
                            >
                                <Text style={{ color: "white", textAlign: 'center', fontSize: 20, fontFamily: "AnyelirScriptBoldItalic" }}>
                                   SAVE CHANGES
                                  </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        :
                        <LinearGradient
                        colors={['rgb(7,37,78)','rgb(18,62,69)','rgb(55,137,48)']}
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                        style={{borderRadius:10 , width:Dimensions.get('window').width/1.1 , alignSelf:"center"}}
                       >
                           <TouchableOpacity style={{  height: 50, paddingLeft: 2, justifyContent: 'center', alignSelf: 'center'}}
                           >
                               <Text style={{ color: "white", textAlign: 'center', fontSize: 20, fontFamily: "AnyelirScriptBoldItalic" }}>
                                  SAVE CHANGES
                                 </Text>
                           </TouchableOpacity>
                       </LinearGradient>
                     }
                    </View>



                    <Footer />

                
            </View>
        );
    }
}
const drawerStyles = {
    drawer: { shadowOpacity: 0, elevation: 0 },
    main: { shadowOpacity: 0, elevation: 0 }
};

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: "#f05522"
    },


    tabUnderLine: {
        backgroundColor: "transparent",
        height: 0
    },

    tabText: {
        fontFamily: "TajawalBold0",
        fontSize: 18
    },

    FilterMainBg: {
        backgroundColor: "#ebebeb",
        width: Metrics.WIDTH,
        ...Platform.select({
            ios: {
                height: Metrics.HEIGHT * 0.06
            },
            android: {
                height: Metrics.HEIGHT * 0.08
            }
        }),
        flexDirection: "row",
        alignSelf: "center"
    },

    filterText: {
        fontFamily: "TajawalBold0",
        fontSize: 18,
        color: "#262628",
        alignSelf: "center",
        marginLeft: Metrics.HEIGHT * 0.01,
        width: Metrics.WIDTH * 0.7
    },

    mainListContent: {
        ...Platform.select({
            ios: {
                height: Metrics.HEIGHT * 0.75
            },
            android: {
                height: Metrics.HEIGHT * 0.7
            }
        }),
        backgroundColor: "#f5f5f5",
        marginBottom: Metrics.HEIGHT * 0.02
    },

    mainListContentGrid: {
        ...Platform.select({
            ios: {
                height: Metrics.HEIGHT * 0.75,
                marginTop: Metrics.HEIGHT * 0.01
            },
            android: {
                height: Metrics.HEIGHT * 0.68,
                marginTop: Metrics.HEIGHT * 0.02
            }
        }),
        backgroundColor: "#f5f5f5",
        marginBottom: Metrics.HEIGHT * 0.02
    },

    mainListRenderRow: {
        alignSelf: "center",
        backgroundColor: "#fff",
        width: Metrics.WIDTH * 0.93,
        borderRadius: 2,
        marginTop: Metrics.HEIGHT * 0.02,
        shadowColor: "#f9f9f9",
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 0.1
    },

    ballImg: {
        width: "100%"
    },

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    images: {
        width: 20,
        height: 20,
        marginLeft: 20,
        marginRight: 20
    },
    border: {
        backgroundColor: "white",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.84,
        elevation: 2,
        width: 50,
        height: 40,
        justifyContent: "center"
    },
    day: {
        backgroundColor: "white",
        borderRadius: 40,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.84,
        elevation: 2,
        width: 50,
        height: 40,
        justifyContent: 'space-between'
    },
    day28: {
        backgroundColor: "green",
        borderRadius: 40,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.84,
        elevation: 2,
        width: 50,
        height: 40,
        justifyContent: "center"
    },
    star: {
        flexDirection: "row",
        backgroundColor: "green",
        borderRadius: 40,
        marginRight: 20,
        width: 50,
        height: 25,
        justifyContent: "center"
    },
    number: {
        marginLeft: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    book1: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.2,
        // shadowRadius: 1.84,
        // elevation: 2,
        marginTop: 20,
        height: 50,
        justifyContent: "center"
    },
    book: {
        backgroundColor: "green",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        width: "100%",
        height: 50,
        justifyContent: "center"
    },
    hour: {
        backgroundColor: "white",
        marginTop: 20,
        alignContent: "center",
        width: "120%",
        borderRadius: 4,
        height: 40,
        marginLeft: 6,
        marginRight: 10
    },
    hour2: {
        backgroundColor: "white",
        shadowOffset: {


            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginTop: 20,
        alignContent: "center",
        width: "120%",
        borderRadius: 4,
        height: 40,
        marginLeft: 6,
        marginRight: 10
    },
    hearticon: {
        position: "absolute",
        top: 0,
        alignSelf: "flex-end"
    },

    listContentGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        alignContent: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
        ...Platform.select({
            ios: {
                paddingHorizontal: Metrics.HEIGHT * 0.013,
                paddingVertical: Metrics.HEIGHT * 0.013
            },
            android: {
                paddingHorizontal: Metrics.HEIGHT * 0.01,
                paddingVertical: Metrics.HEIGHT * 0.01
            }
        })
    },

    listMainviewBg: {
        ...Platform.select({
            ios: {
                width: Metrics.WIDTH * 0.46
            },
            android: {
                width: Metrics.WIDTH * 0.47
            }
        }),
        backgroundColor: "#fff",
        borderRadius: Metrics.HEIGHT * 0.005,
        marginBottom: Metrics.HEIGHT * 0.015,
        shadowColor: "gray",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        borderColor: "#bec1c2"
    },

    ballImgGrid: {
        ...Platform.select({
            ios: {
                height: Metrics.HEIGHT * 0.23,
                borderRadius: 1.8,
                width: Metrics.WIDTH * 0.46
            },
            android: {
                height: Metrics.HEIGHT * 0.27,
                width: Metrics.WIDTH * 0.47,
                borderTopLeftRadius: 2,
                borderTopRightRadius: 2
            }
        })
    },
    sliderStyle: {

        backgroundColor: '#d3d3d3',
        width: 300,
        height: 30,
        borderRadius: 50,
        position: 'absolute',
    },
    sliderReal: {
        backgroundColor: '#119EC2',
        // width: (this.state.slideValue/50) * 300,
        height: 30,
    }

});
