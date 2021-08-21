import * as React from 'react'
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import {RefObject, useRef, useState} from "react";
import {ChatSent} from "./components/ChatSent";
import {ChatReceived} from "./components/ChatReceived";

function ofN(n: number, component: React.ReactNode) {
  return (
    <>
      {
        [...Array(n)].map(() => <>{component}</>)
      }
    </>
  )
}

export default function App() {
  const inputMsg = useRef<string>()
  const [chatSent, setChatSent] = useState<string[]>([])
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1,  width: '100%'} }>
        {
          chatSent.map((msg, index) => {
           if (index % 2) {
             return (
               <ChatSent msg={msg} uid='blahblah'/>
             )
           } else {
             return (
               <ChatReceived msg={msg} uid='blahblah'/>
             )
           }
          })
        }
      </ScrollView>
      <View style={styles.chatComposeContainer}>
        <TextInput style={styles.msgInput} onChangeText={(text) => {
          inputMsg.current = text
        }}/>
        <Button title='Send' onPress={() => {
          if (inputMsg.current) {
            setChatSent([...chatSent, inputMsg.current])
          }
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatComposeContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  msgInput: {
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    borderColor: 'black',
    flex: 1
  },
  button: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 2333333
  }
});
