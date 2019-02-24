import React, { Component } from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import Icons from "react-native-vector-icons/Ionicons";

import { Colors, Icon } from "../assets/styleConstant";

import Home from "../screens/Home";
import Videos from "../screens/Videos/Videos";

const AppMaterialBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Homes",
        tabBarIcon: ({ tintColor }) => (
          <Icons color={tintColor} name="ios-home" size={30} />
        )
      }
    },
    Videos: {
      screen: Videos,
      navigationOptions: {
        tabBarLabel: "Videos",
        tabBarIcon: ({ tintColor }) => (
          <Icons color={tintColor} name={Icon.VIDEO} size={30} />
        )
      }
    }
  },
  {
    initialRouteName: "Videos",
    // order: ["Profile", "Home"],
    activeTintColor: Colors.themeGreen,
    inactiveTintColor: Colors.darkGrey,
    shifting: true,
    barStyle: {
      backgroundColor: Colors.black
    }
  }
);

const MaterialBottomContainer = createAppContainer(
  AppMaterialBottomTabNavigator
);

export default MaterialBottomContainer;
