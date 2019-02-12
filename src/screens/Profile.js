import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Profile extends Component {
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
        <Text> Profile </Text>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go to Top"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}
