import React, { Component } from "react";
import { Dimensions, Text,  View, TouchableOpacity, ListView, Image, StatusBar, Platform } from "react-native";
import { Left, Right, Container,Button, Content, Item , Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import * as homeAction from "../actions/homeAction";
import { connect } from "react-redux"
import Header from "./headerWithoutArrow";
import Footer from './footerPage';
import Swiper from "react-native-swiper";
import styles from '../assests/styles/styles';
import { LinearGradient } from "expo-linear-gradient";

export default class StadiumDesc extends Component {
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

componentWillMount() {
    var that = this;

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

      render(){
          return (
              <View style={{ width: Dimensions.width, height: "100%" }}
              >
  
                  <Header openDrawer={this.openDrawer} closeDrawer={this.closeDrawer} />
  
                  <StatusBar backgroundColor="#1e2131" barStyle="light-content" />
  
                  <Container style={{ backgroundColor: "transparent" }}>
                      <Content style={{ backgroundColor: "transparent" }}>
  
                         
          
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between",
                marginTop:-20
              }}
            >
             <View style={{ marginTop: -250, marginLeft: 20 }}>
                <Text style={{ color: "black" , fontFamily:'AnyelirScriptBoldItalic' , fontSize:16,lineHeight:24,textAlign:'left' }}>LEGENDS SOCCER ACADEMY</Text>
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
                      justifyContent: "space-around",
                      marginBottom:60
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
                  marginBottom:-200
                }}
              >
               
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
            <View style={{marginTop:-170}}>
            <View style={{ flexDirection: "column", marginBottom: 10 }}>
              
              <Item
                regular
                style={{
                //   marginLeft: 20,
                //   marginRight: 20,
                  marginTop:-10,
                  height: 50,
                  backgroundColor: "rgba(240,240,240,0.2) ",
                  justifyContent:'center',
                  alignItems:'center'
                }}
              >  
                 <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                     {/* <Left> */}
                 <Image
                    source={require("../assests/images//Artboard20.png")}
                   
                  />
                <Text style={{ fontSize: 16, color: "black", paddingLeft: 20 ,color:'#30832e' }}>
                00962 65.... 
                </Text>
                {/* </Left> */}
                {/* <Right> */}
                    <TouchableOpacity>
                        <Text style={{color:'#4a4a4a' ,fontSize: 16, textAlign:'left' , marginRight:50, lineHeight: 18}}> {' '}See The Number</Text>
                    </TouchableOpacity>
                {/* </Right> */}
                </View>
              </Item>
            </View>
            <View>
              <Item
                regular
                style={{
                //   marginLeft: 20,
                //   marginRight: 20,
                  height: 50,
                  backgroundColor: "rgba(240,240,240,0.2) ",
                  justifyContent:'center'
                }}
              >
                 <View style={{flexDirection:'row', justifyContent:'space-between' , }}>
                     {/* <Left> */}
                 {/* <Image
                    source={require("../assests/images//Artboard20.png")}
                  
                  /> */}
                <Text style={{ fontSize: 16, color: "black", paddingLeft: 20 ,color:'#30832e' }}>
               ammar@... 
                </Text>
                {/* </Left> */}
                {/* <Right> */}
                    <TouchableOpacity>
                        <Text style={{color:'#4a4a4a' ,fontSize: 16, textAlign:'left' , marginRight:50, lineHeight: 18}}> {' '}See The Email</Text>
                    </TouchableOpacity>
                {/* </Right> */}
                </View>
                
              </Item>
            </View>
            </View>
            <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center',alignItems:'center', textAlign:'center', marginBottom: 20, marginTop: 10 }}>
                            <View style={{ width: '45%', marginLeft: -50 }}>
                                <Button block style={{ borderRadius: 4, marginLeft: 20, paddingLeft: 20, backgroundColor: "white", shadowOffset: {
                                  width: 0,
                                  height: 2
                                },
                                shadowOpacity: 0.2,
                                shadowRadius: 1.84,
                                elevation: 2 , alignSelf:'center', justifyContent:'center' , width:"90%", marginLeft:50}}
                                >

                                    <Image source={require("../assests/images/f.png")} style={{justifyContent:'center', alignSelf:'center' , marginRight:20}} />

                                </Button>
                            </View>
                            <View style={{ width: '50%', marginLeft: 20 , }}>
                               <LinearGradient
                colors={['rgb(55,137,48)', 'rgb(18,62,69)', 'rgb(7,37,78)']} style={{ borderRadius: 8, }}
            >
                                <TouchableOpacity  style={{ marginLeft: 20,height:50, paddingLeft: 2, width:300,justifyContent:'center', alignSelf:'center'}}
                                >
                       <Icon name="logo-instagram" style={{color:'white' ,justifyContent:'center', alignSelf:'center' , marginRight:20}}/>

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
