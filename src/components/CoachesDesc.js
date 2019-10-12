import React, { Component } from "react";
import { Dimensions, Text, View, TouchableOpacity, ListView, Image, StatusBar, Platform } from "react-native";
import { Left, Right, Container, Button, Content, Item, Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import * as homeAction from "../actions/homeAction";
import { connect } from "react-redux"
import Header from "./headerWithoutArrow";
import Footer from './footerPage';
import Swiper from "react-native-swiper";
import styles from '../assests/styles/styles';
import { LinearGradient } from "expo-linear-gradient";




const dimensions = Dimensions.get("window");
export default class CoachesDesc extends Component {
    constructor(props) {
        super(props);



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
                { id: 0, productImage: require("../assests/images/coa.png") },
                { id: 1, productImage: require("../assests/images/C1.png") },
                { id: 2, productImage: require("../assests/images/c3.png") },
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
            isLoading: true,
            show: false,
            hide:false,
            dataSourceText: ds.cloneWithRows(dataObjectsText)
        };
    }

    componentWillMount() {
        var that = this;

    }
    ShowHideComponent = () => {
        if (this.state.show == false) {
            this.setState({ show: true });
        } else {
            this.setState({ show: false });
        }
    };
    ShowComponent = () => {
        if (this.state.hide == false) {
            this.setState({ hide: true });
        } else {
            this.setState({ hide: false });
        }
    };

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

 

    render() {
        StatusBar.setBarStyle("light-content", true);
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor("#0e1130", true);
            StatusBar.setTranslucent(true);
        }
        var dot_index1 = 0;

        return (
            <View style={{ width: dimensions.width, height: Dimensions.get('window').height / 1.04 }}
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
                                                            ? [styles.dot, { backgroundColor: "#0e1130" }]
                                                            : [styles.dot, { backgroundColor: "#aeaeae" }]
                                                    }
                                                />
                                            </View>
                                        );
                                    })}
                                </View>



                            </View>


                        </View>
                        <View style={{ marginTop: Dimensions.get('window').height / 300, marginLeft: 20 }}>
                            <Text style={{ color: "black", fontSize: 16, fontFamily: 'AnyelirScriptBoldItalic', marginBottom: 10, marginRight: -20 }}>JIHAD RAMI SAMAWI</Text>

                        </View>
                        <Text style={{ fontSize: 11, color: "black", paddingLeft: 20 }}>
                            Lorem ipsum dolor sit amet, conseadipiLorem ipsum dolor si amet, conseadipiLorem
                                  </Text>
                        <View style={{ marginTop: 10 }}>
                            <Item
                                regular
                                style={{
                                    marginTop: 10,
                                    width: "90%",
                                    flex: 1,
                                    height: 70,
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 1.84,
                                    elevation: 2,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    marginBottom: 10,
                                }}
                            >
                                <View style={{ flexDirection: 'column', marginBottom: 2 }}>
                                    <Text style={{ marginLeft: 20, fontSize: 16, color: "black", lineHeight: 24, textAlign: 'left', fontFamily: 'AnyelirScriptBoldItalic', marginTop: 10, marginRight: 10 }}>
                                        BIO
                                </Text>
                                    <Text style={{ marginLeft: 10, fontSize: 11, color: "black", lineHeight: 12, textAlign: 'left', color: '#8d8d8d', marginBottom: 10 }}>
                                        Lorem ipsum dolor sit amet, conseadipiLorem ipsum dolor si
                                        amet, conseadipiLorem ipsum dolor sit ame.
                                    </Text></View>
                            </Item>
                        </View>
                        <View style={{ marginTop: 10, marginLeft: 20 }}>
                            <Text style={{ color: "black", fontSize: 16, fontFamily: 'AnyelirScriptBoldItalic', marginBottom: 10, marginRight: -20 }}>SKILLS</Text>

                        </View>
                        <Text style={{ fontSize: 11, color: "black", paddingLeft: 20 }}>
                            Lorem ipsum dolor sit amet, conseadipiLorem ipsum dolor si amet, conseadipiLorem
                                  </Text>
                        <View style={{ marginTop: 10 }}>
                            <Item
                                regular
                                style={{
                                    marginTop: 10,
                                    width: "90%",
                                    flex: 1,
                                    height: 70,
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 1.84,
                                    elevation: 2,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    marginBottom: 10,
                                }}
                            >
                                <View style={{ flexDirection: 'column', marginBottom: 2 }}>
                                    <Text style={{ marginLeft: 20, fontSize: 16, color: "black", lineHeight: 24, textAlign: 'left', fontFamily: 'AnyelirScriptBoldItalic', marginTop: 10, marginRight: 10 }}>
                                        CERTIFICATE
                                </Text>
                                    <Text style={{ marginLeft: 10, fontSize: 11, color: "black", lineHeight: 12, textAlign: 'left', color: '#8d8d8d', marginBottom: 10 }}>
                                        Lorem ipsum dolor sit amet, conseadipiLorem ipsum dolor si
                                        amet, conseadipiLorem ipsum dolor sit ame.
                                    </Text></View>
                            </Item>
                        </View>
                        <View style={{ marginTop: 120 }}>
                            <View style={{ flexDirection: "column", marginBottom: 10, marginTop: -100 }}>

                                <Item
                                    regular
                                    style={{
                                        //   marginLeft: 20,
                                        //   marginRight: 20,
                                        marginTop: -20,
                                        height: 50,
                                        backgroundColor: "rgba(240,240,240,0.2) ",
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        {/* <Left> */}
                                        <Image
                                            source={require("../assests/images/phone.png")}
                                        />
                                        {!this.state.show ? (

                                            <Text style={{ fontSize: 16, color: "black", paddingLeft: 20, color: '#30832e' }}>
                                                00962 65....
                </Text>
                                        ) :

                                            <Text style={{ fontSize: 16, color: "black", paddingLeft: 20, color: '#30832e' }}>
                                                00962 6578910
                                                             </Text>

                                        }

                                        {/* </Left> */}
                                        {/* <Right> */}

                                        <TouchableOpacity onPress={this.ShowHideComponent}>
                                            {!this.state.show ? (
                                                <Text style={{ color: '#4a4a4a', fontSize: 16, textAlign: 'left', marginRight: 50, lineHeight: 18 }}> {' '}See The Number
                                                  </Text>
                                            ) : null}
                                        </TouchableOpacity>




                                    </View>
                                </Item>
                            </View>
                            <View style={{ marginBottom: 100 }}>
                                <Item
                                    regular
                                    style={{
                                        //   marginLeft: 20,
                                        //   marginRight: 20,
                                        height: 50,
                                        backgroundColor: "rgba(240,240,240,0.2) ",
                                        justifyContent: 'center'
                                    }}
                                >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                        {/* <Left> */}
                                        <Image
                                            source={require("../assests/images/email.png")}
                                        />
                                        {!this.state.hide ? (

                                            <Text style={{ fontSize: 16, color: "black", paddingLeft: 20, color: '#30832e' }}>
                                                ammar@...
</Text>
                                        ) :

                                            <Text style={{ fontSize: 16, color: "black", paddingLeft: 20, color: '#30832e' }}>
                                              ammar@yahoo.com
                 </Text>

                                        }
                                        {/* </Left> */}
                                        {/* <Right> */}
                                        <TouchableOpacity onPress={this.ShowComponent}>
                                            {!this.state.hide ? (
                                                <Text style={{ color: '#4a4a4a', fontSize: 16, textAlign: 'left', marginRight: 50, lineHeight: 18 }}> {' '}See The Email</Text>
                                            ) : null
                                            }
                                        </TouchableOpacity>
                                        {/* </Right> */}
                                    </View>

                                </Item>
                            </View>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', textAlign: 'center', marginTop: -80 }}>
                                <View style={{ width: '45%', marginLeft: -50, marginTop: -20 }}>
                                    <Button block style={{
                                        borderRadius: 4, marginLeft: 20, paddingLeft: 20, backgroundColor: "white", shadowOffset: {
                                            width: 0,
                                            height: 2
                                        },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 1.84,
                                        elevation: 2, alignSelf: 'center', justifyContent: 'center', width: "90%", marginLeft: 50
                                    }}
                                    >

                                        <Image source={require("../assests/images/f.png")} style={{ color: 'white', justifyContent: 'center', alignSelf: 'center', marginRight: 20 }} />

                                    </Button>
                                </View>
                                <View style={{ width: '50%', marginLeft: 20, marginTop: -20 }}>
                                    <LinearGradient
                                        colors={['rgb(55,137,48)', 'rgb(18,62,69)', 'rgb(7,37,78)']} style={{ borderRadius: 8, }}
                                    >
                                        <TouchableOpacity style={{ marginLeft: 20, height: 50, paddingLeft: 2, width: 300, justifyContent: 'center', alignSelf: 'center' }}
                                        >
                                            <Icon name="logo-instagram" style={{ color: 'white', justifyContent: 'center', alignSelf: 'center', marginRight: 20 }} />

                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>

                                <View>

                                </View>

                            </View>
                        </View>
                    </Content>
                    <Footer />

                </Container>
            </View>
        );
    }
}

