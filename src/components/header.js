import React, { Component } from 'react';
import { Dimensions, Image, Platform, TouchableWithoutFeedback, View , TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Right, Title, Button, Text, Icon, CardItem } from 'native-base';
import { Actions } from "react-native-router-flux";
import { isLoggIn } from "../actions/authAction";
import { centerStyle, headerStyle, menuIcon } from '../theme';
import { LinearGradient } from 'expo-linear-gradient'

// import Icon from "react-native-vector-icons/FontAwesome";
const dimensions = Dimensions.get('window');
class HeaderPage extends Component {
  componentDidMount() {
    this.props.isLoggIn()
  }
  render() {
    const { user } = this.props;

    return (
      <View style={{backgroundColor:"#34395e"}}>
     <View style={{marginTop:20 , margnBottom:10 }}> 
       <LinearGradient
       colors={['rgb(7,37,78)','rgb(18,62,69)','rgb(55,137,48)']}
        style={{ padding: 15, alignItems: "center" , height:100}}

      >
         
        <Header style={headerStyle}  >

          <TouchableWithoutFeedback onPress={() => Actions.pop()}>

            <Left>
              <Icon
                name="md-arrow-back"
                style={{   
                color: "white",
                width: 20,
                height: 30,
                justifyContent: "center",
                marginRight: 20,
                margnBottom:400,
                marginLeft: 20 }}
              onPress={() => Actions.pop()}
              />
            </Left>
          </TouchableWithoutFeedback>
          {Platform.OS == "ios" ?
            <Body
              style={{
                justifyContent: "center",
                alignItems: "center",
                // marginTop: 120
              }}
            >
              <Image
                source={require("../assests/images/Kickjo.png")}
                style={{ height: 130, width: Dimensions.get('window').width/2.5, alignItems:'center', resizeMode: "contain", justifyContent: "center", marginTop: -30 }}
                />
            </Body>
            :
            <Body
              style={{
                justifyContent: "center",
                alignItems: "center",
                margnBottom: 40,
                marginLeft: 50,
                width: "100%"
              }}
            >
              <Image
                source={require("../assests/images/Kickjo.png")}
                style={{ height: 130, width: Dimensions.get('window').width/2.5, alignItems:'center', resizeMode: "contain", justifyContent: "center", margnBottom: 200 }}
              />
            </Body>
          }
          <Right>

<TouchableOpacity style={{width:50}} onPress={() => Actions.sideBar()}>
<Image
  source={require("../assests/images/menu.png")}
  style={{
    color: "white",
    width: 20,
    height: 20,
    justifyContent: "center",
    marginRight: 20,
    marginLeft: 20,
    marginTop:40
  }}
/>
</TouchableOpacity>
</Right>

        </Header>
      </LinearGradient>
      </View>
      </View>
    )
  }
}
// export default HeaderCustom;
const mapStateToProps = state => {
  const { user } = state.authReducer;


  return { user };
}
export default connect(mapStateToProps, { isLoggIn })(HeaderPage);