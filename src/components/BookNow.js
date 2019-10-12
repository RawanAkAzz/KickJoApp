import React, { Component } from "react";
import {
  
  Text,
  View,
  Body,
  Left,
  Right,
  Button,
  Input,
  Drawer,
  Item,
  StatusBar,
  Content
} from "native-base";
import {
  Image,
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
import { imagesStyle, imagesCradItem} from "../assests/styles/homeStyles";
import { Actions } from "react-native-router-flux";
// import { Images, Metrics,Colors } from "../Themes";
import Header from "./headerWithoutArrow";
import Footer from './footerPage';
import * as homeAction from "../actions/homeAction";
import { connect } from "react-redux";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        active: 0,
        images: [
          {
            img: require("../assests/images/Artboard2.png")
          },
          {
          img: require("../assests/images/Artboard1.png")
          },
          {
          img: require("../assests/images/Artboard3.png")
          }
        ],
        dateArr: ["S", "M", "T", "W", "Thu", "F", "Sa"],
        myWeek: [],
        fontLoaded: false,
        currentDay: "",
        currentDate: "",
        borderColor: "green",
        color: ['white', 'white', 'white'],
        colors:('#07254E'  ,'#123E45' ,'#378930'),
        indexColor: "",
        dateClicked: '' ,
        dot_index: 0,
        dots: [{ id: 1 }, { id: 2 }, { id: 3 }],

        data: [
            { id: 0, productImage: require("../assests/images/coa.png") },
            { id: 1, productImage: require("../assests/images/C1.png") },
            { id: 2, productImage: require("../assests/images/c3.png") },
        ],
    };
  }

  async componentDidMount() {

    let toDay = new Date();
    let toDate = toDay.getDate();


    const getMyWeek = []

    for (let i = 0; i < 7; i++) {
      const nextSevenDays = new Date(toDay.getTime())
      nextSevenDays.setDate(toDate + i)

      dayName = nextSevenDays.toString().substring(0, 3)

      getMyWeek.push(
        {
          index: i,
          dayName: dayName,
          date: nextSevenDays.getDate()
        }
      )
    }

    this.setState({
      myWeek: getMyWeek
    })


    const currentDate = new Date().getDate();
    const currentDayNumber = new Date().getDay();
    const currentDay = this.state.dateArr[currentDayNumber];
    this.setState({ currentDate, currentDay });

    // try {
    //   // await Font.loadAsync({
    //   //   TrebuchetMS: require("./fonts/TrebuchetMS.ttf")
    //   // });
    //   this.setState({ fontLoaded: true });
    // } catch (e) {
    //   console.log("Error on font load", e);
    // }
  }

  changeColor = indexColor => {
    this.setState({ indexColor });
  };

  getColor = index => {
    const { indexColor } = this.state;
    if (index === indexColor) return "green";
    return "white";
  };


  _renderItem({ item, index }) {
    return (
      <Image
        source={item.img}
        style={{ width: "100%", marginLeft: 10, height: 300, marginTop: 10 }}
      />
    );
  }
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
    setTimeout(() => Keyboard.dismiss());
  };

  render() {
    const { myWeek } = this.state
    console.log("rende my week", myWeek)
    return (
     
      <View         style={{width: Dimensions.width, height:Dimensions.get('window').height/1,backgroundColor:"white"}}
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
  
        
          <ScrollView>
            <View>
              <Carousel 
                data={this.state.images}
                sliderWidth={400}
                itemWidth={400}
                onIndexChanged={index => this.setState({ dot_index: index })}
                renderItem={this._renderItem}
                dot={<View />}
                activeDot={<View />}
                containerCustomStyle={{ marginRight: 10 }}
                onSnapToItem={index => this.setState({ activeSlide: index })}
              />  
               

            </View>
            
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between"
              }}
            >
              <View style={{ marginBottom: 40, marginLeft: 20 }}>
                <TouchableOpacity>
                  <Image
                    source={require("../assests/images/Artboard21.png")}
                    style={styles.images}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ borderColor: "red" }}>
                <TouchableOpacity>
                  <Image
                    source={require("../assests/images/Artboard22.png")}
                    style={styles.images}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ color: "red", borderColor: "red" }}>
                <TouchableOpacity>
                  <Image
                    source={require("../assests/images/Artboard23.png")}
                    style={styles.images}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ color: "red", borderColor: "red" }}>
                <TouchableOpacity>
                  <Image
                    source={require("../assests/images/Artboard24.png")}
                    style={styles.images}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ color: "red", borderColor: "red" }}>
                <TouchableOpacity>
                  <Image
                    source={require("../assests/images/Artboard25.png")}
                    style={styles.images}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ color: "red", borderColor: "red" }}>
                <TouchableOpacity>
                  <Image
                    source={require("../assests/images/Artboard26.png")}
                    style={styles.images}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                marginTop:-20,
                justifyContent: "space-between"
              }}
            >
              <View style={{ marginLeft: 20, flexDirection: "column" }}>
                <Text style={{ color: "black" , fontFamily:"AnyelirScriptBoldItalic" }}>AL FISALY CLUB STADIUM</Text>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "space-between",
                    marginBottom: 10
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around"
                    }}
                  >
                    <Text
                      style={{
                        color: "gray",
                        marginTop: 10,
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      Lorem ipsum
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  // marginTop:Dimensions.get('window').height/2.5
                }}
              >
                 <LinearGradient
                            colors={['rgb(7,37,78)', 'rgb(18,62,69)', 'rgb(55,137,48)']}
                            style={{ width:Dimensions.get('window').width/10, justifyContent: 'center', alignItems: "center", height: 25, borderRadius: 12 , marginRight:Dimensions.get('window').height/39}}
                          >
                <TouchableOpacity
                  style={[
                    styles.star,
                    { justifyContent: "center", alignItems: "center"}
                  ]}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 11
                    }}
                  >
                    5
                  </Text>
                  <Image
                    source={require("../assests/images/Artboard18.png")}
                    style={{width:10}}
                  />
                </TouchableOpacity></LinearGradient>
                <TouchableOpacity
                  style={{
                    marginBottom: 10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Image
                    source={require("../assests/images//Artboard20.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: "column", marginBottom: 10 }}>
              <Item
                regular
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  height: 50,
                  backgroundColor: "rgba(240,240,240,0.2) "
                }}
              >
                <Text style={{ fontSize: 20, color: "black", paddingLeft: 20 }}>
                  Location:
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "gray",
                    marginLeft: 10,
                    opacity: 0.3
                  }}
                >
                  Khalda
                </Text>
                <Image
                  source={require("../assests/images//Artboard19.png")}
                  style={{ marginLeft: 150 }}
                />
              </Item>
            </View>
            <View>
              <Item
                regular
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  height: 50,
                  backgroundColor: "rgba(240,240,240,0.2) "
                }}
              >
                <Text style={{ fontSize: 20, color: "black", paddingLeft: 20 }}>
                  Size:
                </Text>
                <Text style={{ fontSize: 20, color: "black", marginLeft: 240 }}>
                  8*8
                </Text>
              </Item>
            </View>
            <View>
              <Item
                regular
                style={{
                  marginTop: 10,
                  width:"100%" ,
                  flex:1,
                  height: 70,
                  // shadowOffset: {
                  //   width: 0,
                  //   height: 2
                  // },
                  // shadowOpacity: 0.2,
                  // shadowRadius: 1.84,
                  // elevation: 2,

                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 20, fontFamily:"AnyelirScriptBoldItalic",color: "black", marginLeft: 20 }}>
                  Description
                </Text>
              </Item>
            </View>

            <Text
              style={{
                fontSize: 10,
                marginLeft: 20,
                marginLeft: 10,
                marginTop: 10,
                marginBottom: 10
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
              sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec
              feugiat.
            </Text>

            <View>
              <Item
                regular
                style={{
                  marginBottom: 10,
                  marginTop: 10,
                  flexDirection: "column",
                  marginLeft: 20,
                  marginRight: 20,
                  height: 90,
                  backgroundColor: "rgba(240,240,240,0.2) "
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "black",
                    paddingLeft: 20,
                    paddingTop: 10
                  }}
                >
                  Price:
                </Text>
                <Text style={{ fontSize: 20, fontFamily:"AnyelirScriptBoldItalic", color: "black" }}>
                  30JOD / Hour{" "}
                </Text>
              </Item>
            </View>

            <View
              style={{
                backgroundColor: "rgba(240,240,240,0.2) ",
                marginTop: 10,
              }}
            >
              <View
                style={[
                  styles.book1,
                  { justifyContent: "center", alignItems: "center" }
                ]}
              >
                <Text
                  style={{
                    color: "black",
                    fontFamily:"AnyelirScriptBoldItalic",
                    width:Dimensions.get('window').width/3.50,
                    // backgroundColor:'red',      
                    fontSize: 20,
                    alignContent: "center"
                  }}
                >
                  BOOK A NOW
                </Text>
              </View>
              <View>
                <Text style={{ color: "black", marginLeft: 30, fontSize: 20 }}>
                  Select Day
                </Text>
              </View>
              <View
              style={{
                flexDirection: "column",
                // justifyContent: "space-between",
                // marginRight: 20,
                // marginLeft: 20,
                marginTop: 20
              }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginRight: 20,
                    marginLeft: 20,
                    marginBottom: 30
                  }}
                >
                  {
                    myWeek.map((list, index) => {
                      console.log('DAtesList', list.date);

                      return (
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }} style={{ flex: 3, flexDirection: 'row', alignContent: "center", alignItems: 'center' }}>

                          <View style={{ flex: 1 }} >

                            <Text style={{ flex: 2, marginBottom: 30}}>
                              {
                                list.dayName
                              }
                            </Text>
                            <View style={{ flex: 2, marginBottom: -30, justifyContent: "space-between" }}>
                              <TouchableOpacity style={styles.day} style={{
                                backgroundColor: this.state.dateClicked === index ?  this.state.colors: 'white',
                                borderRadius: 40,
                                flex: 2, marginBottom: 30, justifyContent:'center',
                                shadowOffset: {
                                  width: 0,
                                  height: 2
                                },
                                shadowOpacity: 0.2,
                                shadowRadius: 1.84,
                                elevation: 2,
                                width: Dimensions.get('window').width/8,
                                height: 40,
                              }} onPress={() => this.setState({ dateClicked: index })}>
                                <Text style={styles.number}>
                                  {
                                    list.date
                                  }
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>


                        </View>

                      )

                    })
                  }
                </View>


              </View>
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 10,
                  marginBottom: 20,
                  color: "black",
                  marginLeft: 30,
                  fontSize: 20
                }}
              >
                Select Duration
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 20,
                marginBottom: 20
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 20,
                  backgroundColor: this.getColor(7)
                }}
                onPress={() => this.changeColor(7)}

              >
                <Text
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  One Hour
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: this.getColor(8)
                }}
                onPress={() => this.changeColor(8)}
              >

                <Text style={{ color: "black", textAlign: "center" }}>
                  Two Hours
                </Text>
              </TouchableOpacity>

              <TouchableOpacity

                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: this.getColor(9)
                }}
                onPress={() => this.changeColor(9)}
              >
                <Text style={{ color: "black", textAlign: "center" }}>
                  Three Hours
                </Text>
              </TouchableOpacity>
            </View>
            {/* </View> */}

            <View
              style={{
                color: "green",
                borderColor: "green",
                marginTop: 30,
                justifyContent: "center"
              }}
            >
              <LinearGradient
                            colors={['rgb(7,37,78)', 'rgb(18,62,69)', 'rgb(55,137,48)']}
                            style={{ width:Dimensions.get('window').width/1, justifyContent: 'center', alignItems: "center",marginBottom:Dimensions.get('window').height/16, height:Dimensions.get('window').height/10, marginRight:Dimensions.get('window').height/39}}
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                          >
              <TouchableOpacity onPress={this.onPress} style={styles.book}>
                <Text style={{ color: "white", fontSize: 18 ,fontFamily:"AnyelirScriptBoldItalic", width:Dimensions.get('window').width/4 }}>BOOK NOW</Text>
                <Image source={require("../assests/images/arrow.png")} />
              </TouchableOpacity></LinearGradient>
            </View>
            {/* <View style={{ marginBottom: 10 }}>
              <Item
                regular
                style={{
                  marginTop: 30,
                  shadowOffset: {
                    width: 0,
                    height: 2
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.84,
                  elevation: 2,
                  width: "100%",
                  height: 80,
                  marginBottom: 30
                }}
              >
                <View
                  style={{
                    shadowOffset: {
                      width: 0,
                      height: 2
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.84,
                    elevation: 2,
                    flexDirection: "row",
                    flex: 1,
                    marginBottom: 30,
                    justifyContent: "space-between",
                    marginRight: 20,
                    marginLeft: 20
                  }}
                >
                  <TouchableOpacity
                    style={{ justifyContent: "center", marginTop: 30 }}
                  >
                    <Image source={require("../assests/images/1.png")} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ justifyContent: "center", marginTop: 30 }}
                  >
                    <Image source={require("../assests/images/1.png")} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ justifyContent: "center", marginTop: 30 }}
                  >
                    <Image source={require("../assests/images/1.png")} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ justifyContent: "center", marginTop: 30 }}
                  >
                    <Image
                      source={require("../assests/images/1.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ justifyContent: "center", marginTop: 30 }}
                  >
                    <Image
                      source={require("../assests/images/1.png")}
                    />
                  </TouchableOpacity>
                </View> */}
              {/* </Item> */}
            {/* </View> */} 
            </ScrollView>     
      <Footer/> 
      
       </Drawer>
        </View>
      );
  }
}
const drawerStyles = {
  drawer: {shadowOpacity: 0, elevation: 0},
  main: {shadowOpacity: 0, elevation: 0}
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

  filterText: {
    fontFamily: "TajawalBold0",
   fontSize: 18,
    color: "#262628",
    alignSelf: "center",
    // marginLeft: Metrics.HEIGHT * 0.01,
    // width: Metrics.WIDTH * 0.7
  },



  ballImg: {
    width:"100%"
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
    justifyContent: "center", alignItems: "center", flexDirection: 'row'
  },
  number: {
    // marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
    textAlign:'center'
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
    backgroundColor: "transparent",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: Dimensions.get('window').width/10,
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
  
  
});


