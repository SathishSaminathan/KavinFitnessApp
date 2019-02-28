import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput
} from "react-native";

import Colors from "../../assets/styleConstant/Colors";
import images from "../../assets/images/images";
import AppConstants from "../../../AppConstants";

const { width, height } = Dimensions.get("window");
const LOGIN_CONTAINER_WIDTH = 300;
const LOGIN_CONTAINER_HEIGHT = 350;
const LOGO_HEIGHT = 100;
const LOGO_WIDTH = 100;
const MARGIN_TOP = height / 4.6;
const MARGIN_LEFT = 30;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GenderSelected: null
    };
  }

  static navigationOptions = {
    header: null
  };

  selectGender() {
    this.setState({ GenderSelected: AppConstants.FEMALE });
    // this.nameField.focus();
  }

  render() {
    const { GenderSelected } = this.state;
    const MaleImage = images.Male;
    const MaleSImage = images.MaleSelected;
    const FemaleImage = images.Female;
    const FemaleSImage = images.FemaleSelected;
    return (
      <View style={styles.container}>
        <View style={styles.background} />
        <View style={styles.imageArea}>
          <Image source={images.logo} style={styles.image} resizeMode="cover" />
        </View>
        <View style={styles.loginContainer}>
          <View style={styles.genderSelectionArea}>
            <View style={styles.genderSelection}>
              <TouchableWithoutFeedback
                onPress={() =>
                  this.setState({ GenderSelected: AppConstants.MALE })
                }
              >
                <Image
                  resizeMode="cover"
                  source={
                    GenderSelected === AppConstants.MALE
                      ? MaleSImage
                      : MaleImage
                  }
                  style={styles.genderImage}
                  resizeMode="cover"
                />
              </TouchableWithoutFeedback>
              <Text
                style={{
                  fontSize: 20,
                  color: Colors.themeGreen,
                  alignSelf: "flex-end"
                }}
              >
                Select Gender
              </Text>
              <TouchableWithoutFeedback onPress={() => this.selectGender()}>
                <Image
                  resizeMode="cover"
                  source={
                    GenderSelected === AppConstants.FEMALE
                      ? FemaleSImage
                      : FemaleImage
                  }
                  style={styles.genderImage}
                  resizeMode="cover"
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.inputArea}>
            <Text
              style={{
                fontSize: 30,
                color: Colors.themeGreen,
                alignSelf: "center"
              }}
            >
              Welcome..
            </Text>
            <View style={styles.inputLabelArea}>
              {GenderSelected && (
                <View style={styles.inputLabel}>
                  <Text style={{ fontSize: 40, color: Colors.themeGreen }}>
                    {GenderSelected === AppConstants.MALE
                      ? AppConstants.MR
                      : AppConstants.MS}
                  </Text>
                  <TextInput
                    ref={input => {
                      this.nameField = input;
                    }}
                    style={styles.textInput}
                    underlineColorAndroid={Colors.themeGreen}
                    autoCorrect={false}
                  />
                </View>
              )}
            </View>
            <View style={styles.mobileNumberArea}>
              <Text style={styles.numberText}>I can contact you through</Text>
              <TextInput
                placeholder="8012941249"
                keyboardType="number-pad"
                style={[styles.textInput, { width: "45%" }]}
                underlineColorAndroid={Colors.themeGreen}
                maxLength={10}
              />
              <Text style={styles.numberText}> this number..</Text>
            </View>
          </View>
          <View style={styles.buttonArea} underlayColor="red">
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: Colors.themeGreen, fontSize: 20 }}>
                Are you ready to Lift?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black
  },
  background: {
    zIndex: 0,
    position: "absolute",
    top: 0,
    height: 200,
    borderStyle: "solid",
    borderRightWidth: 400,
    borderTopWidth: 400,
    borderRightColor: Colors.transparent,
    borderTopColor: Colors.themeGreen
  },
  loginContainer: {
    backgroundColor: Colors.black,
    width: LOGIN_CONTAINER_WIDTH,
    height: LOGIN_CONTAINER_HEIGHT,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: Colors.themeGreen,
    overflow: "hidden",
    marginTop: MARGIN_TOP,
    marginLeft: MARGIN_LEFT,
    marginLeft: width / 2 - LOGIN_CONTAINER_WIDTH / 2
  },
  genderSelectionArea: {
    flex: 20
  },
  genderSelection: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around"
  },
  genderImage: {
    width: 80,
    height: 80
  },
  imageArea: {
    position: "absolute",
    top: MARGIN_TOP - LOGO_HEIGHT / 2,
    left: width / 2 - LOGO_HEIGHT / 2,
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
    borderRadius: 50,
    zIndex: 10,
    backgroundColor: Colors.black,
    borderWidth: 5,
    borderColor: Colors.themeGreen
  },
  image: {
    flex: 1,
    width: null,
    height: null
  },
  inputArea: {
    flex: 80,
    paddingTop: 10
  },
  inputLabel: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  numberText: { color: Colors.themeGreen, fontSize: 20 },
  buttonArea: {
    position: "absolute",
    bottom: 0,
    borderTopWidth: 3,
    borderColor: Colors.themeGreen
  },
  textInput: { color: Colors.white, width: "75%", fontSize: 20 },
  mobileNumberArea: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    paddingTop: 20
  },
  button: {
    width: LOGIN_CONTAINER_WIDTH,
    backgroundColor: Colors.black,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: Colors.white
  }
});
