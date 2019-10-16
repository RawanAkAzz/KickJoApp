import React, { Component } from "react";
import { ImageBackground, Dimensions, Text, StyleSheet, View, TouchableOpacity, Image, AsyncStorage, RefreshControl, Keyboard, StatusBar, BackHandler, Alert, Platform } from "react-native";
import { CardItem, Card, Left, Right, Body, Container, Content, Drawer, Icon } from "native-base";
import { imagesStyle, imagesCradItem, categoriesText } from "../assests/styles/homeStyles";
import { signOut, isLoggIn } from "../actions/authAction";
import { Actions } from "react-native-router-flux";
import * as homeAction from "../actions/homeAction";
import { connect } from "react-redux";
// import {strings} from "../../Locales/i18n";
import Header from "./headerWithoutArrow";
import Footer from './footerPage';
import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

const IMAGE_BASE_URL = "https://bolisati1.qiotic.info/";
const dimensions = Dimensions.get("window");
class Stadiums extends Component {
  constructor(props) {
    super(props);
    // if(this.props.lang=="ar"){
    //     I18nManager.forceRTL(true);
    // }
    // else{
    //     I18nManager.forceRTL(false);
    // }
    this.state = {
      user_id: 0,
      activePage: false
    };
  }


  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
    setTimeout(() => Keyboard.dismiss());
  };
  signOutHandler = () => {
    this.props.signOut();
    Actions.firstpage()
  };
  render() {
    const { lang } = this.props;

    return (
      // <ScrollView ref={(ref)=> {this._scrollView = ref}}>
      <View style={{ width: dimensions.width,  ...Platform.select({
        ios: {
            height:Dimensions.get('window').height/1.04,
        },
        android: {
            height:Dimensions.get('window').height/0.96
        }
    })}}
      >

        <Header openDrawer={this.openDrawer} closeDrawer={this.closeDrawer} />

        <StatusBar backgroundColor="#1e2131" barStyle="light-content" />

        <Container style={{ backgroundColor: "transparent" }}>
          <Content style={{ backgroundColor: "transparent" }}>

            <View style={[imagesCradItem, { width: dimensions.width}]}>

              <View
                style={[imagesCradItem, { width: "95%", marginRight: 10 }]}

              >
                <TouchableOpacity
                  onPress={() =>
                    Actions.CoachesDesc()
                  }
                >
                  <ImageBackground

                    source={require("../assests/images/s1.png")}
                    style={{
                      height: Dimensions.get('window').height / 3,
                      width: "100%",
                      marginBottom: 10,
                      paddingTop: 200,
                      alignItems: "center",
                      marginLeft: 10,
                      marginRight: 10,
                      justifyContent: "center",
                      flexDirection: "row",
                      resizeMode: 'contain',

                    }}
                  >


                    <CardItem
                      style={{
                        backgroundColor: "transparent",
                        marginTop: 50,
                        justifyContent: 'center'
                      }}
                    >

<Left>
                        <View
                          style={{
                            marginTop: -50
                          }}>
                          <Text style={{ color: "#ffffff", fontSize: 18, fontFamily: "AnyelirScriptBoldItalic", letterSpacing: -0.11 }}>
                            Name
                              </Text>
                        </View>
                      </Left>
                      <Right>
                        <View
                          style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            marginBottom:180
                          }}
                        >
                          <LinearGradient
                            colors={['rgb(7,37,78)', 'rgb(18,62,69)', 'rgb(55,137,48)']}
                            style={{ width: 50, justifyContent: 'center', alignItems: "center", height: 25, borderRadius: 12, marginTop: 50 }}
                          >
                            <TouchableOpacity style=
                              {{ justifyContent: "center", alignItems: "center", flexDirection: 'row' }}

                            >
                              <Text
                                style={{
                                  color: "white",
                                  textAlign: "center",
                                  fontSize: 11,

                                }}
                              >
                                5
                  </Text>
                              <Image
                                source={require("../assests/images/Artboard18.png")}
                                style={{width:10}}
                              />
                            </TouchableOpacity>
                          </LinearGradient>
                        </View>
                      </Right>

                    </CardItem>





                  </ImageBackground>
                </TouchableOpacity>
              </View>

              <View
                style={[imagesCradItem, { width: "95%", marginRight: 10 }]}

              >


                <TouchableOpacity onPress={() => Actions.subcategorychoices()
                }

                >
                  <ImageBackground

                    source={require("../assests/images/s2.png")}
                    style={{
                      height: Dimensions.get('window').height / 3,
                      width: "100%",
                      marginBottom: 10,
                      paddingTop: 200,
                      alignItems: "center",
                      marginLeft: 10,
                      marginRight: 10,
                      justifyContent: "center",
                      flexDirection: "row",
                      resizeMode: 'contain',

                    }}
                  >


                    <CardItem
                      style={{
                        backgroundColor: "transparent",
                        marginTop: 50,
                        justifyContent: 'center'
                      }}
                    >

