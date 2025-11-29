import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="relative pt-6 pb-6">
      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-2 h-[300px] md:h-[480px] rounded-2xl overflow-hidden cursor-pointer group"
      >
        <div class="md:col-span-2 h-full relative overflow-hidden">
          <img
            src="https://picsum.photos/800/600?random=1"
            alt="Main bedroom"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"
          ></div>
        </div>
        <div class="hidden md:grid grid-cols-1 grid-rows-2 gap-2 h-full">
          <div class="h-full relative overflow-hidden">
            <img
              src="https://picsum.photos/400/300?random=2"
              alt="Detail 1"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"
            ></div>
          </div>
          <div class="h-full relative overflow-hidden">
            <img
              src="https://picsum.photos/400/300?random=3"
              alt="Detail 2"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"
            ></div>
          </div>
        </div>
        <div class="hidden md:grid grid-cols-1 grid-rows-2 gap-2 h-full">
          <div class="h-full relative overflow-hidden">
            <img
              src="https://picsum.photos/400/300?random=4"
              alt="Detail 3"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"
            ></div>
          </div>
          <div class="h-full relative overflow-hidden">
            <img
              src="https://picsum.photos/400/300?random=5"
              alt="Detail 4"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"
            ></div>
          </div>
        </div>
      </div>
      <button
        class="absolute bottom-10 right-8 bg-white border border-gray-800 px-4 py-1.5 rounded-lg text-sm font-semibold shadow-sm hover:bg-gray-100 flex items-center gap-2 transition"
      >
        <lucide-icon name="menu" [size]="14"></lucide-icon>
        Show all photos
      </button>
    </div>
  `,
})
export class GalleryComponent {}
