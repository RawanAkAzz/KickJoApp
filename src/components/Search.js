import React, { Component } from "react";
import { ImageBackground, Dimensions, Text, ScrollView, View, TouchableOpacity, Image, AsyncStorage, RefreshControl, Keyboard, StatusBar, BackHandler, Alert, Platform, StyleSheet, TextInput } from "react-native";
import { CardItem, Card, Left, Right, Body, Container, Content, Drawer } from "native-base";
import { FlatGrid } from 'react-native-super-grid';

import { Actions } from "react-native-router-flux";
import * as homeAction from "../actions/homeAction";
import { connect } from "react-redux";
// import {strings} from "../../Locales/i18n";
import Header from "./header";
import Footer from './footerPage';

const IMAGE_BASE_URL = "https://bolisati1.qiotic.info/";
const dimensions = Dimensions.get("window");

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }




    render() {
        return (
            <View style={{ width: dimensions.width, height: "100%" }}
            >
                <Header openDrawer={this.openDrawer} closeDrawer={this.closeDrawer} />

                <StatusBar barStyle="light-content" />

                <Container >
                    <Content >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInput style={{ width: 380,  height: '120%', textAlign: 'center', borderWidth: 1, marginTop: 20, marginRight: 30, marginLeft: 20 }}/>   

                        </View>
               <Image source={require('../assests/images/search.png')} style={{ marginLeft: 90 , size:20 , height:10 , width:20 , marginLeft:350 , marginBottom:5}} />

                    </Content>
                    <Footer />

                </Container>
            </View>
        );
    }
}