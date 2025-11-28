import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-0 w-full bg-white border-t border-gray-200 md:hidden z-50 pb-safe">
      <!-- Mobile Navigation -->
      <div class="grid grid-cols-4 h-16">
        <div
          class="flex flex-col items-center justify-center gap-1 text-airbnb cursor-pointer text-[#ff385c]"
        >
          <span class="material-icons text-xl font-bold">search</span>
          <span class="text-[10px] font-medium">Explore</span>
        </div>
        <div
          class="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-gray-800 cursor-pointer transition"
        >
          <span class="material-icons text-xl">favorite_border</span>
          <span class="text-[10px] font-medium">Wishlists</span>
        </div>
        <div
          class="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-gray-800 cursor-pointer transition"
        >
          <span class="text-[10px] font-medium">Log in</span>
          <span class="material-icons text-xl">login</span>
        </div>
        <div
          class="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-gray-800 cursor-pointer transition"
        >
          <span class="material-icons text-xl">account_circle</span>
          <span class="text-[10px] font-medium">Profile</span>
        </div>
      </div>
    </div>
  `,
})
export class MobileNavComponent {}
