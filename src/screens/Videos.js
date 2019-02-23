import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Videos </Text>
      </View>
    );
  }
}
