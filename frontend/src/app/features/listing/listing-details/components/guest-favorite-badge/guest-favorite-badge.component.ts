import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guest-favorite-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative flex items-center justify-center w-full max-w-[400px] mx-auto py-6">
      <div class="flex items-center gap-4 relative z-10">
        <div class="flex flex-col items-center">
          <span class="text-6xl font-bold leading-none tracking-tighter">4.94</span>
        </div>
        <div class="h-14 w-px bg-gray-300 mx-2"></div>
        <div class="flex flex-col items-center justify-center text-center">
          <div class="flex relative">
            <img
              src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/01933436-7047-484b-8334-0298a0d927a4.png"
              alt="Guest Favorite"
              class="h-20 w-auto object-contain absolute -top-10 -left-12 opacity-90"
            />
            <div class="flex flex-col z-10 pt-1">
              <span class="text-xs font-bold uppercase tracking-widest text-gray-800">Guest</span>
              <span class="text-xs font-bold uppercase tracking-widest text-gray-800"
                >favorite</span
              >
            </div>
            <img
              src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/01933436-7047-484b-8334-0298a0d927a4.png"
              alt="Guest Favorite"
              class="h-20 w-auto object-contain absolute -top-10 -right-12 scale-x-[-1] opacity-90"
            />
          </div>
          <p class="text-xs text-gray-500 mt-1 max-w-[140px] leading-tight">
            One of the most loved homes on Airbnb, according to guests
          </p>
        </div>
        <div class="h-14 w-px bg-gray-300 mx-2"></div>
        <div class="flex flex-col items-center">
          <span class="text-xl font-bold">181</span>
          <span class="text-xs underline text-gray-800 cursor-pointer">Reviews</span>
        </div>
      </div>
    </div>
  `,
})
export class GuestFavoriteBadgeComponent {}
