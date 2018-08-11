import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Marker } from "../../shared/model";

/**
 * Generated class for the MarkerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-marker-details",
  templateUrl: "marker-details.html"
})
export class MarkerDetailsPage {
  marker: Marker;

  constructor(public navParams: NavParams) {
    this.marker = navParams.data;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MarkerDetailsPage");
  }
}
