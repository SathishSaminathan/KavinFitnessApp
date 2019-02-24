import React, { PureComponent } from "react";
import { View, Text, Modal, StyleSheet, Dimensions } from "react-native";
import { WebView } from "react-native-webview";

import KPageLoader from "./KPageLoader";
import { Colors } from "../assets/styleConstant";

const { width, height } = Dimensions.get("window");

export default class KModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }

  renderVideo(videoURL) {
    return (
      <WebView
        source={{ uri: `https://www.youtube.com/embed/${videoURL}` }}
        style={styles.video}
        onLoadStart={() => this.setState({ IsLoading: true })}
        onLoadEnd={() => this.props.closeLoader()}
      />
    );
  }

  render() {
    const { modalVisible, Loading, videoURL } = this.props;
    return (
      <Modal
        animationType="none"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => this.props.closeModal()}
      >
        {this.renderVideo(videoURL)}
        {Loading && <KPageLoader />}
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  video: {
    width: width,
    maxHeight: height / 2
  }
});
