import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import Colors from "../assets/styleConstant/Colors";

export default class KPageLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          animating={true}
          color={Colors.themeGreen}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
    backgroundColor: Colors.black
  }
});
