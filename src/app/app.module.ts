import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { ListOfTripsComponent } from './components/list-of-trips/list-of-trips.component';
import { SingleTripComponent } from './components/single-trip/single-trip.component';
import { TripDetailComponent } from './components/trip-detail/trip-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    OffersComponent,
    ListOfTripsComponent,
    SingleTripComponent,
    TripDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
