import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton, Avatar } from "react-native-paper";
import HomeTck from "../components/hometck";

const Enter = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.child1}>
        <Avatar.Image size={48} source={require("../assets/nurse.jpg")} />
        <Text style={styles.nurseid}>WHV001</Text>
      </View>
      <HomeTck
        navigation={navigation}
        icon="account-group"
        text="Add New Family"
      />
      <HomeTck
        navigation={navigation}
        icon="account-plus"
        text="Add New Member"
      />
      <HomeTck
        navigation={navigation}
        icon="file-document-edit"
        text="Add Medical History"
      />
      <HomeTck
        navigation={navigation}
        icon="account"
        text="Hypertension Screening"
      />
      <HomeTck
        navigation={navigation}
        icon="heart-pulse"
        text="Assesment/Treatment"
      />
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
export default Enter;
