import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  providers: [],
  template: `
    <header class="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex-1 flex items-center">
          <div class="text-[#FF385C] flex items-center gap-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="display: block; height: 32px; width: 32px; fill: currentcolor"
            >
              <path
                d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 3.162.723 4.691-.253 2.073-1.45 3.865-3.369 5.045-2.05 1.262-4.57 1.166-6.84-.257l-.373-.243-.37.243c-2.27 1.424-4.79 1.52-6.84.257-1.919-1.18-3.116-2.972-3.369-5.045-.187-1.529.056-3.1.723-4.691l.145-.353c.986-2.297 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.211-.073.136-.145.27-.216.401l-.396.76c-1.928 3.776-6.075 12.46-7.054 14.743l-.134.324c-.55 1.31-.75 2.593-.598 3.844.187 1.536 1.056 2.858 2.451 3.717 1.492.918 3.298.847 4.908-.184l.656-.43 1.37-1.002 1.37 1.002.656.43c1.61.031 3.416 1.102 4.908.184 1.395-.859 2.264-2.18 2.451-3.717.152-1.25.048-2.533-.598-3.844l-.134-.324c-.979-2.283-5.126-10.967-7.054-14.743l-.396-.76C18.053 3.539 17.239 3 16 3zm0 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
              ></path>
            </svg>
            <span class="text-xl font-bold hidden md:block tracking-tighter ml-1">airbnb</span>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="flex-1 hidden md:flex justify-center">
          <div
            class="flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer py-2.5 px-4 gap-4 divide-x divide-gray-300"
          >
            <div class="pl-2 pr-2 text-sm font-medium">Anywhere</div>
            <div class="pl-4 pr-2 text-sm font-medium">Any week</div>
            <div class="pl-4 pr-2 flex items-center gap-3">
              <span class="text-sm font-light text-gray-500">Add guests</span>
              <div class="bg-[#FF385C] p-2 rounded-full text-white">
                <lucide-icon name="search" [size]="14" [strokeWidth]="3"></lucide-icon>
              </div>
            </div>
          </div>
        </div>

        <!-- User Menu -->
        <div class="flex-1 flex justify-end items-center gap-2">
          <div
            class="text-sm font-medium hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer transition"
          >
            Become a host
          </div>
          <div class="hover:bg-gray-100 p-2 rounded-full cursor-pointer transition">
            <lucide-icon name="globe" [size]="18"></lucide-icon>
          </div>
          <div
            class="flex items-center gap-2 border border-gray-300 rounded-full p-1 pl-3 hover:shadow-md cursor-pointer transition ml-1"
          >
            <lucide-icon name="menu" [size]="18"></lucide-icon>
            <div class="bg-gray-500 rounded-full p-1 text-white">
              <lucide-icon name="user" [size]="18" fill="white"></lucide-icon>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
