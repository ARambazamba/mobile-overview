import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { MarkersProvider } from "../../providers/markers/markers";
import { Marker } from "../../shared/model";
import { MarkerDetailsPage } from "../marker-details/marker-details";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController, private ms: MarkersProvider) {
    this.ms.getMarkers().subscribe(data => (this.markers = data));
  }

  markers: Marker[];

  showMarker(marker: Marker) {
    this.navCtrl.push(MarkerDetailsPage, marker);
  }
}
