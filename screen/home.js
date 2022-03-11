import React from 'react';
import { View,Text } from "react-native"
import { Button, TextInput } from 'react-native-paper';


const  Home=({route,navigation})=>{

    return(
        <View >
            <TextInput placeholder='email'></TextInput>
            <Button mode='contained'  style={{width:100,height:40,borderRadius:5}}onPress={()=>navigation.navigate('Enter')}>Next</Button>
        </View>
    )
}
export default  Home;