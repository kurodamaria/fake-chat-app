import {StyleSheet, Text, View} from "react-native";
import {Avatar} from "./Avatar";
import * as React from "react";

type ChatReceivedPropsT = {
  msg: string;
  uid: string;
}

export function ChatReceived(props: ChatReceivedPropsT) {
  return <View style={styles.chatReceived}>
    <Avatar source={require("../illya.jpg")} height={40} width={40}/>
    <Text style={styles.textMsgSent}>
      {props.msg}
    </Text>
  </View>;
}

const styles = StyleSheet.create({
  chatReceived: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  textMsgSent: {
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 18,
    fontSize: 15,
    borderRadius: 10,
    padding: 11,
    borderColor: 'black',
    borderWidth: 1,
    maxWidth: '72%',
  }
});