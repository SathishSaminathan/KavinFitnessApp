import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import KMap from "../components/Map/KMap";

const { width, height } = Dimensions.get('window')

const GymMarkers = [
  {
    latitude: 11.2051578,
    longitude: 77.3592869
  },
  {
    latitude: 11.165133,
    longitude: 77.34795
  }
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <KMap GymMarkers={GymMarkers}/>
    );
  }
}

 