<Left>
                        <View
                          style={{
                            marginTop: -50
                          }}>
                          <Text style={{ color: "#ffffff", fontSize: 18, fontFamily: "AnyelirScriptBoldItalic", letterSpacing: -0.11 }}>
                            Name
                              </Text>
                        </View>
                      </Left>
                      <Right>
                        <View
                          style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            marginBottom: 180
                          }}
                        >
                          <LinearGradient
                            colors={['rgb(7,37,78)', 'rgb(18,62,69)', 'rgb(55,137,48)']}
                            style={{ width: 50, justifyContent: 'center', alignItems: "center", height: 25, borderRadius: 12, marginTop: 50 }}
                          >
                            <TouchableOpacity style=
                              {{ justifyContent: "center", alignItems: "center", flexDirection: 'row' }}

                            >
                              <Text
                                style={{
                                  color: "white",
                                  textAlign: "center",
                                  fontSize: 11,

                                }}
                              >
                                5
                  </Text>
                              <Image
                                source={require("../assests/images/Artboard18.png")}
                                style={{width:10}}
                              />
                            </TouchableOpacity>
                          </LinearGradient>
                        </View>
                      </Right>
                    </CardItem>



                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View
                style={[imagesCradItem, { width: "95%", marginRight: 10 }]}

              >
                <TouchableOpacity
                  onPress={() =>
                    Actions.CoachesDesc()
                  }
                >
                  <ImageBackground

                    source={require("../assests/images/s3.png")}
                    style={{
                      height: Dimensions.get('window').height / 3,
                      width: "100%",
                      marginBottom: 10,
                      paddingTop: 200,
                      alignItems: "center",
                      marginLeft: 10,
                      marginRight: 10,
                      justifyContent: "center",
                      flexDirection: "row",
                      resizeMode: 'contain',

                    }}
                  >


                    <CardItem
                      style={{
                        backgroundColor: "transparent",
                        marginTop: 50,
                        justifyContent: 'center'
                      }}
                    >

                      <Left>
                        <View
                          style={{
                            marginTop: -50
                          }}>
                          <Text style={{ color: "#ffffff", fontSize: 18, fontFamily: "AnyelirScriptBoldItalic", letterSpacing: -0.11 }}>
                            Name
                              </Text>
                        </View>
                      </Left>
                      <Right>
                        <View
                          style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            marginBottom: 180
                          }}
                        >
                          <LinearGradient
                            colors={['rgb(7,37,78)', 'rgb(18,62,69)', 'rgb(55,137,48)']}
                            style={{ width: 50, justifyContent: 'center', alignItems: "center", height: 25, borderRadius: 12, marginTop: 50 }}
                          >
                            <TouchableOpacity style=
                              {{ justifyContent: "center", alignItems: "center", flexDirection: 'row' }}

                            >
                              <Text
                                style={{
                                  color: "white",
                                  textAlign: "center",
                                  fontSize: 11,

                                }}
                              >
                                5
                  </Text>
                              <Image
                                source={require("../assests/images/Artboard18.png")}
                                style={{width:10}}
                              />
                            </TouchableOpacity>
                          </LinearGradient>
                        </View>
                      </Right>
                    </CardItem>



                  </ImageBackground>
                </TouchableOpacity>
              </View>

            </View>



            {/* // </ImageBackground> */}

          </Content>
          <Footer />

        </Container>

      </View>
    );
  }
}
// export default Home
const drawerStyles = {
  drawer: { shadowOpacity: 0, elevation: 0 },
  main: { shadowOpacity: 0, elevation: 0 }
};
// START MAP STATE TO PROPS
const mapStateToProps = state => {
  const { lang } = state.sideBarReducer;

  return { lang };
};
// END MAP STATE TO PROPS
const style = StyleSheet.create({
  star: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRadius: 40,
    marginRight: 20,
    width: 50,
    height: 25,
    justifyContent: "center",
    marginTop: 121
  },
})
export default connect(mapStateToProps, { signOut, isLoggIn, ...homeAction })(Stadiums);