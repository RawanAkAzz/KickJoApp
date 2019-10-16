import React, { Component } from "react";
import { Dimensions, Text, View, TouchableOpacity, ListView, Image, StatusBar, Platform, StyleSheet } from "react-native";
import { Left, Right, Container, Button, Content, Item, Icon,  Picker 
} from "native-base";
import { Actions } from "react-native-router-flux";
import * as homeAction from "../actions/homeAction";
import { connect } from "react-redux"
import Header from "./headerWithoutArrow";
import Footer from './footerPage';
import Swiper from "react-native-swiper";
import styles from '../assests/styles/styles';
import { LinearGradient } from "expo-linear-gradient";

export default class BookNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false,
      dateArr: ["S", "M", "T", "W", "Thu", "F", "Sa"],
      myWeek: [],
      fontLoaded: false,
      currentDay: "",
      currentDate: "",
      borderColor: "green",
      color: "white",
      indexColor: "",
      dateClicked: '',
    }


    const currentDate = new Date().getDate();
    const currentDayNumber = new Date().getDay();
    const currentDay = this.state.dateArr[currentDayNumber];
    this.setState({ currentDate, currentDay });

    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    const dataObjectsText = [
      { id: 1 },
      { id: 2 },
      { id: 3 },

    ];

    const { navigation } = this.props;
    console.log("kjdf");
    console.log(navigation.getParam("screenName"));
    screenName = navigation.getParam("screenName");

    this.state = {
      dot_index: 0,
      selectedLots: "2",
      modalVisible: false,
      dots: [{ id: 1 }, { id: 2 }, { id: 3 }],

      data: [
        { id: 0, productImage: require("../assests/images/s1.png") },
        { id: 1, productImage: require("../assests/images/s2.png") },
        { id: 2, productImage: require("../assests/images/s3.png") },
      ],

      productColor: [
        { id: 1, productDetailColor: "#0947ba", isSelected: false },
        { id: 2, productDetailColor: "#c4c9d7", isSelected: false }
      ],

      size: [
        { id: 1, value: "XS", isSelected: false },
        { id: 2, value: "S", isSelected: false },
        { id: 3, value: "M", isSelected: false },
        { id: 4, value: "L", isSelected: false },
        { id: 5, value: "XL", isSelected: false },
        { id: 6, value: "XXL", isSelected: false }
      ],

      selectedSocialShare: "2",
      index: 0,
      isColorViewOpen: false,
      isColorProductSelected: false,
      modalsizeVisible: false,
      selectedLots: "1",
      selectedSize: "1",
      isSizeViewOpen: false,
      isLiked: false,
      isLikeColor: "black",
      isLoading: true,
      dataSourceText: ds.cloneWithRows(dataObjectsText)
    };

  }

  toggleModals(visible) {
    this.setState({ modalVisible: visible });
  }

  renderColorRow = () => {
    return alert("true"), <View style={styles.rowColorView} />;
  };

  _renderDot(rowData) {
    return (
      <View style={styles.rowDot}>
        <View
          style={
            rowData.id == this.state.index
            ? [styles.dot, { backgroundColor: "white" }]
            : [styles.dot, { backgroundColor: "gray" }]
          }
        />
      </View>
    );
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }



  setModalVisible(visible) {
    this.setState({ modalsizeVisible: visible });
  }

  onLikeClick() {
    if (this.state.isLiked == false) {
      this.setState({ isLiked: true, isLikeColor: "red" });
    } else {
      this.setState({ isLiked: false, isLikeColor: "black" });
    }
  }

  componentWillMount() {
    var that = this;

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
  }




  changeColor = indexColor => {
    this.setState({ indexColor });
  };

  getColor = index => {
    const { indexColor } = this.state;
    if (index === indexColor) return "green";
    return "white";
  };

  render() {
    const { myWeek = [] } = this.state
    return (
      <View style={{ width: Dimensions.width,  ...Platform.select({
        ios: {
            height:Dimensions.get('window').height/1.01,
        },
        android: {
            height:Dimensions.get('window').height/0.96
        }
    }),width:"100%", backgroundColor:'white'}}
      >

        <Header openDrawer={this.openDrawer} closeDrawer={this.closeDrawer} />

        <StatusBar backgroundColor="#1e2131" barStyle="light-content" />

        <Container style={{ backgroundColor: "transparent" }}>
          <Content style={{ backgroundColor: "transparent" }}>

            <View>
              <View style={styles.sliderBG}>
                <Swiper
                  showsButtons={false}
                  autoplay={false}
                  horizontal={true}
                  index={0}
                  loop={false}
                  onIndexChanged={index => this.setState({ dot_index: index })}
                  dot={<View />}
                  activeDot={<View />}
                >
                  {this.state.data.map((item, key) => {
                    return (
                      <View style={styles.rowBg} key={key}>
                        <Image
                          style={styles.productImage}
                          source={item.productImage}
                          ImageStyle={{borderRadius:10}}
                        />
                      </View>
                    );
                  })}
                </Swiper>
                <View style={styles.dotListBg}>
                  {this.state.dots.map((item, value) => {
                    return (
                      <View style={styles.rowDot} key={value}>
                        <View
                          style={
                            item.id - 1 == this.state.dot_index
                            ? [styles.dot, { backgroundColor: "white" }]
                            : [styles.dot, { backgroundColor: "gray" }]
                          }
                        />
                      </View>
                    );
                  })}
                </View>



              </View>


            </View>

            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between"                
              }}   
            >
              {/* {Dimensions.height===} */}
              <View style={{ marginBottom: Dimensions.get('window').height /14, marginLeft: 20 }}>    
                <TouchableOpacity>
                  <Image
                    source={require("../assests/images/Artboard21.png")}
                    style={style.images}
                  />
                </TouchableOpacity>
              </View>
              <View >
                <TouchableOpacity>
                  <Image
                    source={require("../assests/images/Artboard22.png")}
                    style={style.images}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Image
                    source={require("../assests/images/Artboard23.png")}
                    style={style.images}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Image
                    source={require("../assests/images/Artboard24.png")}
                    style={style.images}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Image
                    source={require("../assests/images/Artboard25.png")}
                    style={style.images}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ marginRight: 20 }}>
                <TouchableOpacity >
                  <Image
                    source={require("../assests/images/Artboard26.png")}
                    style={style.images}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                marginTop: -20,
                justifyContent: "space-between"
              }}
            >
              <View style={{ marginLeft: 20, flexDirection: "column" }}>
                <Text style={{ color: "black", fontSize:16 , fontFamily:"AnyelirScriptBoldItalic" }}>AL FISALY CLUB STADIUM</Text>
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
                  justifyContent: "space-between"
                }}
              >
                <LinearGradient
                  colors={['rgb(7,37,78)', 'rgb(18,62,69)', 'rgb(55,137,48)']}
                  style={{ width: Dimensions.get('window').width /9, justifyContent: 'center', alignItems: "center", height: 25, borderRadius: 12, marginRight: Dimensions.get('window').height / 39 }}
                >
                  <TouchableOpacity
                    style={[
                      styles.star,
                      { justifyContent: 'space-between', alignItems: "center",flexDirection: 'row'  }
                    ]}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: 10
                      }}
                    >
                      5
                  </Text>
                    <Image
                      source={require("../assests/images/Artboard18.png")}
                      style={{ width: 10}}
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
                    source={require("../assests/images/Artboard19.png")}
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
                  source={require("../assests/images/Artboard20.png")}
                  style={{ marginLeft: Dimensions.get('window').height/6.3 }}
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
                 {Platform.OS==='ios ' ?
                 <Text style={{ fontSize: 14, color: "black", marginLeft:Dimensions.get('window').height/3, fontFamily:"AnyelirScriptBoldItalic"}}>
                 8*8
                 </Text>
                 :
                 <Text style={{ fontSize: 14, color: "black", marginLeft:Dimensions.get('window').height/3.20, fontFamily:"AnyelirScriptBoldItalic"}}>
                 8*8
                </Text>
              }
              </Item>
            </View>
          
              <View
               
                style={{
                  marginTop: 20,
                  borderWidth:0.3,
                  // borderColor:'white',
                  // width: "100%",
                  // flex: 4,
                  height: 70,
                  // shadowOffset: {
                  //   width: 0,
                  //   height: 2
                  // },
                  // shadowOpacity: 0.2,
                  // shadowRadius: 1.84,
                  // elevation: 2,
                   alignItems:'flex-start',
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 20, color: "black", fontFamily:"AnyelirScriptBoldItalic" , marginTop:Dimensions.get('window').height/30 , marginLeft:30}}>
                  Description
                 </Text>
              
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
                <Text style={{ fontSize: 20, color: "black" , fontFamily:"AnyelirScriptBoldItalic"}}>
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
                    fontSize: 20,
                    fontFamily:"AnyelirScriptBoldItalic",
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
                  justifyContent: "space-between",
                  marginRight: 20,
                  marginLeft: 20,
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
                        <View style={{ flexDirection: "row",flex: 3, flexDirection: 'row', alignContent: "center", alignItems: 'center' }}>

                          <View style={{ flex: 1 }} >

                            <Text style={{ flex: 2, marginBottom: 30 }}>
                              {
                                list.dayName
                              }
                            </Text>
                            <View style={{ flex: 2, marginBottom: -30, justifyContent: "space-between" }}>
                              <TouchableOpacity style={{
                                backgroundColor: 'white',
                                borderRadius: 40,
                                flex: 2, marginBottom: 30, justifyContent: 'space-between',
                                shadowOffset: {
                                  width: 0,
                                  height: 2
                                },
                                shadowOpacity: 0.2,
                                shadowRadius: 1.84,
                                elevation: 2,
                                width:Dimensions.get('window').width/10,
                                // alignItems:'center',
                                // alignContent:'center',
                                height: 40,
                              }} onPress={() => this.setState({ dateClicked: index })}>
                                <LinearGradient
                                  colors={this.state.dateClicked === index ? ['rgb(7,37,78)', 'rgb(18,62,69)', 'rgb(55,137,48)'] : ['white', 'white']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                  style={{ width:Dimensions.get('window').width/10,
                                  height: 40, borderRadius: 20 , textAlign:'center',alignItems:'center' }}
                                >
                                  <Text style={{textAlign:'center', marginTop:Dimensions.get('window').height/60}}>
                                    {
                                      list.date
                                    }
                                  </Text>
                                </LinearGradient>
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

            <LinearGradient 
             colors={['rgb(7,37,78)','rgb(18,62,69)','rgb(55,137,48)']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
              style={{
                width:Dimensions.get('window').width/1,
                height:Dimensions.get('window').height/14,
                marginBottom: Dimensions.get('window').height/40,
                justifyContent: "center",
                flexDirection:'row'
              }}
            >
               {/* <LinearGradient
        style={{ flexDirection:'row' , justifyContent:"space-between"}}

        > */}
              <TouchableOpacity onPress={()=>this.setState({show:!this.state.show})} style={{alignItems:'center' , flexDirection:'row' , justifyContent:'space-between'}}>
                <Text style={{ color: "white", fontSize: 18, fontFamily:"AnyelirScriptBoldItalic" , textAlign:'center'}}>BOOK NOW</Text>
                <Image source={require("../assests/images/arrow.png")} style={{}}/>
              </TouchableOpacity></LinearGradient>
            {this.state.show ? 
                <View  style={[
                  styles.book1,
                  { justifyContent: "center", alignItems: "center" }
                ]}>
                  <View >
                  <Text style={{color:'black' , fontSize:'24px', fontFamily:'AnyelirScriptBoldItalic', textAlign:'center',marginTop:20}}>
             YOUR BOOKING       
                  </Text>
                </View>
                  <View style={{ justifyContent:'flex-start',alignSelf:"flex-end", marginTop: 10 }}>
                  
              <Item
                regular
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  height: 50,
                  width:360,
                  backgroundColor: "rgba(240,240,240,0.2) "
                }}
              >
                <Text style={{ fontSize: '19px', color: "black", paddingLeft: 20 }}>
                AL FAISALY CLUB STADIUM
                                 </Text>
                
              </Item>
            </View>
            <View>
            <Item
                regular
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  height: 50,
                  width:373,
                  backgroundColor: "rgba(240,240,240,0.2) ",marginTop:10
                }}
              >
                <Text style={{ fontSize: '19px', color: "black", paddingLeft: 20 }}>
               Amman, Khalda
                                 </Text>
                
              </Item>
            </View>
            <View style={{marginBottom:10}}>
                 <Text style={{color:'black' , fontSize:'24px', fontFamily:'AnyelirScriptBoldItalic', textAlign:'center',marginTop:20}}>
                 CHECK OUT
                 </Text>
            </View>
            <LinearGradient 
               colors={['rgb(55,137,48)', 'rgb(18,62,69)', 'rgb(7,37,78)']}
