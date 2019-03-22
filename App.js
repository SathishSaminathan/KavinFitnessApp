import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  PermissionsAndroid
} from "react-native";
import SplashScreen from "react-native-splash-screen";

import AppContainer from "./src/navigation/AppStackNavigation";
import TabAppContainer from "./src/navigation/AppTabNavigation";
import MaterialBottomContainer from "./src/navigation/AppMaterialBottomTabNavigator";
import Colors from "./src/assets/styleConstant/Colors";
import KPageLoader from "./src/components/KPageLoader";

class App extends Component {
  state = {
    Granted: false
  };
  componentWillMount() {
    this.requestLocationPermission();
  }

  async requestLocationPermission() {
    try {
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Example App",
          message: "Example App access to your location "
        }
      );
      console.log("Granted...", granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({ Granted: true }, () => console.log(this.state.Granted));
        SplashScreen.hide();
      } else {
        this.setState({ Granted: false }, () =>
          console.log(this.state.Granted)
        );
      }
    } catch (err) {
      console.warn(err);
    }
  }

  componentDidMount() {}

  render() {
    const { Granted } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.themeGreen}
          barStyle="dark-content"
        />
        {Granted ? <MaterialBottomContainer /> : <KPageLoader />}
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
