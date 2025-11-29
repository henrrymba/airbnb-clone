import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

import { NavbarComponent } from '../../../layout/navbar/navbar.component';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ListingInfoComponent } from './components/listing-info/listing-info.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { MapComponent } from './components/map/map.component';
import { HostProfileComponent } from './components/host-profile/host-profile.component';
import { ThingsToKnowComponent } from './components/things-to-know/things-to-know.component';
import { BookingWidgetComponent } from './components/booking-widget/booking-widget.component';

@Component({
  selector: 'app-listing-details',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    NavbarComponent,
    FooterComponent,
    GalleryComponent,
    ListingInfoComponent,
    ReviewsComponent,
    MapComponent,
    HostProfileComponent,
    ThingsToKnowComponent,
    BookingWidgetComponent,
  ],
  providers: [],
  template: `
    <div class="text-[#222222] bg-white">
      <app-navbar></app-navbar>

      <main class="max-w-7xl mx-auto px-6 pt-56 pb-20">
        <!-- Title Section -->
        <div class="flex justify-between items-start pt-4 mb-6">
          <h1 class="text-2xl md:text-[26px] font-semibold text-gray-900">
            Large private room in the trendy center of Paris
          </h1>
          <div class="hidden md:flex items-center gap-6">
            <button
              class="flex items-center gap-2 text-sm font-semibold underline hover:bg-gray-100 p-2 rounded-lg transition"
            >
              <lucide-icon name="share" [size]="16"></lucide-icon> Share
            </button>
            <button
              class="flex items-center gap-2 text-sm font-semibold underline hover:bg-gray-100 p-2 rounded-lg transition"
            >
              <lucide-icon name="heart" [size]="16"></lucide-icon> Save
            </button>
          </div>
        </div>

        <app-gallery></app-gallery>

        <div class="flex flex-col md:flex-row gap-12 relative mt-8">
          <!-- Left Column (Details) -->
          <div class="w-full md:w-[65%]">
            <app-listing-info
              [startDate]="startDate"
              [endDate]="endDate"
              (datesChange)="handleDatesChange($event)"
            ></app-listing-info>
          </div>

          <!-- Right Column (Sticky Booking Widget) -->
          <div class="hidden md:block w-[35%]">
            <app-booking-widget
              [startDate]="startDate"
              [endDate]="endDate"
              (datesChange)="handleDatesChange($event)"
            ></app-booking-widget>
          </div>
        </div>

        <!-- Full Width Sections -->
        <app-reviews></app-reviews>
        <app-map></app-map>
        <app-host-profile></app-host-profile>
        <app-things-to-know></app-things-to-know>
      </main>

      <app-footer></app-footer>
    </div>
  `,
})
export class ListingDetailsComponent {
  startDate: Date | null = null;
  endDate: Date | null = null;

  handleDatesChange(dates: { startDate: Date | null; endDate: Date | null }) {
    this.startDate = dates.startDate;
    this.endDate = dates.endDate;
  }
}
