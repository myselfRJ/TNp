import React ,{useState}from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton, Avatar ,DataTable } from "react-native-paper";
import DropDownPicker from 'react-native-dropdown-picker';

const BPhistory = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Blood Pressure', value: 'apple'},
      {label: 'Sugar Level', value: 'banana'}
    ]);
  return (
    <View style={styles.main}>
      <View style={styles.child1}>
      <Text style={styles.nurseid}>UHID</Text>
        <Text style={styles.nurseid}>U87001</Text>
        <Avatar.Image size={48} source={require("../assets/nurse.jpg")} />
      </View>
      <View style={styles.donor}>
      <Text style={styles.nurseid}>TREND ANALYSIS  </Text>
           <DropDownPicker style={styles.blood}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Blood Pressure"
      containerStyle={{width:120}}
    />
    </View>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title >SNo</DataTable.Title>
        <DataTable.Title >Date</DataTable.Title>
        <DataTable.Title >Systolic</DataTable.Title>
        <DataTable.Title >Diastolic</DataTable.Title>
        <DataTable.Title >Status</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell >1</DataTable.Cell>
        <DataTable.Cell >26/03/2022</DataTable.Cell>
        <DataTable.Cell >120</DataTable.Cell>
        <DataTable.Cell >80</DataTable.Cell>
        <DataTable.Cell ><View style={{height:32,width:32,borderRadius:16,backgroundColor:'lightgreen'}}></View></DataTable.Cell>
      </DataTable.Row>

    </DataTable>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    margin: 10,
    alignItems:'center'
  },
  child1: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    width:280,
    justifyContent:'space-around'
  },
  nurseid: {
    marginHorizontal: 10,
  },
  donor: {
    flexDirection: "row",
    width: 280,
    marginVertical: 5,
    justifyContent: "center",
    alignItems:'center',
  },
});
export default BPhistory;
