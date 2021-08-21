import * as React from "react";
import {Image, ImageSourcePropType, StyleSheet, View} from "react-native";

type AvatarPropsT = {
  source: ImageSourcePropType;
  height: number | string;
  width: number | string;
}

export function Avatar(props: AvatarPropsT) {
  return (
    <View style={[styles.userIconContainer, {height: props.height, width: props.width}]}>
      <Image style={[styles.userIcon, {height: props.height, width: props.width}]} source={props.source}/>
    </View>
  )
}

const styles = StyleSheet.create({
  userIconContainer: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userIcon: {
  }
})