>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                            <Item
                                regular
                                style={{
                                    marginLeft: 20,
                                    // marginRight: 30,
                                    height: 50,
                                    width: 380,
                                    backgroundColor: "rgba(240,240,240,0.2) "
                                }}
                            >
                                <Text style={{ fontSize: 14, color: "#4a4a4a", marginLeft: 20 }}>
                                Select your payment method
                                                </Text>
              
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" style={{marginLeft:80 }} />}
                style={{ width: undefined
              }}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="payment1" value="key0" />
                <Picker.Item label="payment2" value="key1" />
                <Picker.Item label="payment3" value="key2" />
                <Picker.Item label="payment4" value="key3" />
              </Picker>
         


                            </Item>

                        </View></LinearGradient>
                        
                        <View style={{flexDirection:'row', marginTop:20}}>
                        <View style={{ width: '45%', marginLeft: -50 }}>
                                <Button block style={{marginBottom:10, borderRadius: 4, marginLeft: 20, paddingLeft: 20, backgroundColor: "white", shadowOffset: {
                                  width: 0,
                                  height: 2
                                },
                                shadowOpacity: 0.2,
                                shadowRadius: 1.84,
                                elevation: 2 , alignSelf:'center', justifyContent:'center' , width:"90%", marginLeft:50}}
                                >

                                    <Text style={{fontSize:'24px', fontFamily:'AnyelirScriptBoldItalic', textAlign:'center',}} >Cancel</Text>

                                </Button>
                            </View>
                            <View style={{ width: '50%', marginLeft: 20 , }}>
                               <LinearGradient
                colors={['rgb(55,137,48)', 'rgb(18,62,69)', 'rgb(7,37,78)']} style={{ borderRadius: 8, }}
            >
                                <TouchableOpacity  style={{ marginLeft: 20,height:50, paddingLeft: 2, width:100,justifyContent:'center', alignSelf:'center'}}
                                >
                                    <Text style={{fontSize:'24px', fontFamily:'AnyelirScriptBoldItalic', textAlign:'center',}} >Confirm</Text>

                                </TouchableOpacity>
                                </LinearGradient> 
                            </View>


                          </View> 
                </View>

: null}




          </Content>
          <Footer />

        </Container>
      </View>
    );

  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  images: {
    width: 20,
    height: 20,
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.84,
    elevation: 2,
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
  }
})
























