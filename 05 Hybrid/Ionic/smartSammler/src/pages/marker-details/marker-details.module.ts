import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkerDetailsPage } from './marker-details';

@NgModule({
  declarations: [
    MarkerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MarkerDetailsPage),
  ],
})
export class MarkerDetailsPageModule {}
