import React, { Component } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Dimensions, Image , StyleSheet, } from 'react-native';
import { Left, Right, List, ListItem, Icon,Container , Content} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient'
import { Actions } from 'react-native-router-flux';
import SwitchToggle from 'react-native-switch-toggle';
import Footer from './footerPage';


const dimensions = Dimensions.get("window");
 export default class Search extends Component {
  constructor(props) {
    super(props);
  
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
      <LinearGradient  style={{ width: dimensions.width, height: "100%", }}colors={['rgb(55,137,48)', 'rgb(18,62,69)', 'rgb(7,37,78)']} >
     
          <Container style={{ backgroundColor: "transparent" }}>
            <Content style={{ backgroundColor: "transparent" }}>
            <View >
             <Image style={{ marginTop: 20, marginLeft: 30 }} source={require('../assests/images/left.png')} />
           </View>
            <View style={{}}>
          <Text style={{ fontSize: 32, marginBottom: 400, fontFamily: 'AnyelirScriptBoldItalic', alignSelf: 'center', lineHeight: 49, color: 'white' }}>
            Settings
                      </Text>
        </View>
        <View>
          <List style={{ marginTop: -300, height: 90, marginRight: 20 }}>
            <ListItem>
              <View style={{ flexDirection: "row", }}>
                <Left>
                  <Image source={require('../assests/images/profile.png')} style={{ marginLeft: 10 }} />


                  <Text style={{ justifyContent: 'center', color: "white", lineHeight: 20, fontSize: 12, marginLeft: 10, alignSelf: 'left' }}>Account</Text>
                </Left>
                <Right>
                  <Text style={{ justifyContent: 'center', color: "white", lineHeight: 14, fontSize: 12, marginLeft: 30, alignSelf: 'left' }}>Email</Text>
                </Right>
              </View>
            </ListItem>
            <ListItem style={{ height: 80 }}>
              <View style={{ flexDirection: "row" }}>
                <Left>
                  <Image source={require('../assests/images/profile.png')} style={{ marginLeft: 10 }} />


                  <Text style={{ justifyContent: 'center', color: "white", lineHeight: 20, fontSize: 12, marginLeft: 10, alignSelf: 'left' }}>Language</Text>
                </Left>
                <Right>
                  <Text style={{ justifyContent: 'center', color: "white", lineHeight: 14, fontSize: 12, marginLeft: 30, alignSelf: 'left', }}>English</Text>
                </Right>
              </View>
            </ListItem>
            <ListItem style={{ height: 80 }}>
              <View style={{ flexDirection: "row", }}>
                <Left>
                  <Image source={require('../assests/images/profile.png')} style={{ marginLeft: 10 }} />


                  <Text style={{ justifyContent: 'center', color: "white", lineHeight: 20, fontSize: 12, marginLeft: 10, alignSelf: 'left' }}>Notifications</Text>
                </Left>
                  
                  <View >
                   {/* <Right>  */}
                     <SwitchToggle
                      switchOn={this.state.switchOn1}
                      onPress={this.onPress1}
                      circleColorOn	='white'
                      backgroundColorOn='green'

                    />
                      
                     {/* </Right> */}
                    </View>
                               
                              
              </View>
                          </ListItem>
                                    
                      </List>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent:'flex-start', marginRight:30}}>
                
                  <Image source={require('../assests/images/profile.png')} style={{ marginLeft: 10 }} />
                  <Text style={{ justifyContent: 'center', color: "white", lineHeight: 20, fontSize: 12, marginLeft: 30, alignSelf: 'left' }}>Privacy</Text>
                 
                
                 
              </View>

              
            </Content>
            <Footer />

          </Container>
        {/* </Drawer> */}
      </LinearGradient>
    );
  }
  onPress1 = () => {
    this.setState({ switchOn1: !this.state.switchOn1 });
  }
}
// export default Home
const drawerStyles = {
  drawer: { shadowOpacity: 0, elevation: 0 },
  main: { shadowOpacity: 0, elevation: 0 }
};


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
     
  },
});