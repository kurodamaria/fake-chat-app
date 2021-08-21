import {StyleSheet, Text, View} from "react-native";
import {Avatar} from "./Avatar";
import * as React from "react";

export function ContactItem() {
  return <View style={styles.contactContainer}>
    <Avatar source={require("../illya.jpg")}/>
    <View style={styles.basicInfo}>
      <View style={styles.nameAndStatus}>
        <Text style={styles.userName}>Illya von Einzbern</Text>
        <Text style={styles.status} numberOfLines={1}>Want ice-cream🍦...</Text>
      </View>
      <View style={styles.onlineInfo}>
        <Text>[Online]</Text>
      </View>
    </View>
  </View>;
}
const styles = StyleSheet.create({
  contactContainer: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    padding: 5,
    width: '100%'
  },
  basicInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', marginLeft: 8
  },
  nameAndStatus: {
    justifyContent: 'space-around'
  },
  onlineInfo: {
    alignSelf: 'center'
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16
  },
  status: {
    fontSize: 12
  }
});
