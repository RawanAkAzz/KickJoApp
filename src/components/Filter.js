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
    Content,
    Icon,
  Picker 
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
import { imagesStyle, imagesCradItem } from "../assests/styles/homeStyles";
import { Actions } from "react-native-router-flux";
import { Images, Metrics, Colors } from "../Themes";
import Header from "./headerWithoutArrow";
import Footer from './footerPage';
import * as homeAction from "../actions/homeAction";
import { connect } from "react-redux";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            // slideValue:15,
            selected2: undefined,
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
            color: "white",
            indexColor: "",
            dateClicked: ''
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

     }
     onValueChange2(value: string) {
        this.setState({
          selected2: value
        });
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

    get pagination() {
        const { images, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={images.length}
                activeDotIndex={activeSlide}
                containerStyle={{ marginRight: 34 }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    // borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: "green"
                }}
                inactiveDotStyle={{
                    marginVertical: 40
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );

    }

    render() {
        const { myWeek } = this.state
        console.log("rende my week", myWeek)
        return (

            <View style={{ width: Dimensions.width,...Platform.select({
                ios: {
                    height:Dimensions.get('window').height/1.04,
                },
                android: {
                    height:Dimensions.get('window').height/0.96
                }
            }),backgroundColor: "white" }}
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
                    <Item
                                regular
                                style={{
                                    
                                    height: 70,
                                    width:'100%',
                                    backgroundColor: "rgba(240,240,240,0.2) "
                                }}
                            >      
                                               <View style={{ flexDirection: 'row', backgroundColor: "rgba(240,240,240,0.2) ",width:Dimensions.get('window').width/1.1,  marginBottom: 20, justifyContent: 'space-btween',alignItems:'center' }}>
                            {/* <View> */}
                                
                            <View style={{width:'50%'}}>
                                <Text style={{ textAlign:'left', color: "#4a4a4a",marginLeft:10,marginTop:20, textAlign:"center", fontSize: 32,  fontFamily: "AnyelirScriptBoldItalic", }}>FILTERS</Text>
                            </View>
                            
                            <View style={{width:'50%',justifyContent:'center',alignItems:'flex-end',marginLeft:20,marginTop:20,}}>
                                                                <Text style={{ color: 'green',}}>Done</Text>
                            </View>
                            
                           </View>
                            </Item>
                        <View style={{ flexDirection: "row", marginTop: 20 , height:30}}>
                            {/* <Item
                                regular
                                style={{
                                    marginLeft: 30,
                                    // marginRight: 30,
                                    height: -30,
                                    width: 300,
                                    backgroundColor: "rgba(240,240,240,0.2) "
                                }}
                            > */}
                                <Text style={{ fontSize: 14, color: "#4a4a4a",
                                    marginLeft: 30,
                                    // marginRight: 30,
                                    height: -30, }}>
                                    Location
                </Text>


                            {/* </Item> */}
                            <Image
                                source={require("../assests/images/Artboard20.png")}
                                style={{ marginLeft:290, justifyContent: 'flex-start' }}
                            />
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
                                <Text style={{ fontSize: 14, color: "#4a4a4a", paddingLeft: 20 }}>
                                    Choose Current location
                </Text>

                            </Item>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 20, marginBottom: 10 }}>
                            {/* <Item
                                regular
                                style={{
                                    marginLeft: 30,
                                    // marginRight: 30,
                                    height: -30,
                                    width: 320,
                                    backgroundColor: "rgba(240,240,240,0.2) "
                                }}
                            > */}
                                <Text style={{ fontSize: 14, color: "#4a4a4a", marginLeft: 30,
                                    // marginRight: 30,
                                    height: -30,
                                    width: 320,
                                     }}>
                                    Nearby
                </Text>


                            {/* </Item> */}
                            <Text style={{ fontSize: 14, color: "#4a4a4a", justifyContent: 'flex-start', marginRight: 10 }}>
                                50Km
                </Text>
                        </View>

                        <View style={{ width: "95%", marginTop: 20, marginBottom: 20, marginLeft: 10, }}>
                            <LinearGradient
                                colors={['rgb(55,137,48)', 'rgb(18,62,69)', 'rgb(7,37,78)']} style={{ borderRadius: 8 }}
                            >
                                {/*Slider with max, min, step and initial value*/}

                                <Slider
                                    style={{ width: "100%", height: 17, borderRadius: 50 }}
                                    minimumValue={0}
                                    // trackStyle= {{
                                    //     height: 30, width:"100%"}}
                                      thumbStyle= {
                                        width= 100
                                      }
                                    maximumValue={50}
                                    // value={this.state.slideValue}
                                    // onValueChange={(value)=> this.setState({ slideValue: value}) }
                                    maximumTrackTintColor='transparent'
                                    minimumTrackTintColor='transparent'
                                />
                            </LinearGradient>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 20, marginBottom: 10 }}>
                            {/* <Item
                                regular
                                style={{
                                    marginLeft: 30,
                                    // marginRight: 30,
                                    height: -30,
                                    width: 320,
                                    backgroundColor: "rgba(240,240,240,0.2) "
                                }}
                            > */}
                                <Text style={{ fontSize: 14, color: "#4a4a4a" , marginLeft: 30,
                                    // marginRight: 30,
                                    height: -30,
                                    width: 320,}}>
                                    Price
                </Text>


                            {/* </Item> */}
                            <Text style={{ fontSize: 14, color: "#4a4a4a", justifyContent: 'flex-start', marginLeft: 10 }}>
                                $$$$$
                </Text>
                        </View>

                        <View style={{ width: "95%", marginLeft: 10, marginTop: 20 }}>
                            <LinearGradient
                                colors={['rgb(55,137,48)', 'rgb(18,62,69)', 'rgb(7,37,78)']} style={{ borderRadius: 8 }}
                            >
                                {/*Slider with max, min, step and initial value*/}

                                <Slider
                                    style={{ width: "100%", height: 17, borderRadius: 50 }}
                                    minimumValue={0}
                                    maximumValue={50}
                                    // value={this.state.slideValue}
                                    // onValueChange={(value)=> this.setState({ slideValue: value}) }
                                    maximumTrackTintColor='transparent'
                                    minimumTrackTintColor='transparent'
                                    touchDimensions={{width:200}}
                                />
                            </LinearGradient>
                        </View>
                        <View style={{ flex: 2, marginTop: 20, justifyContent: "space-between", flexDirection: 'row' }}>
                            <Text style={{ fontSize: 14, marginLeft: 10, color: "#4a4a4a", justifyContent: "center", alignItems: "center" }}>
                                15
                            </Text>
                            <Text style={{ fontSize: 14, marginLeft: 10, color: "#4a4a4a", justifyContent: "center", alignItems: "center" }}>
                                20
                            </Text>
                            <Text style={{ fontSize: 14, marginLeft: 10, color: "#4a4a4a", justifyContent: "center", alignItems: "center" }}>
                                25
                            </Text>
                            <Text style={{ fontSize: 14, marginLeft: 10, color: "#4a4a4a", justifyContent: "center", alignItems: "center" }}>
                                30
                            </Text>
                            <Text style={{ fontSize: 14, marginLeft: 10, color: "#4a4a4a", justifyContent: "center", alignItems: "center" }}>
                                35
                            </Text>
                            <Text style={{ fontSize: 14, marginRight: 10, color: "#4a4a4a", justifyContent: "center", alignItems: "center" }}>
                                +40
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 30, marginBottom: 10 }}>
                            {/* <Item
                                regular
                                style={{
                                   
                                    backgroundColor: "rgba(240,240,240,0.2) "
                                }}
                            > */}
                                <Text style={{ fontSize: 14, color: "#4a4a4a"  ,marginLeft: 30,
                                    // marginRight: 30,
                                    height: -30,
                                    width: 320,}}>
                                    Rating
                </Text>


                            {/* </Item> */}
                            {/* <LinearGradient
                                colors={['rgb(55,137,48)', 'rgb(18,62,69)', 'rgb(7,37,78)']} 
                            > */}
                            <Image
                                source={require("../assests/images/Artboard30.png")}
                                style={{ marginLeft: 30 }}
                            />
                            {/* </LinearGradient> */}
                        </View>
                        <View style={{ width: "95%", marginLeft: 10, marginTop: 20 }}>

                            <Slider
                                style={{ width: "100%", height: 17, borderRadius: 50 }}
                                minimumValue={0}
                                maximumValue={50}
                                // value={this.state.slideValue}
                                // onValueChange={(value)=> this.setState({ slideValue: value}) }
                                maximumTrackTintColor='transparent'
                                minimumTrackTintColor='transparent'
                                thumbTintColor={['rgb(55,137,48)', 'rgb(18,62,69)', 'rgb(7,37,78)']}
                                minimumTrackTintColor={['rgb(55,137,48)', 'rgb(18,62,69)', 'rgb(7,37,78)']}
                            />
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>

                           
                           <Image
                                source={require("../assests/images/Art.png")}
                                style={{ marginLeft: 30 }}
                            />
                             <Image
                                source={require("../assests/images/Art.png")}
                                style={{ marginLeft: 30 }}
                            />
                             <Image
                                source={require("../assests/images/Art.png")}
                                style={{ marginLeft: 30 }}
                            />
                             <Image
                                source={require("../assests/images/Art.png")}
                                style={{ marginLeft: 30 }}
                            />
                             <Image
                                source={require("../assests/images/Art.png")}
                                style={{ marginRight: 30 }}
                            />
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 30, marginBottom: 10 }}>

                            <Text style={{ fontSize: 14, color: "#4a4a4a", marginLeft: 20, marginBottom: 10 }}>
                                Type
                </Text></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' , marginBottom:10 }}>
                                <CheckBox
                                    style={{ flex: 1, padding: 10, width: 40 }}
                                    onClick={() => {
                                        this.setState({
                                            isChecked:'Any'
                                        })
                                    }}
                                    isChecked={this.state.isChecked==="Any"? true:false}
                                    leftText={"Any"}
                                />
                                <View>
                                    <Text style={{ fontSize: 12, color: "#4a4a4a", marginLeft: 20, marginTop: 13 }}>Any</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <CheckBox
                                    style={{ flex: 1, padding: 10, width: 40 }}
                                    onClick={() => {
                                        this.setState({
                                            isChecked: 'Indoor'
                                        })
                                    }}
                                    isChecked={this.state.isChecked==="Indoor"? true:false}
                                    leftText={"Indoor"}
                                />
                                <View>
                                    <Text style={{ fontSize: 12, color: "#4a4a4a", marginLeft: 20, marginTop: 13 }}>Indoor</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <CheckBox
                                    style={{ flex: 1, padding: 10, width: 40, marginRight: 20 }}
                                    onClick={() => {
                                        this.setState({
                                            isChecked:'Outndoor'
                                        })
                                    }}
                                    isChecked={this.state.isChecked==="Outndoor"? true:false}
                                    leftText={"Outndoor"}
                                />
                                <View>
                                    <Text style={{ fontSize: 12, color: "#4a4a4a", marginRight: 20, marginTop: 13 }}>Outdoor</Text>
                                </View>
                            </View>

                        </View>

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
                                Play Ground                </Text>
              
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" style={{marginLeft:160 }} />}
                style={{ width: undefined}}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Play Ground" value="key0" />
                <Picker.Item label="Play Ground" value="key1" />
                <Picker.Item label="Play Ground" value="key2" />
                <Picker.Item label="Play Ground" value="key3" />
              </Picker>
         


                            </Item>

                        </View>
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
                                   Size
                </Text>
              
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" style={{marginLeft:270 }} />}
                style={{ width: undefined}}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="15" value="key0" />
                <Picker.Item label="20" value="key1" />
                <Picker.Item label="25" value="key2" />
                <Picker.Item label="30" value="key3" />
              </Picker>
         


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
                                        alignContent: "center"
                                    }}
                                >
                                    AVAILABILITY
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

                                                        <Text style={{ flex: 2, marginBottom: 30 }}>
                                                            {
                                                                list.dayName
                                                            }
                                                        </Text>
                                                        <View style={{ flex: 2, marginBottom: -30, justifyContent: "space-between" }}>
                                                            <TouchableOpacity style={styles.day} style={{
                                                                backgroundColor: this.state.dateClicked === index ? 'green' : 'white',
                                                                borderRadius: 40,
                                                                flex: 2, marginBottom: 30, justifyContent: "center",
                                                                shadowOffset: {
                                                                    width: 0,
                                                                    height: 2
                                                                },
                                                                shadowOpacity: 0.2,
                                                                shadowRadius: 1.84,
                                                                elevation: 2,
                                                                width: 50,
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
                        <View style={{ width: '90%', marginTop: 20, alignSelf: 'center', height: 50, paddingLeft: 2, width: 300, justifyContent: 'center', alignSelf: 'center' }}>
                            <LinearGradient
                                colors={['rgb(55,137,48)', 'rgb(18,62,69)', 'rgb(7,37,78)']} style={{ borderRadius: 6, }}
                            >
                                <TouchableOpacity style={{ alignSelf: 'center', height: 50, paddingLeft: 2, width: 600, justifyContent: 'center', alignSelf: 'center' }}
                                >
                                    <Text style={{ color: "white", textAlign: 'center', fontSize: 32, fontFamily: "AnyelirScriptBoldItalic" }}>
                                        Confirm
                                                                </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>

                    </ScrollView>

                    <Footer />

                </Drawer>
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