// import React, { Component } from "react";
// import { Dimensions, Text,  View, TouchableOpacity, ListView, Image, StatusBar, Platform } from "react-native";
// import { Left, Right, Container,Button, Content, Item , Icon } from "native-base";
// import { Actions } from "react-native-router-flux";
// import * as homeAction from "../actions/homeAction";
// import { connect } from "react-redux"
// import Header from "./headerWithoutArrow";
// import Footer from './footerPage';
// import Swiper from "react-native-swiper";
// import styles from '../assests/styles/styles';
// import { LinearGradient } from "expo-linear-gradient";

// export default class StadiumDesc extends Component {
//   constructor(props) {
//     super(props);
//   this.state={
//     dateArr: ["S", "M", "T", "W", "Thu", "F", "Sa"],
//     myWeek: [],
//     fontLoaded: false,
//     currentDay: "",
//     currentDate: "",
//     borderColor: "green",
//     color: "white",
//     indexColor: "",
//     dateClicked: '',
//   }

  
//     const currentDate = new Date().getDate();
//     const currentDayNumber = new Date().getDay();
//     const currentDay = this.state.dateArr[currentDayNumber];
//     this.setState({ currentDate, currentDay });
        
//     const rowHasChanged = (r1, r2) => r1 !== r2;
//     const ds = new ListView.DataSource({ rowHasChanged });

