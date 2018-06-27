import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Markers from "./markers/markers";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainBar}>
          <Text style={styles.welcome}>Welcome to smartSammler</Text>
        </View>
        <Markers />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  mainBar: {
    backgroundColor: "green"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white",
    backgroundColor: "#6D4C41"
  }
});
