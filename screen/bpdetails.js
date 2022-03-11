import React from "react";
import { View, Text, StyleSheet ,TouchableOpacity} from "react-native";
import { IconButton, Avatar,TextInput, Button ,Chip} from "react-native-paper";

const BPdetails = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.child1}>
      <Text style={styles.nurseid}>UHID Number</Text>
        <Text style={styles.nurseid}>U8001</Text>
        <Avatar.Image size={48} source={require("../assets/nurse.jpg")} />
      </View>
      <TextInput style={styles.input} label="SYSTOLIC" placeholder="in mmHG" mode="outlined" />
      <TextInput style={styles.input} label="DIASTOLIC" placeholder="in mmHG" mode="outlined" />
      <Button mode="contained" compact={true} onPress={() => console.log('Pressed')}>Submit</Button>
      <View style={styles.status}>
      <Text  >Status : </Text>
      <Text  style={styles.status2}>STAGE 2</Text>
      </View>
      <TouchableOpacity
      style={styles.refer}
      onPress={() => console.log('sms sent')}
    >
        <Text style={styles.text}>Refer to PHC</Text>
      <IconButton icon='hospital-building' size={32} />      
    </TouchableOpacity>
    <Button style={{position:'absolute',bottom:-80}} mode="contained" compact={true} onPress={() => navigation.navigate('BPhistory')}>View Medical History</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  child1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    width:280,
    margin: 10,
  },
  nurseid: {
    marginHorizontal: 10,
  },
  input: {
    height: 30,
    fontSize: 12,

    width: 280,
    marginVertical: 5,
  },
  refer: {
    height: 50,
    fontSize: 12,
    width: 180,
    marginVertical: 5,
    flexDirection:'row',
    justifyContent:"space-evenly",
    alignItems:'center',
    backgroundColor:'pink',
    borderRadius:5
  },
  status:{
    margin:15, flexDirection:'row',justifyContent:'space-around',alignItems:'center'
  },
  status2:{
      borderRadius:5,
      borderWidth:2,
      margin:5,
      padding:5,
      backgroundColor:'#ff66ff'
  }
});
export default BPdetails;
