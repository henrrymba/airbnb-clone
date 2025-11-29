import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="py-12 border-t border-gray-200">
      <h2 class="text-2xl font-semibold mb-6">Where you’ll be</h2>
      <p class="mb-6 text-gray-700">Paris, Île-de-France, France</p>
      <div
        class="w-full h-[480px] bg-gray-100 rounded-xl relative overflow-hidden group cursor-pointer"
      >
        <img
          src="https://picsum.photos/1200/800?random=10"
          alt="Map Location"
          class="w-full h-full object-cover opacity-80"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="bg-[#FF385C] rounded-full p-4 shadow-xl">
            <lucide-icon name="user" fill="white" color="white" [size]="24"></lucide-icon>
          </div>
        </div>
        <div class="absolute top-4 right-4 bg-white p-2 shadow-lg rounded-lg">
          <lucide-icon name="maximize-2" [size]="20" class="text-gray-700"></lucide-icon>
        </div>
      </div>
      <div class="mt-4">
        <p class="font-semibold text-sm">Paris, Île-de-France, France</p>
        <p class="text-sm text-gray-600 mt-2">
          This listing's location is verified and the exact location will be provided after booking.
          <span class="underline font-semibold text-black">Learn about verification.</span>
        </p>
        <button class="mt-4 font-semibold underline text-black flex items-center gap-1">
          Show more <lucide-icon name="chevron-right" [size]="16"></lucide-icon>
        </button>
      </div>
    </div>
  `,
})
export class MapComponent {}