//     const dataObjectsText = [
//         { id: 1 },
//         { id: 2 },
//         { id: 3 },

//     ];

//     const { navigation } = this.props;
//     console.log("kjdf");
//     console.log(navigation.getParam("screenName"));
//     screenName = navigation.getParam("screenName");

//     this.state = {
//         dot_index: 0,
//         selectedLots: "2",
//         modalVisible: false,
//         dots: [{ id: 1 }, { id: 2 }, { id: 3 }],

//         data: [
//             { id: 0, productImage: require("../assests/images/s1.png") },
//             { id: 1, productImage: require("../assests/images/s2.png") },
//             { id: 2, productImage: require("../assests/images/s3.png") },
//         ],

//         productColor: [
//             { id: 1, productDetailColor: "#0947ba", isSelected: false },
//             { id: 2, productDetailColor: "#c4c9d7", isSelected: false }
//         ],

//         size: [
//             { id: 1, value: "XS", isSelected: false },
//             { id: 2, value: "S", isSelected: false },
//             { id: 3, value: "M", isSelected: false },
//             { id: 4, value: "L", isSelected: false },
//             { id: 5, value: "XL", isSelected: false },
//             { id: 6, value: "XXL", isSelected: false }
//         ],

//         selectedSocialShare: "2",
//         index: 0,
//         isColorViewOpen: false,
//         isColorProductSelected: false,
//         modalsizeVisible: false,
//         selectedLots: "1",
//         selectedSize: "1",
//         isSizeViewOpen: false,
//         isLiked: false,
//         isLikeColor: "black",
//         isLoading: true,
//         dataSourceText: ds.cloneWithRows(dataObjectsText)
//     };
    
