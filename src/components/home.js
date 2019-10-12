import React, { Component } from "react";
import { ImageBackground, Dimensions, Text, ScrollView, View, TouchableOpacity, Image, AsyncStorage, RefreshControl, Keyboard, StatusBar, BackHandler, Alert, Platform } from "react-native";
import { CardItem, Card, Left, Right, Body, Container, Content, Drawer } from "native-base";
import { imagesStyle, imagesCradItem, categoriesText } from "../assests/styles/homeStyles";
import { centerStyle, servicesText, sevicesCardItemStyle, transparentBackGround } from "../theme";
import { signOut, isLoggIn } from "../actions/authAction";
import { Actions } from "react-native-router-flux";
import * as homeAction from "../actions/homeAction";
import { connect } from "react-redux";
// import {strings} from "../../Locales/i18n";
import Header from "./headerWithoutArrow";
import Footer from './footerPage';
import SideBar from "./sideBar";
import { Button } from "react-native-elements";

const IMAGE_BASE_URL = "https://bolisati1.qiotic.info/";
const dimensions = Dimensions.get("window");
class Home extends Component {
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
    <View style={{ width: dimensions.width, height:Dimensions.get('window').height/1  }}
      >
        <Drawer
          type="overlay"
          side="right"
          ref={ref => {
            this.drawer = ref;
          }}
          // content={
          //   <SideBar
          //     navigator={this._navigator}
          //     closeDrawer={this.closeDrawer}
          //   />
          // }
          onClose={this.closeDrawer}
          onOpen={this.openDrawer}
          tapToClose={true}
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
        >
          <Header openDrawer={this.openDrawer} closeDrawer={this.closeDrawer} />

          <StatusBar backgroundColor="#1e2131" barStyle="light-content" />

