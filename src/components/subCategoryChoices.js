import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  TextInput,
  ListView,
  Easing,
  Platform,StyleSheet,Dimensions,ImageBackground
} from "react-native";
import {Drawer,Container,Content,CardItem,Left,Right,Button,Icon} from 'native-base'
import { Images, Metrics,Colors } from "../Themes";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Footer from './footerPage';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "./header";
import {centerStyle} from "../theme";
import {Actions} from "react-native-router-flux";

import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar
} from "../components/react-native-scrollable-tab-view"

var Balls = [
  {
    id: 1,
    ballImg: Images.ballOne,
    is_Favorite: true,
    rating: 4,
    ball:'one'
  },
  {
    id: 2,
    ballImg: Images.ballTwo,
    is_Favorite: false,
    rating: 4,
    ball: "two"
  },

  {
    id: 3,
    ballImg: Images.ballThree,
    is_Favorite: false,
    rating: 4,
    FoodName: "three"
  },
];

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });
const dimensions = Dimensions.get("window");

export default class SearchResultOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      dataSource: ds.cloneWithRows(Balls),
      // dataSourceTwo: ds.cloneWithRows(GridBalls),
      review: "",
      MenuList: true,
      GridList: false
    };
  }
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
    setTimeout(() => Keyboard.dismiss());
  };
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("TabView");
    return true;
  };


  /* List renderRow START */
  _renderRow = rowData => {
    var that = this;

    return (
      <View style={styles.mainListRenderRow} style={{marginRight:10, marginLeft:10,marginTop:10}}>
        <View style={styles.ballImg}>
          {/* <Image source={rowData.ballImg} style={styles.ballImg} /> */}

       <TouchableOpacity
                         onPress={()=>Actions.BookNow()}
                          >
                            <ImageBackground
                         
                         source={rowData.ballImg} style={styles.ballImg} 
                            >
                          
                            <CardItem
                            style={{
                              backgroundColor: "transparent",
                              marginTop: 20,
                              justifyContent:'center'
                            }}
                          >
                            <View style={centerStyle}>
                              <Text style={{color: "#ffffff",fontSize: 17,fontFamily: "TajawalBold0",lineHeight: 25}}>
                               Test
                              </Text>
         
                            </View>
                          </CardItem>
                          <CardItem
                            style={{
                              backgroundColor: "transparent",
                              marginTop: 115,
                              justifyContent:'center'
                            }}
                          >
                            <Left>
                              <Text style={{color: "#ffffff",fontSize: 14,fontFamily: "arialBlack",lineHeight: 25 , marginTop:-20}}>
                               30 JOD / Hour
                              </Text>
         
                            </Left>
                            <Right>
                            <Button rounded success style={{width:45,height:25,backgroundColor:"green",marginTop:-20}}>
            <Text style={{color:"#fff"}}>  5  <Icon name="md-star" style={{fontSize:12,marginRight:5}} /></Text>
          </Button>
                            </Right>
                          </CardItem>
                            </ImageBackground>
                          </TouchableOpacity>
        
        </View>
       
      </View>
    );
  };
  /* List renderRow END */

  /* Grid renderRow START */

  _renderRowGrid = rowData => {
    var that = this;

    return (
      <View style={styles.listMainviewBg}>
        <View style={styles.ballImgGrid}>
          {/* <Image  /> */}
          <TouchableOpacity
                          onPress={() =>
                           Actions.BookNow()
                          }
                          >
                            <ImageBackground
                         
                         source={rowData.ballImg} style={styles.ballImgGrid}
                            >
                          
                            <CardItem
                            style={{
                              backgroundColor: "transparent",
                              marginTop: 20,
                              justifyContent:'center'
                            }}
                          >
                            <View style={centerStyle}>
                              <Text style={{color: "#ffffff",fontSize: 17,fontFamily: "TajawalBold0",lineHeight: 25}}>
                               Test
                              </Text>
         
                            </View>
                          </CardItem>
                          <View style={{flexDirection:"row",marginTop:80}}>
                          <View style={{flexDirection: "column",width:"60%",marginLeft:10}}> 
                    <Text style={{color: "#ffffff",fontSize: 14,fontFamily: "TajawalBold0",lineHeight: 25}}>
                     30 JOD / Hour
                      </Text>
                          </View>
                          <View style={{flexDirection: "column",width:"30%" , marginTop:-10}}> 
                          <Button rounded success style={{width:45,height:25,backgroundColor:"green"}}>
            <Text style={{color:"#fff"}}>  5  <Icon name="md-star" style={{fontSize:12,marginRight:5}} /></Text>
          </Button>
                          </View>
                          </View>
                          
                            </ImageBackground>
                          </TouchableOpacity>
      
        </View>
      </View>
    );
  };

  /* Grid renderRow END */


 
  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("black", true);
      StatusBar.setTranslucent(true);
    }

    return (
    //   <View style={styles.mainview}>
    <View  style={{width: dimensions.width, height: "100%",backgroundColor:"#fff"}}
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
          <Container style={{backgroundColor: "transparent"}}>
            <Content style={{backgroundColor: "transparent"}}>
        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={styles.tabUnderLine}
          tabBarBackgroundColor={"transparent"}
          tabBarActiveTextColor={"white"}
          tabBarInactiveTextColor={"#f8aa91"}
          tabBarTextStyle={styles.tabText}
          style={{
            backgroundColor: "transparent", marginTop:-50
          }}
          renderTabBar={() => <ScrollableTabBar />}
        >
          <View tabLabel="Nearby">
            <View
              style={{
                backgroundColor: "#f5f5f5",
                height: Metrics.HEIGHT * 0.9,
           
              }}
            >
              <View style={styles.FilterMainBg}>
                <FontAwesome
                  name="filter"
                  size={20}
                 color= "#185284"
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.02
                  }}
                />
                <Text style={styles.filterText}>Filter</Text>

                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      GridList: true,
                      MenuList: false
                    })
                  }
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.01
                  }}
                >
                  {this.state.GridList ? (
                    <Entypo name="grid" size={25} color="#262628" />
                  ) : (
                    <Entypo name="grid" size={25} color="#c2c4ca" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      MenuList: true,
                      GridList: false
                    })
                  }
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.01
                  }}
                >
                  {this.state.MenuList ? (
                    <Entypo name="list" size={25} color="#262628" />
                  ) : (
                    <Entypo name="list" size={25} color="#c2c4ca" />
                  )}
                </TouchableOpacity>
              </View>
              {this.state.GridList ? (
                <View>
                  <View style={styles.mainListContentGrid}>
                    <ListView
                      contentContainerStyle={styles.listContentGrid}
                      dataSource={this.state.dataSource}
                      renderRow={this._renderRowGrid.bind(this)}
                      enableEmptySections
                      pageSize={4}
                    />
                  </View>
                </View>
              ) : null}

              {this.state.MenuList ? (
                <View>
                  <View style={styles.mainListContent}>
                    <ListView
                      contentContainerStyle={styles.listContent}
                      dataSource={this.state.dataSource}
                      renderRow={this._renderRow.bind(this)}
                      enableEmptySections
                      pageSize={4}
                    />
                  </View>
                </View>
              ) : null}
            </View>
          </View>

  
          

        </ScrollableTabView>
        </Content>  
              <Footer/>

        </Container>
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
    width:"100%"
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
  }
});

