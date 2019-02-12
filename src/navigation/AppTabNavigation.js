import React, { Component } from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Icon from "react-native-vector-icons/Ionicons";

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Homes",
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} name="ios-home" size={24} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} name="ios-person" size={24} />
        )
      }
    }
  },
  {
    //router config
    initialRouteName: "Profile",
    order: ["Profile", "Home"],

    tabBarOptions: {
      activeTintColor: "orange",
      inactiveTintColor: "grey"
    }
  }
);

const TabAppContainer = createAppContainer(AppTabNavigator);

export default TabAppContainer;
