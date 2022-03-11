import React from'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screen/home'
import Enter from '../screen/entry'
import Member from '../screen/member'
import FamilyDetails from '../screen/familydetail'
import BPdetails from '../screen/bpdetails'
import BPhistory from '../screen/bppasthistory'
import MemberList from '../screen/memberlist';
const Main =createNativeStackNavigator()
const  Mainstack=()=>{


    return(
        <Main.Navigator initialRouteName='home'>

               <Main.Screen name='home' component={Home}/>
               <Main.Screen name='Enter' component={Enter}/>
               <Main.Screen name='Member' component={Member}/>
               <Main.Screen name='Familydetails' component={FamilyDetails}/>
               <Main.Screen name='Bpdetails' component={BPdetails}/>
               <Main.Screen name='BPhistory' component={BPhistory}/>
               <Main.Screen name='MList' component={MemberList}/>


        </Main.Navigator>
    )
}
export default Mainstack;