//   }
 
// toggleModals(visible) {
//     this.setState({ modalVisible: visible });
// }

// renderColorRow = () => {
//     return alert("true"), <View style={styles.rowColorView} />;
// };

// _renderDot(rowData) {
//     return (
//         <View style={styles.rowDot}>
//             <View
//                 style={
//                     rowData.id == this.state.index
//                         ? [styles.dot, { backgroundColor: "#0e1130" }]
//                         : [styles.dot, { backgroundColor: "#aeaeae" }]
//                 }
//             />
//         </View>
//     );
// }

// setModalVisible(visible) {
//     this.setState({ modalsizeVisible: visible });
// }

// onLikeClick() {
//     if (this.state.isLiked == false) {
//         this.setState({ isLiked: true, isLikeColor: "red" });
//     } else {
//         this.setState({ isLiked: false, isLikeColor: "black" });
//     }
// }

// componentWillMount() {
//   var that = this;

// }

// async componentDidMount() {

// let toDay = new Date();
// let toDate = toDay.getDate();


// const getMyWeek = []

// for (let i = 0; i < 7; i++) {
//   const nextSevenDays = new Date(toDay.getTime())
//   nextSevenDays.setDate(toDate + i)

//   dayName = nextSevenDays.toString().substring(0, 3)

//   getMyWeek.push(
//     {
//       index: i,
//       dayName: dayName,
//       date: nextSevenDays.getDate()
//     }
//   )
// }
// this.setState({
//   myWeek: getMyWeek
// })
// }




