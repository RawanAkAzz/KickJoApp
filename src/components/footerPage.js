import React, { Component } from 'react';
import {Dimensions,Image,Platform} from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Right, Title, Button, Text,Icon, CardItem ,Footer,FooterTab} from 'native-base';
import { Actions} from "react-native-router-flux";
import { isLoggIn } from "../actions/authAction";
import {centerStyle,headerStyle,menuIcon} from '../theme';

// import Icon from "react-native-vector-icons/FontAwesome";
const dimensions=Dimensions.get('window');
class footerPage extends Component {
 
    render(){
      const {user}=this.props;

        return(
            
            <Footer> 
                   {Platform.OS == "ios" ?
            <FooterTab style={{backgroundColor:"white" , height:'150%'}}>
              <Button vertical>
               <Image source={require('../assests/images/1.png')}/>
              </Button>
              <Button vertical>
              <Image source={require('../assests/images/2.png')}/>
              </Button>
              <Button vertical>
              <Image source={require('../assests/images/3.png')}/>
                 </Button>
                 <Button vertical>
              <Image source={require('../assests/images/4.png')}/>
                 </Button>
                 <Button vertical>
              <Image source={require('../assests/images/5.png')}/>
                 </Button>
                 
            </FooterTab>
                   :
                   <FooterTab style={{backgroundColor:"white"  , height:"170%" }}>
              <Button vertical>
               <Image source={require('../assests/images/1.png')}/>
              </Button>
              <Button vertical>
              <Image source={require('../assests/images/2.png')}/>
              </Button>
              <Button vertical>
              <Image source={require('../assests/images/3.png')}/>
                 </Button>
                 <Button vertical>
              <Image source={require('../assests/images/4.png')}/>
                 </Button>
                 <Button vertical>
              <Image source={require('../assests/images/5.png')}/>
                 </Button>
                 
            </FooterTab>
                   }
          </Footer>
        )
    }
}
// export default HeaderCustom;
const mapStateToProps = state =>
{
  const { user } = state.authReducer;


  return { user};
}
export default connect(mapStateToProps,{isLoggIn})(footerPage);