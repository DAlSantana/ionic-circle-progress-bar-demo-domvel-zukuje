import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgCircleProgressModule.forRoot({
      backgroundStrokeWidth: 0,
      backgroundPadding: 7,
      space: -3,
      toFixed: 0,
      outerStrokeWidth: 4,
      outerStrokeColor: '#808080',
      innerStrokeWidth: 2,
      innerStrokeColor: '#e7e8ea',
      animationDuration: 500,
      animation: true,
      startFromZero: false,
      responsive: true,
      showUnits: true,
      showTitle: true,
      showSubtitle: false,
      showImage: false,
      renderOnClick: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
