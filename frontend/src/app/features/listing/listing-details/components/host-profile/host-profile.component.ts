import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-host-profile',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="py-12 border-t border-gray-200">
      <h2 class="text-2xl font-semibold mb-8">Meet your host</h2>
      <div class="rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 md:gap-16">
        <!-- Card Left -->
        <div
          class="bg-white rounded-3xl p-8 shadow-lg min-w-[300px] text-center md:text-left flex flex-col items-center md:items-center justify-center relative"
        >
          <div class="relative">
            <img
              src="https://i.pravatar.cc/150?u=catalina"
              alt="Catalina"
              class="w-28 h-28 rounded-full object-cover mb-4"
            />
            <div
              class="absolute bottom-4 right-0 bg-[#FF385C] rounded-full p-1.5 border-[3px] border-white"
            >
              <lucide-icon name="shield-check" [size]="16" color="white" fill="white"></lucide-icon>
            </div>
          </div>
          <h3 class="text-3xl font-bold mb-1">Catalina</h3>
          <p class="font-semibold text-sm mb-6 flex items-center gap-1">
            <lucide-icon name="award" [size]="14"></lucide-icon> Superhost
          </p>

          <div class="w-full border-t border-gray-200"></div>

          <div class="flex w-full justify-between pt-4">
            <div class="text-center w-1/2">
              <div class="text-xl font-bold">515</div>
              <div class="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                Reviews
              </div>
            </div>
            <div class="w-px bg-gray-200 h-10"></div>
            <div class="text-center w-1/2">
              <div class="text-xl font-bold flex items-center justify-center gap-1">
                4.94
                <lucide-icon name="star" [size]="12" fill="black"></lucide-icon>
              </div>
              <div class="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                Rating
              </div>
            </div>
            <div class="w-px bg-gray-200 h-10"></div>
            <div class="text-center w-1/2">
              <div class="text-xl font-bold">9</div>
              <div class="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                Years hosting
              </div>
            </div>
          </div>
        </div>

        <!-- Info Right -->
        <div class="flex-1">
          <div class="grid grid-cols-1 gap-4 mb-6">
            <div class="flex items-center gap-3">
              <lucide-icon name="map-pin" class="text-gray-800"></lucide-icon>
              <span>Born in the 60s</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="font-bold text-lg">🎓</div>
              <span>Where I went to school: Paris</span>
            </div>
            <div class="flex items-center gap-3">
              <lucide-icon name="user" class="text-gray-800"></lucide-icon>
              <span>My work: Consultant</span>
            </div>
            <div class="flex items-center gap-3">
              <lucide-icon name="message-square" class="text-gray-800"></lucide-icon>
              <span>Speaks English, Spanish, French, Italian, and Portuguese</span>
            </div>
            <div class="flex items-center gap-3">
              <lucide-icon name="globe" class="text-gray-800"></lucide-icon>
              <span>Lives in Paris, France</span>
            </div>
          </div>

          <p class="text-gray-800 leading-relaxed mb-6">
            My husband and I have raised our 3 children in the exciting Saint-Germain-des-Prés
            neighborhood, close to the Louvre and Orsay museums, librairies, fancy stores and
            cafés...
          </p>

          <button class="font-semibold underline flex items-center gap-1 text-gray-900 mb-8">
            Show more
            <lucide-icon name="chevron-right" [size]="16"></lucide-icon>
          </button>

          <h4 class="font-semibold mb-2">Catalina is a Superhost</h4>
          <p class="text-gray-600 text-sm mb-6">
            Superhosts are experienced, highly rated hosts who are committed to providing great
            stays for guests.
          </p>

          <button
            class="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Message host
          </button>

          <div class="mt-8 border-t border-gray-300 pt-6 flex items-start gap-3">
            <lucide-icon name="shield-check" class="text-[#FF385C] mt-1 shrink-0"></lucide-icon>
            <p class="text-xs text-gray-600">
              To help protect your payment, always use Airbnb to send money and communicate with
              hosts.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HostProfileComponent {}
