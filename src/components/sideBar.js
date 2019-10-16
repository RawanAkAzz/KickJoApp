import React, {Component} from 'react';
import {Text, SafeAreaView, View ,TouchableOpacity ,Dimensions , Image , ScrollView, Platform} from 'react-native';
import { Left, Right, List, ListItem, Icon , } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient'
import { Actions } from 'react-native-router-flux';



export default class SideBar extends Component {
    render() {
        return (
         
         
          <View style={{height:"100%",  width:Dimensions.get('window').height/1, marginLeft:-10,borderWidth:0 , drawerWidth:"30%", marginBottom:40, backgroundColor:"white"}}>
            <View style={{flexDirection:"row",marginTop:Dimensions.get('window').height/10, width:Dimensions.get('window').width/1.04, justifyContent:'space-between'}}>
         
                          {/* {Platform.OS==='ios'  ? */}
                         <Image source={require('../assests/images/Artboard33.png')} style={{ marginLeft:Dimensions.get('window').height/35}}/> 
                         <View></View>
                    <Text style={{fontSize:"35px" ,  marginRight:Dimensions.get('window').height/3 , marginTop:17}}> 
                       Name
                </Text>
                 </View> 
             

<ScrollView>
           <SafeAreaView style={{backgroundColor:'#fff', width:200 ,marginBottom:Dimensions.get('window').height/3}}>
               <View style={{flexDirection:'row'}}> 
                     
           
                        <TouchableOpacity style={{height:"100%",width:"100%" ,marginTop:50 , flexDirection:"row", justifyContent:'center' }} onPress={() => Actions.Profile()
                  
                    }>
                     
                    <Left style={{marginLeft:20}}>
                        <Image source={require('../assests/images/profile.png')}/>
                     </Left>
                      <Right>
                            <Text style={{justifyContent:'center', color:"4A4A4A", fontSize:'19px' , marginLeft:Dimensions.get('window').height/1.20,width:Dimensions.get('window').width/2.90,}}>My Profile</Text>
                         </Right> 
                      </TouchableOpacity>
                   </View>
                   <View style={{flexDirection:'row'}}> 
                     
           
                     <TouchableOpacity style={{height:"100%",width:"100%" ,marginTop:50 , flexDirection:"row", justifyContent:'center' }} onPress={() => Actions.RegisterApp()
                 }>
                  
                 <Left style ={{marginLeft:20}}>
                 <Image source={require('../assests/images/arrw.png')}/>
                  </Left>
                   <Right>
                         <Text style={{justifyContent:'center', color:"4A4A4A", fontSize:'19px' ,width:Dimensions.get('window').width/2, marginRight:-70,}}>Previous Reservation</Text>
                      </Right> 
                   </TouchableOpacity>
                </View>
                       
                <View style={{flexDirection:'row'}}> 
                     
           
                     <TouchableOpacity style={{height:"100%",width:"100%" ,marginTop:50 , flexDirection:"row", justifyContent:'center' }} onPress={() => Actions.Register()
                 }>
                  
                 <Left style ={{marginLeft:20}}> 
                 <Image source={require('../assests/images/msg.png')}/>
                  </Left>
                   <Right>
                         <Text style={{justifyContent:'center', color:"4A4A4A", fontSize:'19px' ,width:Dimensions.get('window').width/2.90,}}>FAQ</Text>
                      </Right> 
                   </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}> 
                     
           
                     <TouchableOpacity style={{height:"100%",width:"100%" ,marginTop:50 , flexDirection:"row", justifyContent:'center' }} onPress={() => Actions.Setting()
                 }>
                  
                 <Left style ={{marginLeft:20}}>
                 <Image source={require('../assests/images/setting.png')}/>
                  </Left>
                   <Right>
                         <Text style={{justifyContent:'center', color:"4A4A4A", fontSize:'19px' , width:Dimensions.get('window').width/2.90}}> Settings</Text>
                      </Right> 
                   </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}> 
                     
           
                     <TouchableOpacity style={{height:"100%",width:"100%" ,marginTop:50 , flexDirection:"row", justifyContent:'center' }} onPress={() => Actions.VerifyNumber()
                 }>
                  
                 <Left style ={{marginLeft:20}}> 
                 <Image source={require('../assests/images/pls.png')} />
                  </Left>
                   <Right>
                         <Text style={{justifyContent:'center', color:"4A4A4A", fontSize:'19px' , width:Dimensions.get('window').width/2.90}}>Add Venue</Text>
                      </Right> 
                   </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}> 
                     
           
                     <TouchableOpacity style={{height:"100%",width:"100%" ,marginTop:50 , flexDirection:"row", justifyContent:'center' }} onPress={() => Actions.Filter()
                 }>
                  
                 <Left style ={{marginLeft:20}}>
                 <Image source={require('../assests/images/doc.png')}/>
                  </Left>
                   <Right>
                         <Text style={{justifyContent:'center', color:"4A4A4A", fontSize:'19px' , width:Dimensions.get('window').width/2, marginRight:-60}}>Terms And Conditions</Text>
                      </Right> 
                   </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}> 
                     
           
                     <TouchableOpacity style={{height:"100%",width:"100%" ,marginTop:50 , flexDirection:"row", justifyContent:'center' }} onPress={() => Actions.Thank()
                 }>
                  
                 <Left style ={{marginLeft:20}}> 
                 <Image source={require('../assests/images/msg2.png')}/>

                </Left>
                   <Right>
                         <Text style={{justifyContent:'center', color:"4A4A4A", fontSize:'19px' , width:Dimensions.get('window').width/2.90}}>Contact Us</Text>
                      </Right> 
                   </TouchableOpacity>
                </View>
                       
            </SafeAreaView>
             </ScrollView> 
            </View>
        
        );
    }
}




