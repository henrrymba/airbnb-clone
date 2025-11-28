import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Listing } from '../../types';

@Component({
  selector: 'app-listing-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full cursor-pointer group relative">
      <div class="flex flex-col w-full">
        <!-- Image -->
        <div class="aspect-square w-full relative overflow-hidden rounded-xl bg-gray-200">
          <img
            [src]="data.image"
            alt="Listing"
            class="object-cover h-full w-full transition duration-300"
          />
          <!-- Guest Favorite -->
          <div
            *ngIf="data.isGuestFavorite"
            class="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full shadow-md z-10"
          >
            <span class="text-xs font-semibold text-black">Guest favorite</span>
          </div>
          <!-- Favorite Button -->
          <div class="absolute top-3 right-3 z-10">
            <span
              class="material-icons text-white text-2xl hover:scale-110 active:scale-95 transition cursor-pointer"
              style="text-shadow: 0 0 2px rgba(0,0,0,0.5);"
              >favorite_border</span
            >
          </div>
        </div>

        <!-- Details -->
        <div class="flex flex-col mt-2 gap-1">
          <div class="font-semibold text-sm text-neutral-900 truncate">
            {{ data.location }}
          </div>

          <div class="font-light text-neutral-500 text-xs">
            {{ data.dates }} - {{ data.distance }}
          </div>

          <div class="flex flex-row items-center gap-1 mt-1">
            <span class="font-semibold text-xs text-neutral-900 decoration-1 underline-offset-2"
              >€ {{ data.price }}</span
            >
            <span class="font-light text-xs text-neutral-900">for {{ data.nights }} nights</span>
            <span class="text-neutral-900 mx-1">•</span>
            <span class="material-icons text-black" style="font-size: 14px;">star</span>
            <span class="font-light text-xs text-neutral-900">{{
              data.rating | number : '1.2-2'
            }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ListingCardComponent {
  @Input() data!: Listing;
}
