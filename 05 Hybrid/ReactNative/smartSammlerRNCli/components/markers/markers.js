import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ListView,
  TouchableHighlight
} from "react-native";

const markerData = [
  {
    id: 1000,
    imgURL: "/assets/images/beeren.png",
    lable: "Waldviertel",
    type: 1,
    coords: { lat: 48.5839237, lng: 15.4276355 },
    remark:
      "Als Beere gilt in der Botanik eine aus einem einzigen Fruchtknoten hervorgegangene Schließfrucht, bei der die komplette Fruchtwand (Perikarp) auch noch bei der Reife saftig oder mindestens fleischig ist",
    picture: null
  },
  {
    id: 1001,
    imgURL: "/assets/images/schwammerl.png",
    lable: "Steiermark",
    type: 3,
    coords: { lat: 47.5308866, lng: 15.9476211 },
    remark:
      "Schwammerl ist die Bezeichnung für Großpilze in Österreich -  Gemeint sind damit nicht alle Pilze im biologischen Sinn, sondern die Fruchtkörper essbarer Pilzarten",
    picture: null
  },
  {
    id: 1002,
    imgURL: "/assets/images/holler.png",
    lable: "Neuwaldegg",
    type: 2,
    coords: { lat: 48.234201, lng: 16.277753 },
    remark:
      "Holunder-Arten sind meist verholzende Pflanzen und wachsen als Halbsträucher, Sträucher oder kleine Bäume",
    picture: null
  }
];

export default class Markers extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      markerDataSource: ds.cloneWithRows(markerData)
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.markerDataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }

  renderRow(marker, sectionId, rowId, highlightRow) {
    return (
      <TouchableHighlight onPress={() => this.pressRow(marker)}>
        <View style={styles.container}>
          <Text style={styles.rowStyle}>{marker.lable}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  pressRow = m => {
    console.log(`clicked ${m}`);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "blue",
    padding: 5
  },
  rowStyle: {
    fontSize: 20,
    textAlign: "center",
    margin: 5,
    color: "white"
  }
});