// changeColor = indexColor => {
// this.setState({ indexColor });
// };

// getColor = index => {
// const { indexColor } = this.state;
// if (index === indexColor) return "green";
// return "white";
// };

//       render(){
//         // const { myWeek } = this.state

//           return (
//               <View style={{ width: Dimensions.width, height: "100%" }}
//               >
  
//                   <Header openDrawer={this.openDrawer} closeDrawer={this.closeDrawer} />
  
//                   <StatusBar backgroundColor="#1e2131" barStyle="light-content" />
  
//                   <Container style={{ backgroundColor: "transparent" }}>
//                       <Content style={{ backgroundColor: "transparent" }}>
  
//                           <View>
  
  
//                               <View style={styles.sliderBG}>
//                                   <Swiper
//                                       showsButtons={false}
//                                       autoplay={false}
//                                       horizontal={true}
//                                       index={0}
//                                       loop={false}
//                                       onIndexChanged={index => this.setState({ dot_index: index })}
//                                       dot={<View />}
//                                       activeDot={<View />}
//                                   >
//                                       {this.state.data.map((item, key) => {
//                                           return (
//                                               <View style={styles.rowBg} key={key}>
//                                                   <Image
//                                                       style={styles.productImage}
//                                                       source={item.productImage}
//                                                   />
//                                               </View>
//                                           );
//                                       })}
//                                   </Swiper>
//                                   <View style={styles.dotListBg}>
//                                       {this.state.dots.map((item, value) => {
//                                           return (
//                                               <View style={styles.rowDot} key={value}>
//                                                   <View
//                                                       style={
//                                                           item.id - 1 == this.state.dot_index
//                                                               ? [styles.dot, { backgroundColor: "#0e1130" }]
//                                                               : [styles.dot, { backgroundColor: "#aeaeae" }]
//                                                       }
//                                                   />
//                                               </View>
//                                           );
//                                       })}
//                                   </View>
  
  
  
