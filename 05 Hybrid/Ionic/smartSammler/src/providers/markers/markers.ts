import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Marker } from "../../shared/model";
import { environment } from "../../shared/env";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MarkersProvider {
  constructor(public http: HttpClient) {}

  getMarkers(): Observable<Marker[]> {
    return this.http.get<Marker[]>(
      `http://smartsammler.integrations.at/api/markers`
    );
  }
}
