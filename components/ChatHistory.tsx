import {StyleSheet, Text, View} from "react-native";
import {Avatar} from "./Avatar";
import * as React from "react";

type ContactHistoryItemPropsT = {
  uid: string;
}

// retrieve last contact info from props.uid and display it
export function ChatHistory(props: ContactHistoryItemPropsT) {
  return (
    <View style={styles.chartContainer}>
      <Avatar source={require("../shirai.jpg")} height={50} width={50}/>
      <View style={styles.chartMetaContainer}>
        <View style={styles.snippetContainer}>
          <Text style={styles.contactor}>Kuroko</Text>
          <Text style={styles.lastTime}>12 Mins ago</Text>
        </View>
        <View style={styles.lastContactContainer}>
          <Text style={styles.lastMessage} numberOfLines={1}>
            The guy we meet this morning was suspicious, I've decided to check him out after school.
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 6,
    width: '100%',
    backgroundColor: 'lightblue',
    marginBottom: 5
  },
  chartMetaContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
    paddingLeft: 4,
  },
  snippetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lastContactContainer: {},
  contactor: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5
  },
  lastMessage: {
    fontSize: 12,
    letterSpacing: 0.3
  },
  lastTime: {
    fontSize: 10,
    alignSelf: 'center'
  }
});