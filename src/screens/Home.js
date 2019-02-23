import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text> Home </Text>
        <Button
          title="Go to Videos"
          onPress={() => this.props.navigation.navigate("Videos")}
        />
      </View>
    );
  }
}