//                               </View>
  
  
//                           </View>
          
//                           <View
//                style={{
//                  flexDirection: "row",
//                  flex: 1,
//                  justifyContent: "space-between"
//                }}
//              >
//                <View style={{ marginBottom: 40, marginLeft: 20 }}>
//                  <TouchableOpacity style={styles.border}>
//                    <Image
//                      source={require("../assests/images/Artboard21.png")}
//                      style={styles.images}
//                    />
//                  </TouchableOpacity>
//                </View>
//                <View style={{ borderColor: "red" }}>
//                  <TouchableOpacity style={styles.border}>
//                    <Image
//                      source={require("../assests/images/Artboard22.png")}
//                      style={styles.images}
//                    />
//                  </TouchableOpacity>
//                </View>
//                <View style={{ color: "red", borderColor: "red" }}>
//                  <TouchableOpacity style={styles.border}>
//                    <Image
//                      source={require("../assests/images/Artboard23.png")}
//                      style={styles.images}
//                    />
//                  </TouchableOpacity>
//                </View>
//                <View style={{ color: "red", borderColor: "red" }}>
//                  <TouchableOpacity style={styles.border}>
//                    <Image
//                      source={require("../assests/images/Artboard24.png")}
//                      style={styles.images}
//                    />
//                  </TouchableOpacity>
//                </View>
//                <View style={{ color: "red", borderColor: "red" }}>
//                  <TouchableOpacity style={styles.border}>
//                    <Image
//                      source={require("../assests/images/Artboard25.png")}
//                      style={styles.images}
//                    />
//                  </TouchableOpacity>
//                </View>
//                <View style={{ color: "red", borderColor: "red" }}>
//                  <TouchableOpacity style={styles.border}>
//                    <Image
//                      source={require("../assests/images/Artboard26.png")}
//                      style={styles.images}
//                    />
//                  </TouchableOpacity>
//                </View>
//              </View>
//              <View
//                style={{
//                  flexDirection: "row",
//                  flex: 1,
//                  marginTop:-20,
//                  justifyContent: "space-between"
//                }}
//              >
//                <View style={{ marginLeft: 20, flexDirection: "column" }}>
//                  <Text style={{ color: "black" }}>AL FISALY CLUB STADIUM</Text>
//                  <View
//                    style={{
//                      flexDirection: "row",
//                      flex: 1,
//                      justifyContent: "space-between",
//                      marginBottom: 10
//                    }}
//                  >
//                    <View
//                      style={{
//                        flexDirection: "row",
//                        justifyContent: "space-around"
//                      }}
//                    >
//                      <Text
//                        style={{
//                          color: "gray",
//                          marginTop: 10,
//                          flexDirection: "row",
//                          justifyContent: "space-between"
//                        }}
//                      >
//                        Lorem ipsum
//                      </Text>
//                    </View>
//                  </View>
//                </View>
//                <View
//                  style={{
//                    flexDirection: "column",
//                    justifyContent: "space-between"
//                  }}
//                >
//                  <TouchableOpacity
//                    style={[
//                      styles.star,
//                      { justifyContent: "center", alignItems: "center" }
//                    ]}
//                  >
//                    <Text
//                      style={{
//                        color: "white",
//                        textAlign: "center",
//                        fontSize: 20
//                      }}
//                    >
//                      5
//                    </Text>
//                    <Image
//                      source={require("../assests/images/Artboard18.png")}
//                    />
//                  </TouchableOpacity>
//                  <TouchableOpacity
//                    style={{
//                      marginBottom: 10,
//                      justifyContent: "center",
//                      alignItems: "center"
//                    }}
//                  >
//                    <Image
//                      source={require("../assests/images/Artboard19.png")}
//                    />
//                  </TouchableOpacity>
//                </View>
//              </View>
//              <View style={{ flexDirection: "column", marginBottom: 10 }}>
//                <Item
//                  regular
//                  style={{
//                    marginLeft: 20,
//                    marginRight: 20,
//                    height: 50,
//                    backgroundColor: "rgba(240,240,240,0.2) "
//                  }}
//                >
//                  <Text style={{ fontSize: 20, color: "black", paddingLeft: 20 }}>
//                    Location:
//                  </Text>
//                  <Text
//                    style={{
//                      fontSize: 20,
//                      color: "gray",
//                      marginLeft: 10,
//                      opacity: 0.3
//                    }}
//                  >
//                    Khalda
//                  </Text>
//                  <Image
//                    source={require("../assests/images/Artboard20.png")}
//                    style={{ marginLeft: 150 }}
//                  />
//                </Item>
//              </View>
//              <View>
//                <Item
//                  regular
//                  style={{
//                    marginLeft: 20,
//                    marginRight: 20,
//                    height: 50,
//                    backgroundColor: "rgba(240,240,240,0.2) "
//                  }}
//                >
//                  <Text style={{ fontSize: 20, color: "black", paddingLeft: 20 }}>
//                    Size:
//                  </Text>
//                  <Text style={{ fontSize: 20, color: "black", marginLeft: 240 }}>
//                    8*8
//                  </Text>
//                </Item>
//              </View>
//              <View>
//                <Item
//                  regular
//                  style={{
//                    marginTop: 10,
//                    width:"100%" ,
//                    flex:1,
//                    height: 70,
//                    shadowOffset: {
//                      width: 0,
//                      height: 2
//                    },
//                    shadowOpacity: 0.2,
//                    shadowRadius: 1.84,
//                    elevation: 2,

