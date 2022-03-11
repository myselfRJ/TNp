import React ,{useState}from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { IconButton, List, Switch, TextInput } from "react-native-paper";


const Member = ({navigation}) => {  
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'A', value: 'apple'},
      {label: 'B', value: 'banana'}
    ]);
  return (
    // <ScrollView>
      <View style={styles.main}>
        <TextInput
          style={styles.input}
          label="Name"
          mode="outlined"
        />
        <TextInput
          style={styles.input}
          label="Date of Birth in DD/MM/YYYY"
          mode="outlined"
        />
        <View style={{ width: 280 }}>
          <Text style={styles.text}>Gender</Text>
          <View style={styles.gender}>
            <IconButton size={28} style={{backgroundColor:'lightblue'}} icon="gender-male" />
            <IconButton size={28} style={{backgroundColor:'pink'}} icon="gender-female" />
            <IconButton size={28} style={{backgroundColor:'yellow'}} icon="gender-male-female" />
          </View>
        </View>
        <TextInput style={styles.input} label="Relationship with Family Head" mode="outlined" />
        <TextInput style={styles.input} label="UHID Number" mode="outlined" />
        <View style={styles.donor}>
           <DropDownPicker style={styles.blood}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Blood Group"
      containerStyle={{width:140}}
    />
          <View>
          <Text style={styles.text}>Willing to donate</Text>
          <Switch value={true} onValueChange={() => console.log("hello")} />
        </View>
        </View>
        <IconButton style={{position:'absolute',right:25,bottom:45}}icon="plus-circle" size={48} onPress={()=>navigation.navigate('Member')} />
        <IconButton style={{marginTop:54}}icon="arrow-right-circle" size={48} onPress={()=>navigation.navigate('MList')} />
      </View>


  );
};
const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 30,
    fontSize: 12,

    width: 280,
    marginVertical: 5,
  },
  gender: {
    height: 40,
    marginVertical:5,
    flexDirection: "row",
  },
  donor: {
    flexDirection: "row",
    width: 280,
    marginVertical: 5,
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "700",
  },
  blood: {
    justifyContent: "center",
    height:30,
    borderRadius:2.5,
    marginVertical:2.5

  },
});
export default Member;
