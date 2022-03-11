import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton, Avatar } from "react-native-paper";
import { DataTable } from 'react-native-paper';

const MemberList = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.child1}>
      <Text style={styles.nurseid}>FAMILY (SMART CARD) ID</Text>
        <Text style={styles.nurseid}>WHV001</Text>
        <Avatar.Image size={48} source={require("../assets/nurse.jpg")} />
      </View>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title >SNo</DataTable.Title>
        <DataTable.Title >Name</DataTable.Title>
        <DataTable.Title >Age</DataTable.Title>
        <DataTable.Title >Relation</DataTable.Title>
        <DataTable.Title >Action</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell >1</DataTable.Cell>
        <DataTable.Cell >Rohit</DataTable.Cell>
        <DataTable.Cell >26</DataTable.Cell>
        <DataTable.Cell >Self</DataTable.Cell>
        <DataTable.Cell ><IconButton icon='plus' onPress={()=>{navigation.navigate('Bpdetails')}}/></DataTable.Cell>
      </DataTable.Row>

    </DataTable>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  child1: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  nurseid: {
    marginHorizontal: 10,
  },
});
export default MemberList;
