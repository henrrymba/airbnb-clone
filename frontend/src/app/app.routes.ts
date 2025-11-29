import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ListingDetailsComponent } from './features/listing/listing-details/listing-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listings/:id', component: ListingDetailsComponent },
];
