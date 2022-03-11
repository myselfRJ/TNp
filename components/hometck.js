import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";

const HomeTck = (props) => {
  return (
    <TouchableOpacity
      style={styles.child}
      onPress={() => props.navigation.navigate("Familydetails")}
    >
      <IconButton icon={props.icon} size={48} />

      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  child: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 70,
    backgroundColor: "#f2f35f",
    margin: 5,
  },
  text: {
    fontWeight: "700",
  },
});
export default HomeTck;
