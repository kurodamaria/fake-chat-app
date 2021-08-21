import {StyleSheet, Text, View} from "react-native";
import {Avatar} from "./Avatar";
import * as React from "react";

type ChatSentPropsT = {
  msg: string;
  uid: string;
}

export function ChatSent(props: ChatSentPropsT) {
  return <View style={styles.chatSent}>
    <Text style={styles.textMsgSent}>
      {props.msg}
    </Text>
    <Avatar source={require("../shirai.jpg")} height={40} width={40}/>
  </View>;
}

const styles = StyleSheet.create({
  chatSent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
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