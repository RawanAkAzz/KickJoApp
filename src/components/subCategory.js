import React, {Component} from "react";
import {ImageBackground,Dimensions,Text,ScrollView,View,TouchableOpacity,Image,AsyncStorage,RefreshControl,Keyboard,StatusBar,BackHandler,Alert,Platform,StyleSheet} from "react-native";
import {CardItem,Card,Left,Right,Body,Container,Content,Drawer} from "native-base";
import { FlatGrid } from 'react-native-super-grid';

import {Actions} from "react-native-router-flux";
import * as homeAction from "../actions/homeAction";
import {connect} from "react-redux";
// import {strings} from "../../Locales/i18n";
import Header from "./headerWithoutArrow";
import Footer from './footerPage';

const IMAGE_BASE_URL = "https://bolisati1.qiotic.info/";
const dimensions = Dimensions.get("window");
class SubCategory extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
    setTimeout(() => Keyboard.dismiss());
  };
  changeColor = Color => {
    this.setState({ Color });
  };

  getColor = index => {
    const { Color } = this.state;
    if (index === Color) return "green";
    return "white";
  };


 
  render() {
    const { lang} = this.props;
    const items = [
        { img:require("../assests/images/1.png"), name: 'Volleyball'},
        {img:require("../assests/images/1.png"), name: 'EMERALD',  },
        {img:require("../assests/images/1.png"), name: 'Football', }, 
        {img:require("../assests/images/1.png"), name: 'Tennis' },
        {img:require("../assests/images/1.png"), name: 'Basketball' }, 
        { img:require("../assests/images/1.png"),name: 'Racing' }, 
        { img:require("../assests/images/1.png"),name: 'Swimming Pools' }, 
        { img:require("../assests/images/1.png"),name: 'Racing' }, 
        // { img:require("../assests/images/1.png"),name: 'Racing' }, 
        // { img:require("../assests/images/1.png"),name: 'Racing' }, 

    
      ];
    return (
      // <ScrollView ref={(ref)=> {this._scrollView = ref}}>
       <ImageBackground source={require('../assests/images/Background.png')} style={{ width:"100%", height:Dimensions.get('window').height/1.04 }}>

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
       
            <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        style={{    marginTop:20}}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={()=>Actions.COACHES()}>
          <View style={styles.itemContainer}>
         <Image source={item.img} style={styles.itemImage}/>   
         <Text style={styles.itemName}>{item.name}</Text>
            
          </View>
          </TouchableOpacity>
        )}
      />
           
            </Content>
            <Footer/>

          </Container>
        </Drawer>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    gridView: {
      marginTop: 20,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'center',
      borderRadius: 5,
      padding: 10,
      backgroundColor:"white",
      height: 140,
      flexDirection:"column",
    
    },
    itemName: {
      fontSize: 16,
      color: 'black',
      fontWeight: '600',
      alignSelf:'center',
      // marginTop:90,
      paddingTop:90
    },
    itemImage: {
      // fontWeight: '600',
      fontSize: 12,
      // color: '#fff',
      alignSelf:'center',
      justifyContent:"center",
      alignItems:"center",
      marginBottom:-60
      // width:"100%",
      // height:Dimensions.get('window').height/8,
    },
  });
// export default Home
const drawerStyles = {
  drawer: {shadowOpacity: 0, elevation: 0},
  main: {shadowOpacity: 0, elevation: 0}
};
// START MAP STATE TO PROPS
const mapStateToProps = state => {
  const {lang} = state.sideBarReducer;

  return { lang};
};
// END MAP STATE TO PROPS

export default connect(mapStateToProps,homeAction)(SubCategory);