//                    marginBottom: 10,
//                  }}
//                >
//                  <Text style={{ fontSize: 20, color: "black", marginLeft: 20 }}>
//                    Description
//                  </Text>
//                </Item>
//              </View>

//              <Text
//                style={{
//                  fontSize: 10,
//                  marginLeft: 20,
//                  marginLeft: 10,
//                  marginTop: 10,
//                  marginBottom: 10
//                }}
//              >
//                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
//                sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec
//                feugiat.
//              </Text>

//              <View>
//                <Item
//                  regular
//                  style={{
//                    marginBottom: 10,
//                    marginTop: 10,
//                    flexDirection: "column",
//                    marginLeft: 20,
//                    marginRight: 20,
//                    height: 90,
//                    backgroundColor: "rgba(240,240,240,0.2) "
//                  }}
//                >
//                  <Text
//                    style={{
//                      fontSize: 20,
//                      color: "black",
//                      paddingLeft: 20,
//                      paddingTop: 10
//                    }}
//                  >
//                    Price:
//                  </Text>
//                  <Text style={{ fontSize: 20, color: "black" }}>
//                    30JOD / Hour{" "}
//                  </Text>
//                </Item>
//              </View>

//              <View
//                style={{
//                  backgroundColor: "rgba(240,240,240,0.2) ",
//                  marginTop: 10,
//                }}
//              >
//                <View
//                  style={[
//                    styles.book1,
//                    { justifyContent: "center", alignItems: "center" }
//                  ]}
//                >
//                  <Text
//                    style={{
//                      color: "black",
//                      fontSize: 20,
//                      alignContent: "center"
//                    }}
//                  >
//                    BOOK A NOW
//                  </Text>
//                </View>
//                <View>
//                  <Text style={{ color: "black", marginLeft: 30, fontSize: 20 }}>
//                    Select Day
//                  </Text>
//                </View>
//                <View
//                style={{
//                  flexDirection: "column",
//                   justifyContent: "space-between",
//                   marginRight: 20,
//                   marginLeft: 20,
//                  marginTop: 20
//                }}
//                >
//                  <View
//                    style={{
//                      flexDirection: "row",
//                      justifyContent: "space-between",
//                      marginRight: 20,
//                      marginLeft: 20,
//                      marginBottom: 30
//                    }}
//                  >
//                    {
//                          myWeek.map((list, index) => {
//                        console.log('DAtesList', list.date);

