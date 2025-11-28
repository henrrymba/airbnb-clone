import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="w-full bg-white border-t border-gray-200 hidden md:block mt-12">
      <div class="max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 py-3">
        <div class="flex flex-row items-center justify-between text-xs text-gray-500">
          <!-- Links -->
          <div class="flex flex-row gap-2">
            <span>© 2025 Airbnb Clone</span>
            <span>·</span>
            <span class="hover:underline cursor-pointer">Privacy</span>
            <span>·</span>
            <span class="hover:underline cursor-pointer">Terms</span>
            <span>·</span>
            <span class="hover:underline cursor-pointer">Sitemap</span>
          </div>

          <!-- Settings -->
          <div class="flex flex-row gap-4 font-semibold text-gray-700 items-center">
            <div
              class="flex flex-row gap-1 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg -my-2 transition"
            >
              <span class="material-icons text-sm">language</span>
              <span>English (US)</span>
            </div>
            <div class="cursor-pointer hover:bg-gray-100 p-2 rounded-lg -my-2 transition">
              € EUR
            </div>
            <div
              class="flex flex-row gap-1 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg -my-2 transition"
            >
              <span>Support & resources</span>
              <span class="material-icons text-sm">expand_less</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
