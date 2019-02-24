import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../../assets/styleConstant/Colors";

export default class VideoItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let video = this.props.video;
    return (
        <View style={styles.container}>
         <TouchableOpacity onPress={()=> {this.props.getVideoURL(video.snippet.videoURL), this.props.openModal()}}>
         <Image
            source={{ uri: video.snippet.thumbnails.medium.url }}
            style={{ height: 200 }}
          />
         </TouchableOpacity>
          <View style={styles.descContainer}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
              style={{ height: 50, width: 50, borderRadius: 25 }}
            />
            <View style={styles.videoDetails}>
              <Text style={styles.videoTitle}>{video.snippet.title}</Text>
              {/* <Text>{video.snippet.channelTitle}</Text> */}
            </View>
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.black
  },
  descContainer: {
    flexDirection: "row",
    paddingTop: 15
  },
  videoTitle: {
    fontSize: 16,
    color: Colors.white
  },
  videoDetails: {
    paddingHorizontal: 15,
    flex: 1
  },
  videoStats: {}
});
