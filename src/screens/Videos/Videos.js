import React, { Component } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  FlatList
} from "react-native";
import data from "../../../data.json";

import { Colors } from "../../assets/styleConstant";
import KModal from "../../components/KModal";
import VideoItems from "./VideoItems";

const { width, height } = Dimensions.get("window");

export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false, Loading: false };
  }

  closeModal() {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  closeLoader() {
    this.setState({
      Loading: false
    });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible, Loading: visible });
  }

  getVideoURL = videoURL => {
    this.setState({
      videoURL
    });
  };

  render() {
    const { videoURL } = this.state;
    return (
      <View style={{ backgroundColor: Colors.darkGrey, flex: 1 }}>
        <KModal
          {...this.state}
          closeModal={() => this.closeModal()}
          closeLoader={() => this.closeLoader()}
          videoURL={videoURL}
        />
        <FlatList
          data={data.items}
          renderItem={video => (
            <VideoItems
              video={video.item}
              getVideoURL={this.getVideoURL}
              openModal={() => this.setModalVisible(true)}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View style={{ height: 0.5, backgroundColor: Colors.white }} />
          )}
        />
        {/* </TouchableHighlight> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});