//                        return (
//                          <View style={{ flexDirection: "row", justifyContent: "space-between" }} style={{ flex: 3, flexDirection: 'row', alignContent: "center", alignItems: 'center' }}>

//                            <View style={{ flex: 1 }} >

//                              <Text style={{ flex: 2, marginBottom: 30}}>
//                                {
//                                  list.dayName
//                                }
//                              </Text>
//                              <View style={{ flex: 2, marginBottom: -30, justifyContent: "space-between" }}>
//                                <TouchableOpacity style={styles.day} style={{
//                                  backgroundColor: this.state.dateClicked === index ? 'green' : 'white',
//                                  borderRadius: 40,
//                                  flex: 2, marginBottom: 30, justifyContent: "center",
//                                  shadowOffset: {
//                                    width: 0,
//                                    height: 2
//                                  },
//                                  shadowOpacity: 0.2,
//                                  shadowRadius: 1.84,
//                                  elevation: 2,
//                                  width: 50,
//                                  height: 40,
//                                }} onPress={() => this.setState({ dateClicked: index })}>
//                                  <Text style={styles.number}>
//                                    {
//                                      list.date
//                                    }
//                                  </Text>
//                                </TouchableOpacity>
//                              </View>
//                            </View>


//                          </View>

//                        )

//                      })
//                    }
//                  </View>


//                </View>
//              </View>
//              <View>
//                <Text
//                  style={{
//                    marginLeft: 20,
//                    marginTop: 10,
//                    marginBottom: 20,
//                    color: "black",
//                    marginLeft: 30,
//                    fontSize: 20
//                  }}
//                >
//                  Select Duration
//                </Text>
//              </View>
//              <View
//                style={{
//                  flexDirection: "row",
//                  justifyContent: "space-between",
//                  marginRight: 20,
//                  marginBottom: 20
//                }}
//              >
//                <TouchableOpacity
//                  style={{
//                    justifyContent: "center",
//                    alignItems: "center",
//                    marginLeft: 20,
//                    backgroundColor: this.getColor(7)
//                  }}
//                  onPress={() => this.changeColor(7)}

//                >
//                  <Text
//                    style={{
//                      justifyContent: "center",
//                      alignItems: "center",
//                    }}
//                  >
//                    One Hour
//                  </Text>
//                </TouchableOpacity>
//                <TouchableOpacity
//                  style={{
//                    justifyContent: "center",
//                    alignItems: "center",
//                    backgroundColor: this.getColor(8)
//                  }}
//                  onPress={() => this.changeColor(8)}
//                >

//                  <Text style={{ color: "black", textAlign: "center" }}>
//                    Two Hours
//                  </Text>
//                </TouchableOpacity>

//                <TouchableOpacity

//                  style={{
//                    justifyContent: "center",
//                    alignItems: "center",
//                    backgroundColor: this.getColor(9)
//                  }}
//                  onPress={() => this.changeColor(9)}
//                >
//                  <Text style={{ color: "black", textAlign: "center" }}>
//                    Three Hours
//                  </Text>
//                </TouchableOpacity>
//              </View>
//              {/* </View> */}

//              <View
//                style={{
//                  color: "green",
//                  borderColor: "green",
//                  marginTop: 30,
//                  justifyContent: "center"
//                }}
//              >
//                <TouchableOpacity onPress={this.onPress} style={styles.book}>
//                  <Text style={{ color: "white", fontSize: 30 }}>BOOK NOW</Text>
//                  <Image source={require("../assests/images/arrow.png")} />
//                </TouchableOpacity>
//              </View>
                  

          
           

          

             
//               </Content>
//                     <Footer />

//                 </Container>
//             </View>
//         );
    
//   }
// }
