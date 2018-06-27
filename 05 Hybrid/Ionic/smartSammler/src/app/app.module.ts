import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { Camera } from "@ionic-native/camera";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { MarkersProvider } from "../providers/markers/markers";
import { MarkerDetailsPageModule } from "../pages/marker-details/marker-details.module";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    MarkerDetailsPageModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MarkersProvider
  ]
})
export class AppModule {}
