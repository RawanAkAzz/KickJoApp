import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import FirstPage from './components/firstPage';
import Home from './components/home';
import SubCategory from './components/subCategory'
import SubCategoryChoices from './components/subCategoryChoices';
import BookNow from './components/BookNow';
import {Content, Drawer} from "native-base";
import { connect } from "react-redux";
import SideBar from './components/sideBar';
import home from './components/home';
import sideBar from './components/sideBar';
import subCategory from './components/subCategory';
import COACHES from './components/COACHES';
import Register from './components/Register';
import { AsyncStorage } from 'react-native';
import Stadiums from './components/Stadiums';
import RegisterApp from './components/RegisterApp';
import Setting from './components/Setting';
import StadiumDesc from './components/StadiumDesc';
import Search from './components/Search';
import CoachesDesc from './components/CoachesDesc';
import Thank from './components/Thank';
import Filter from './components/Filter';
import Profile from './components/Profile';
import VerifyNumber from './components/VerifyNumber';


// const RouterController = props => {
class RouterController extends Component {
  state = {
    isUserLogin: false
  }
  componentDidMount() {
    AsyncStorage.getItem('user', (err, result) => {
      if (result != null) {
        this.setState({ isUserLogin: true });
      }
      else {
        this.setState({ isUserLogin: false })
      }

    });
  }
  authenticate = () => {
    this.state.isUserLogin ? true : false
  }
  render() {
    return (
      <Router
        navigationBarStyle={{ backgroundColor: "#fff" }}
      >
        {/* <Scene key="root" hideNavBar="hideNavBar" > */}
          <Scene key="Bolisati">
            <Scene
              key="Launch"
              component="Launch"
              initial
              on={this.authenticate}
              success="Home"
              failure="FirstPage"
            />
            <Scene
              key="firstpage"
              component={FirstPage}
              title=""
              hideNavBar
              initial={!this.state.isUserLogin}

            />
            <Scene
              key="home"
              component={Home}
              title=""
              hideNavBar
              initial={this.state.isUserLogin}
           
            />
            <Scene key="root" hideNavBar>
                    <Drawer
                    type='overlay'
                    style={{width:50,backgroundColor:'red'}}
                        open={false}
                        backgroundColor="green"
                        key="drawer"
                        hideNavBar
                        openDrawerOffset={100}
                        tweenDuration={100}
                        contentComponent={SideBar}
                      //   drawerWidth={60}
                      // shadowOpacity={0}
                      //  elevation={0} 
                      //     main= {shadowOpacity= 0, elevation= 0}
                    >
                        <Scene key="rootScene" hideNavBar>
                            <Scene key="home" component={home} />
                            <Scene key="subCategory" component={subCategory} />
                        </Scene>
                    </Drawer>
                </Scene>
            <Scene
              key="subcategory"
              component={SubCategory}
              title=""
              hideNavBar
            />
            <Scene
              key="subcategorychoices"
              component={SubCategoryChoices}
              title=""
              hideNavBar
            />
           

            <Scene
              key="BookNow"
              component={BookNow}
              title=""
              hideNavBar
            />


            <Scene
              key="sideBar"
              component={sideBar}
              title=""
              hideNavBar
            />
             
             <Scene
              key="Setting"
              component={Setting}
              title=""
              hideNavBar
            />

          {/* </Scene> */}
          <Scene
              key="COACHES"
              component={COACHES}
              title=""
              hideNavBar
            />
            <Scene
              key="Register"
              component={Register}
              title=""
              hideNavBar
            />
              <Scene
              key="VerifyNumber"
              component={VerifyNumber}
              title=""
              hideNavBar
            />
             <Scene
              key="Stadiums"
              component={Stadiums}
              title=""
              hideNavBar
            />
             <Scene
              key="StadiumDesc"
              component={StadiumDesc}
              title=""
              hideNavBar
            />
              <Scene
              key="Search"
              component={Search}
              title=""
              hideNavBar
            />
               <Scene
              key="Search"
              component={Search}
              title=""
              hideNavBar
            />
          
            <Scene
              key="RegisterApp"
              component={RegisterApp}
              title=""
              hideNavBar
           
            />
             <Scene
              key="CoachesDesc"
              component={CoachesDesc}
              title=""
              hideNavBar
           
            />
           <Scene
              key="Thank"
              component={Thank}
              title=""
              hideNavBar
           
            />
            <Scene
              key="Filter"
              component={Filter}
              title=""
              hideNavBar
           
            />
               <Scene
              key="Profile"
              component={Profile}
              title=""
              hideNavBar
           
            />
        </Scene>
      </Router>
    );
  }
};

// export default RouterController;
export default RouterController;