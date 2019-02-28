import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import AppContainer from "./src/navigation/AppStackNavigation";
import TabAppContainer from "./src/navigation/AppTabNavigation";
import MaterialBottomContainer from "./src/navigation/AppMaterialBottomTabNavigator";
import Colors from "./src/assets/styleConstant/Colors";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.themeGreen}
          barStyle="dark-content"
        />
        <AppContainer />
        {/* <TabAppContainer/> */}
        {/* <MaterialBottomContainer /> */}
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "lightblue"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