          <Container style={{ backgroundColor: "transparent" }}>
            {/* <Content style={{ backgroundColor: "transparent" }}> */}
                 {Platform.OS==='android' ?
              <View style={ { width: dimensions.width , height:Dimensions.get('window').height/1.52}}>
            
                <View
                  style={[imagesCradItem, { width: dimensions.width }]}

                >
                  <TouchableOpacity
                    onPress={() =>
                      Actions.subcategory()
                    }
                  >
                    <ImageBackground

                      source={require("../assests/images/sportType.png")}
                      style={imagesStyle}
                    >


                      <CardItem
                        style={{
                          backgroundColor: "transparent",
                          marginTop: 50,
                          justifyContent: 'center'
                        }}
                      >

                        <View style={centerStyle}>
                          <Text style={{ color: "white", marginBottom:40, fontSize: 32, fontFamily: "AnyelirScriptBoldItalic", lineHeight: 49, textAlign: 'center', alignSelf: "center", alignContent: "center", justifyContent: "center" }}>
                            SPORT TYPE
                              </Text>

                        </View>
                      </CardItem>





                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <View
                  style={[imagesCradItem, { width: dimensions.width, marginTop: 10 }]}

                >
                  <TouchableOpacity
                    onPress={() =>
                      Actions.Stadiums()
                    }
                  >
                    <ImageBackground

                      source={require("../assests/images/ACADEMIES.png")}
                      style={imagesStyle}
                    >


                      <CardItem
                        style={{
                          backgroundColor: "transparent",
                          marginTop: 50,
                          justifyContent: 'center'
                        }}
                      >

                        <View style={centerStyle}>
                        <Text style={{ color: "white", marginBottom:40, fontSize: 32, fontFamily: "AnyelirScriptBoldItalic", lineHeight: 49, textAlign: 'center', alignSelf: "center", alignContent: "center", justifyContent: "center"  , alignItems:'center' }}>
                            ACADEMIES
                              </Text>

                        </View>
                      </CardItem>
                  


                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <View
                  style={[imagesCradItem, { width: dimensions.width, marginTop: 10 }]}

                >
                  <TouchableOpacity
                    onPress={() =>
                      Actions.BookNow()
                    }
                  >
                    <ImageBackground

                      source={require("../assests/images/COACHES.png")}
                      style={imagesStyle}
                    >


                      <CardItem
                        style={{
                          backgroundColor: "transparent",
                          marginTop: 50,
                          justifyContent: 'center'
                        }}
                      >

                        <View style={centerStyle}>
                          <Text style={{ color: "white", marginBottom:40, fontSize: 32, fontFamily: "AnyelirScriptBoldItalic", lineHeight: 49, textAlign: 'center', alignSelf: "center", alignContent: "center", justifyContent: "center"  , alignItems:'center' }}>
                         COATCHES
                              </Text>

                        </View>
                      </CardItem>
                  


                    </ImageBackground>
                  </TouchableOpacity>
                </View>

              </View>
              :
              <View style={ { width: dimensions.width , height:Dimensions.get('window').height/1.44}}>
                      
                <View
                style={[imagesCradItem, { width: dimensions.width }]}

              >
                <TouchableOpacity
                  onPress={() =>
                    Actions.subcategory()
                  }
                >
                  <ImageBackground

                    source={require("../assests/images/sportType.png")}
                    style={imagesStyle}
                  >


                    <CardItem
                      style={{
                        backgroundColor: "transparent",
                        marginTop: 50,
                        justifyContent: 'center'
                      }}
                    >

                      <View style={centerStyle}>
                        <Text style={{ color: "white", marginBottom:40, fontSize: 32, fontFamily: "AnyelirScriptBoldItalic", lineHeight: 49, textAlign: 'center', alignSelf: "center", alignContent: "center", justifyContent: "center" }}>
                          SPORT TYPE
                            </Text>

                      </View>
                    </CardItem>





                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View
                style={[imagesCradItem, { width: dimensions.width, marginTop: 10 }]}

              >
                <TouchableOpacity
                  onPress={() =>
                    Actions.Stadiums()
                  }
                >
                  <ImageBackground

                    source={require("../assests/images/ACADEMIES.png")}
                    style={imagesStyle}
                  >


                    <CardItem
                      style={{
                        backgroundColor: "transparent",
                        marginTop: 50,
                        justifyContent: 'center'
                      }}
                    >

                      <View style={centerStyle}>
                      <Text style={{ color: "white", marginBottom:40, fontSize: 32, fontFamily: "AnyelirScriptBoldItalic", lineHeight: 49, textAlign: 'center', alignSelf: "center", alignContent: "center", justifyContent: "center"  , alignItems:'center' }}>
                          ACADEMIES
                            </Text>

                      </View>
                    </CardItem>
                


                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View
                style={[imagesCradItem, { width: dimensions.width, marginTop: 10 }]}

              >
                <TouchableOpacity
                  onPress={() =>
                    Actions.BookNow()
                  }
                >
                  <ImageBackground

                    source={require("../assests/images/COACHES.png")}
                    style={imagesStyle}
                  >


                    <CardItem
                      style={{
                        backgroundColor: "transparent",
                        marginTop: 50,
                        justifyContent: 'center'
                      }}
                    >

                      <View style={centerStyle}>
                        <Text style={{ color: "white", marginBottom:40, fontSize: 32, fontFamily: "AnyelirScriptBoldItalic", lineHeight: 49, textAlign: 'center', alignSelf: "center", alignContent: "center", justifyContent: "center"  , alignItems:'center' }}>
                       COATCHES
                            </Text>

                      </View>
                    </CardItem>
                


                  </ImageBackground>
                </TouchableOpacity>
              </View>         
                </View> }
              
            
  <Footer />
              {/* // </ImageBackground> */}

            {/* </Content> */}
          

          </Container>
        </Drawer>
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

export default connect(mapStateToProps, { signOut, isLoggIn, ...homeAction })(Home);