{/* <View style={{height:"100%", width:"100%", marginLeft:-10,borderWidth:0 , drawerWidth:"30%", marginBottom:40, backgroundColor:"white"}}>
<View>
    <Text style={{marginLeft:100,fontSize:36}}>
        Name
    </Text>
</View>

<SafeAreaView style={{backgroundColor:'#fff', width:200}}>
   <View style={{flexDirection:'row'}}> 
         

            <TouchableOpacity style={{height:"100%",width:"100%" ,marginTop:50 , flexDirection:"row", justifyContent:'center' }} onPress={() => Actions.Profile()
      
        }>
         
        <Left>
            <Image source={require('../assests/images/profile.png')} style ={{marginLeft:60}}/>
         </Left>
          <Right>
                <Text style={{justifyContent:'center', color:"4A4A4A", fontSize:'19px' , marginRight:30}}>My Profile</Text>
             </Right> 
          </TouchableOpacity>
       </View>
       <View style={{flexDirection:'row'}}> 
         

         <TouchableOpacity style={{height:"100%",width:"100%" ,marginTop:50 , flexDirection:"row", justifyContent:'center' }} onPress={() => Actions.RegisterApp()
     }>
      
     <Left>
     <Image source={require('../assests/images/arrw.png')}style ={{marginLeft:60}}/>
      </Left>
       <Right>
             <Text style={{justifyContent:'center', color:"4A4A4A", fontSize:'19px' , marginRight:30}}>Previous Reservation</Text>
          </Right> 
       </TouchableOpacity>
    </View>
           
    <View style={{flexDirection:'row'}}> 
         

         <TouchableOpacity style={{height:"100%",width:"100%" ,marginTop:50 , flexDirection:"row", justifyContent:'center' }} onPress={() => Actions.Register()
     }>
      
     <Left>
     <Image source={require('../assests/images/msg.png')} style ={{marginLeft:60}}/>
      </Left>
       <Right>
             <Text style={{justifyContent:'center', color:"4A4A4A", fontSize:'19px' , marginRight:55}}>FQA</Text>
          </Right> 
       </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row'}}> 
         

         <TouchableOpacity style={{height:"100%",width:"100%" ,marginTop:50 , flexDirection:"row", justifyContent:'center' }} onPress={() => Actions.Setting()
     }>
      
     <Left>
     <Image source={require('../assests/images/setting.png')}style ={{marginLeft:60}} />
      </Left>
       <Right>
             <Text style={{justifyContent:'center', color:"4A4A4A", fontSize:'19px' , marginRight:40}}> Settings</Text>
          </Right> 
       </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row'}}> 
         

         <TouchableOpacity style={{height:"100%",width:"100%" ,marginTop:50 , flexDirection:"row", justifyContent:'center' }} onPress={() => Actions.VerifyNumber()
     }>
      
     <Left>
     <Image source={require('../assests/images/pls.png')} style ={{marginLeft:60}}/>
      </Left>
       <Right>
             <Text style={{justifyContent:'center', color:"4A4A4A", fontSize:'19px' , marginRight:40}}>Add Venue</Text>
          </Right> 
       </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row'}}> 
         

         <TouchableOpacity style={{height:"100%",width:"100%" ,marginTop:50 , flexDirection:"row", justifyContent:'center' }} onPress={() => Actions.Filter()
     }>
      
     <Left>
     <Image source={require('../assests/images/doc.png')} style ={{marginLeft:60}}/>
      </Left>
       <Right>
             <Text style={{justifyContent:'center', color:"4A4A4A", fontSize:'19px' , marginRight:30}}>Terms And Conditions</Text>
          </Right> 
       </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row'}}> 
         

         <TouchableOpacity style={{height:"100%",width:"100%" ,marginTop:50 , flexDirection:"row", justifyContent:'center' }} onPress={() => Actions.Thank()
     }>
      
     <Left>
     <Image source={require('../assests/images/msg2.png')} style ={{marginLeft:60}}/>

      </Left>
       <Right>
             <Text style={{justifyContent:'center', color:"4A4A4A", fontSize:'19px' , marginRight:30}}>Contact Us</Text>
          </Right> 
       </TouchableOpacity>
    </View>
           
</SafeAreaView> */}

