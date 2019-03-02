import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import * as Animatable from "react-native-animatable";

import { Colors } from "../assets/styleConstant";
import images from "../assets/images/images";

const { width, height } = Dimensions.get("window");

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.titleArea]}>
          <Animatable.Text
            animation="bounceInUp"
            style={[styles.titleText, styles.textStyle]}
          >
            Kavin Fitness-
          </Animatable.Text>
          <Animatable.Text
            animation="bounceInUp"
            style={[styles.titleText, styles.textStyle]}
          >
            Gym
          </Animatable.Text>
        </View>
        <View style={styles.infoArea}>
          <View style={styles.imageArea}>
            <View style={styles.arrowArea}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={images.Arrow}
              />
            </View>
            <Animatable.Text
              animation="fadeInLeft"
              style={[styles.nameText, styles.textStyle,{width:'100%'}]}
            >
              Enter Your details in Next Page
            </Animatable.Text>
          </View>
          <Animatable.Text
            animation="fadeInLeft"
            style={[{ lineHeight: 30 }, styles.textStyle]}
          >
            Join the movement and change your Life
          </Animatable.Text>
          <Animatable.Text animation="fadeInLeft" style={styles.textStyle}>
            The Pain You Feel Today Will Be The Strength You Need Tomorrow
          </Animatable.Text>
        </View>
        <View style={styles.logoImage}>
          <Image
            source={images.logo}
            resizeMode="cover"
            style={{ flex: 1, width: null, height: null }}
          />
        </View>
        <View style={{ position: "absolute", left: 20, bottom: 20 }}>
          <Animatable.Text
            animation="bounceInLeft"
            style={[
              {
                fontSize: 18
              },
              styles.textStyle
            ]}
          >
            Are you Ready to go?
          </Animatable.Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Animatable.Text
                animation="bounceInLeft"
                style={[
                  {
                    lineHeight: 30,
                    borderBottomWidth: 2,
                    borderBottomColor: Colors.pureWhite,
                    fontSize: 18
                  },
                  styles.textStyle
                ]}
              >
                Sign In
              </Animatable.Text>
              <Image
                source={images.Arrow}
                resizeMode="cover"
                style={{ width: 50, height: 20, marginLeft: 10 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeGreen,
    paddingHorizontal: 20,
    position: "relative",
  },
  titleArea: {
    paddingTop: 20
  },
  titleText: {
    fontSize: 35
    // fontWeight: "bold",
  },
  infoArea: {
    paddingTop: 40,
  },
  logoImage: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginTop: 15
  },
  imageArea: {
    flexDirection: "row",
    alignItems: "center"
  },
  arrowArea: {
    width: 50,
    height: 20
  },
  nameText: {
    fontSize: 14,
    paddingLeft: 10
  },
  image: {
    flex: 1,
    width: null,
    height: null
  },
  textStyle: {
    fontFamily: "Graduate",
    color: Colors.pureWhite
  }
});
