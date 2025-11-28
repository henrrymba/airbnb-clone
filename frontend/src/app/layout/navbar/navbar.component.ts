import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIRBNB_IMAGE_URL } from '../../shared/constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Navbar -->
    <header
      class="fixed top-0 w-full z-50 bg-white border-b border-gray-200 transition-all duration-300"
      [ngClass]="isScrolled ? 'h-[80px] pt-6' : 'h-[200px]'"
    >
      <div
        class="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 h-full flex flex-col justify-center relative z-50 bg-white"
      >
        <div class="flex flex-row items-center justify-between z-50 bg-white relative">
          <!-- Logo Section -->
          <div class="flex-1 cursor-pointer min-w-[140px]" (click)="scrollToTop()">
            <div class="flex items-center gap-1 text-[#ff385c]">
              <svg
                viewBox="0 0 3500 1100"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="display: block; height: 32px; width: auto; fill: currentcolor;"
              >
                <path
                  d="M1494.71 456.953C1458.28 412.178 1408.46 389.892 1349.68 389.892C1233.51 389.892 1146.18 481.906 1146.18 605.892C1146.18 729.877 1233.51 821.892 1349.68 821.892C1408.46 821.892 1458.28 799.605 1494.71 754.83L1500.95 810.195H1589.84V401.588H1500.95L1494.71 456.953ZM1369.18 736.895C1295.33 736.895 1242.08 683.41 1242.08 605.892C1242.08 528.373 1295.33 474.888 1369.18 474.888C1443.02 474.888 1495.49 529.153 1495.49 605.892C1495.49 682.63 1443.8 736.895 1369.18 736.895ZM1656.11 810.195H1750.46V401.588H1656.11V810.195ZM948.912 666.715C875.618 506.859 795.308 344.664 713.438 184.809C698.623 155.177 670.554 98.2527 645.603 67.8412C609.736 24.1733 556.715 0.779785 502.915 0.779785C449.115 0.779785 396.094 24.1733 360.227 67.8412C335.277 98.2527 307.207 155.177 292.392 184.809C210.522 344.664 130.212 506.859 56.9187 666.715C47.5621 687.769 24.9504 737.675 16.3736 760.289C6.2373 787.581 0.779297 817.213 0.779297 846.845C0.779297 975.509 101.362 1079.22 235.473 1079.22C346.193 1079.22 434.3 1008.26 502.915 934.18C571.53 1008.26 659.638 1079.22 770.357 1079.22C904.468 1079.22 1005.83 975.509 1005.83 846.845C1005.83 817.213 999.593 787.581 989.457 760.289C980.88 737.675 958.268 687.769 948.912 666.715ZM502.915 810.195C447.555 738.455 396.094 649.56 396.094 577.819C396.094 506.079 446.776 470.209 502.915 470.209C559.055 470.209 610.516 508.419 610.516 577.819C610.516 647.22 558.275 738.455 502.915 810.195ZM770.357 998.902C688.362 998.902 618.032 941.557 555.741 872.656C619.966 792.541 690.826 679.121 690.826 577.819C690.826 458.513 598.04 389.892 502.915 389.892C407.79 389.892 315.784 458.513 315.784 577.819C315.784 679.098 386.145 792.478 450.144 872.593C387.845 941.526 317.491 998.902 235.473 998.902C146.586 998.902 81.0898 931.061 81.0898 846.845C81.0898 826.57 84.2087 807.856 91.2261 788.361C98.2436 770.426 120.855 720.52 130.212 701.025C203.505 541.17 282.256 380.534 364.126 220.679C378.941 191.047 403.891 141.921 422.605 119.307C442.877 94.3538 470.947 81.0975 502.915 81.0975C534.883 81.0975 562.953 94.3538 583.226 119.307C601.939 141.921 626.89 191.047 641.704 220.679C723.574 380.534 802.325 541.17 875.618 701.025C884.975 720.52 907.587 770.426 914.604 788.361C921.622 807.856 925.52 826.57 925.52 846.845C925.52 931.061 859.244 998.902 770.357 998.902ZM3285.71 389.892C3226.91 389.892 3175.97 413.098 3139.91 456.953V226.917H3045.56V810.195H3134.45L3140.69 754.83C3177.12 799.605 3226.94 821.892 3285.71 821.892C3401.89 821.892 3489.22 729.877 3489.22 605.892C3489.22 481.906 3401.89 389.892 3285.71 389.892ZM3266.22 736.895C3191.6 736.895 3139.91 682.63 3139.91 605.892C3139.91 529.153 3191.6 474.888 3266.22 474.888C3340.85 474.888 3393.32 528.373 3393.32 605.892C3393.32 683.41 3340.07 736.895 3266.22 736.895ZM2827.24 389.892C2766.15 389.892 2723.56 418.182 2699.37 456.953L2693.13 401.588H2604.24V810.195H2698.59V573.921C2698.59 516.217 2741.47 474.888 2800.73 474.888C2856.87 474.888 2888.84 513.097 2888.84 578.599V810.195H2983.19V566.903C2983.19 457.733 2923.15 389.892 2827.24 389.892ZM1911.86 460.072L1905.62 401.588H1816.73V810.195H1911.08V604.332C1911.08 532.592 1954.74 486.585 2027.26 486.585C2042.85 486.585 2058.44 488.144 2070.92 492.043V401.588C2059.22 396.91 2044.41 395.35 2028.04 395.35C1978.58 395.35 1936.66 421.177 1911.86 460.072ZM2353.96 389.892C2295.15 389.892 2244.21 413.098 2208.15 456.953V226.917H2113.8V810.195H2202.69L2208.93 754.83C2245.36 799.605 2295.18 821.892 2353.96 821.892C2470.13 821.892 2557.46 729.877 2557.46 605.892C2557.46 481.906 2470.13 389.892 2353.96 389.892ZM2334.46 736.895C2259.84 736.895 2208.15 682.63 2208.15 605.892C2208.15 529.153 2259.84 474.888 2334.46 474.888C2409.09 474.888 2461.56 528.373 2461.56 605.892C2461.56 683.41 2408.31 736.895 2334.46 736.895ZM1703.28 226.917C1669.48 226.917 1642.08 254.326 1642.08 288.13C1642.08 321.934 1669.48 349.343 1703.28 349.343C1737.09 349.343 1764.49 321.934 1764.49 288.13C1764.49 254.326 1737.09 226.917 1703.28 226.917Z"
                  fill="currentcolor"
                ></path>
              </svg>
            </div>
          </div>

          <!-- Navigation & Search -->
          <div class="hidden md:flex flex-1 justify-center relative">
            <!-- Expanded Navigation -->
            <div
              class="flex flex-row items-center gap-8 transition-all duration-300 absolute top-1/2 -translate-y-1/2"
              [ngClass]="
                isScrolled ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
              "
            >
              <div class="flex flex-col items-center gap-1 cursor-pointer opacity-100">
                <div class="bg-neutral-100 rounded-full md:bg-transparent">
                  <span class="material-icons text-black text-xl">home</span>
                </div>
                <span class="text-sm font-semibold text-neutral-900">Homes</span>
                <div class="h-[2px] w-full bg-black mt-1"></div>
              </div>

              <div
                class="flex flex-col items-center gap-1 cursor-pointer opacity-60 hover:opacity-100 transition group relative"
              >
                <div class=" group-hover:bg-neutral-50 rounded-full md:bg-transparent">
                  <span class="material-icons text-neutral-500 text-xl">explore</span>
                </div>
                <span class="text-sm font-medium text-neutral-500 group-hover:text-neutral-800"
                  >Experiences</span
                >
              </div>

              <div
                class="flex flex-col items-center gap-1 cursor-pointer opacity-60 hover:opacity-100 transition group relative"
              >
                <div class="group-hover:bg-neutral-50 rounded-full md:bg-transparent">
                  <span class="material-icons text-neutral-500 text-xl">apps</span>
                </div>
                <span class="text-sm font-medium text-neutral-500 group-hover:text-neutral-800"
                  >Services</span
                >
              </div>
            </div>

            <!-- Compact Search -->
            <div
              (click)="scrollToTop()"
              class=" transition-all duration-300 absolute top-1/2 -translate-y-1/2"
              [ngClass]="
                isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              "
            >
              <div
                class="flex flex-row items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition cursor-pointer h-[48px] pl-2 pr-2"
              >
                <!-- Anywhere -->
                <div class="px-4 flex items-center gap-2 border-r border-gray-300 h-[24px]">
                  <span class="text-sm font-semibold text-neutral-800">Anywhere</span>
                </div>
                <!-- Anytime -->
                <div class="px-4 border-r border-gray-300 h-[24px] flex items-center">
                  <span class="text-sm font-semibold text-neutral-800">Anytime</span>
                </div>
                <!-- Add guests -->
                <div class="pl-4 pr-1 flex items-center gap-3">
                  <span class="text-sm text-neutral-500">Add guests</span>
                  <div
                    class="h-8 w-8 rounded-full bg-[#ff385c] text-white flex items-center justify-center"
                  >
                    <span class="material-icons text-sm font-bold">search</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- User Actions -->
          <div class="flex flex-row items-center gap-2 flex-1 justify-end relative">
            <div
              class="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
            >
              Become a host
            </div>

            <!-- User Menu -->
            <div
              (click)="toggleUserMenu()"
              class="p-1 border-[1px] border-neutral-200 rounded-full cursor-pointer hover:shadow-md transition bg-white ml-1 flex items-center gap-2 pl-3"
            >
              <span class="material-icons text-base">menu</span>
              <div class="hidden md:block h-8 w-8 rounded-full overflow-hidden relative">
                <img [src]="airbnbImageUrl" alt="User" class="h-full w-full object-cover" />
              </div>
            </div>

            <!-- Dropdown Menu -->
            <div
              *ngIf="isUserMenuOpen"
              class="absolute top-[120%] right-0 w-[240px] bg-white rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.12)] border border-neutral-100 py-2 z-50 overflow-hidden animate-fadeIn"
            >
              <div class="flex flex-col border-b border-neutral-100 pb-2">
                <div
                  class="px-4 py-3 hover:bg-neutral-50 cursor-pointer font-semibold text-sm text-neutral-700"
                >
                  Wishlists
                </div>
                <div
                  class="px-4 py-3 hover:bg-neutral-50 cursor-pointer font-semibold text-sm text-neutral-700"
                >
                  Trips
                </div>
                <div
                  class="px-4 py-3 hover:bg-neutral-50 cursor-pointer font-semibold text-sm text-neutral-700"
                >
                  Messages
                </div>
                <div
                  class="px-4 py-3 hover:bg-neutral-50 cursor-pointer font-semibold text-sm text-neutral-700"
                >
                  Profile
                </div>
              </div>

              <div class="flex flex-col border-b border-neutral-100 py-2">
                <div class="px-4 py-3 hover:bg-neutral-50 cursor-pointer text-sm text-neutral-600">
                  Account settings
                </div>
                <div class="px-4 py-3 hover:bg-neutral-50 cursor-pointer text-sm text-neutral-600">
                  Languages & currency
                </div>
                <div class="px-4 py-3 hover:bg-neutral-50 cursor-pointer text-sm text-neutral-600">
                  Help Center
                </div>
              </div>

              <div class="flex flex-col border-b border-neutral-100 py-2">
                <div
                  class="px-4 py-3 hover:bg-neutral-50 cursor-pointer flex justify-between items-center group"
                >
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold text-neutral-700">Become a host</span>
                    <span class="text-xs text-neutral-500"
                      >It's easy to start hosting and earn extra income.</span
                    >
                  </div>
                  <img
                    src="https://a0.muscache.com/pictures/b0f8786d-1915-4317-91b0-40a896a7547d.jpg"
                    alt="Host"
                    class="w-8 h-8 object-cover rounded-md ml-2"
                  />
                </div>
              </div>

              <div class="flex flex-col pt-2">
                <div class="px-4 py-3 hover:bg-neutral-50 cursor-pointer text-sm text-neutral-600">
                  Log out
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Search Bar -->
        <div
          class="hidden md:flex justify-center w-full mt-8 relative transition-all duration-300 origin-top"
          [ngClass]="isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'"
        >
          <div
            class="flex flex-row items-center justify-between border-[1px] rounded-full transition-all cursor-pointer max-w-[850px] w-full h-[66px] relative"
            [ngClass]="
              activeTab
                ? 'bg-[#EBEBEB] border-transparent'
                : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
            "
          >
            <!-- Where -->
            <div
              (click)="$event.stopPropagation(); activeTab = 'where'"
              class="flex-1 h-full flex flex-col justify-center px-8 rounded-full relative group transition-all"
              [ngClass]="[
                activeTab === 'where' ? 'bg-white shadow-xl z-20' : 'hover:bg-[#DDDDDD]',
                !activeTab ? 'hover:bg-neutral-100' : ''
              ]"
            >
              <label class="text-xs font-bold text-neutral-800">Where</label>
              <input
                class="text-sm text-neutral-600 bg-transparent outline-none placeholder:text-neutral-600 truncate font-medium w-full"
                placeholder="Search destinations"
              />
              <div
                *ngIf="!activeTab"
                class="absolute right-0 top-3 bottom-3 w-[1px] bg-gray-200 group-hover:hidden"
              ></div>
            </div>

            <!-- When -->
            <div
              (click)="$event.stopPropagation(); activeTab = 'when'"
              class="flex-1 h-full flex flex-col justify-center px-8 rounded-full relative group transition-all"
              [ngClass]="[
                activeTab === 'when' ? 'bg-white shadow-xl z-20' : 'hover:bg-[#DDDDDD]',
                !activeTab ? 'hover:bg-neutral-100' : ''
              ]"
            >
              <div class="text-xs font-bold text-neutral-800">When</div>
              <div class="text-sm text-neutral-600 font-medium truncate">
                {{ getDateRangeText() }}
              </div>
              <div
                *ngIf="!activeTab"
                class="absolute right-0 top-3 bottom-3 w-[1px] bg-gray-200 group-hover:hidden"
              ></div>
            </div>

            <!-- Who -->
            <div
              (click)="$event.stopPropagation(); activeTab = 'who'"
              class="flex-[1.2] h-full flex flex-row items-center justify-between pl-8 pr-2 rounded-full relative transition-all"
              [ngClass]="[
                activeTab === 'who' ? 'bg-white shadow-xl z-20' : 'hover:bg-[#DDDDDD]',
                !activeTab ? 'hover:bg-neutral-100' : ''
              ]"
            >
              <div class="flex flex-col justify-center">
                <div class="text-xs font-bold text-neutral-800">Who</div>
                <div class="text-sm text-neutral-600 font-medium truncate">
                  {{ getGuestsText() }}
                </div>
              </div>
              <!-- Search Button -->
              <div
                class="h-12 rounded-full bg-[#ff385c] hover:bg-[#d90b3e] flex items-center justify-center text-white shadow-sm transition-all duration-300"
                [ngClass]="activeTab ? 'w-[120px] gap-2' : 'w-12'"
              >
                <span class="material-icons text-lg font-bold">search</span>
                <span *ngIf="activeTab" class="text-base font-semibold">Search</span>
              </div>
            </div>

            <!-- Search Dropdowns -->

            <!-- Where Dropdown -->
            <div
              *ngIf="activeTab === 'where'"
              class="absolute top-[80px] left-0 w-[400px] bg-white rounded-[32px] shadow-[0_8px_28px_rgba(0,0,0,0.28)] p-6 z-50 animate-fadeIn cursor-default"
            >
              <div class="text-xs font-bold text-neutral-600 mb-2 px-2">Suggested destinations</div>
              <!-- Scrollable container for destinations -->
              <div class="flex flex-col overflow-y-auto max-h-[350px] custom-scrollbar">
                <div
                  class="flex items-center gap-4 p-3 hover:bg-neutral-100 rounded-xl cursor-pointer transition"
                >
                  <div class="bg-neutral-100 p-3 rounded-xl">
                    <span class="material-icons text-neutral-800 text-xl">near_me</span>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-neutral-800 font-medium">Nearby</span>
                    <span class="text-neutral-500 text-sm">Find what's around you</span>
                  </div>
                </div>

                <div
                  *ngFor="let item of suggestedDestinations"
                  class="flex items-center gap-4 p-3 hover:bg-neutral-100 rounded-xl cursor-pointer transition"
                >
                  <div class="bg-neutral-100 p-3 rounded-xl">
                    <span class="material-icons text-neutral-800 text-xl">location_on</span>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-neutral-800 font-medium">{{ item.name }}</span>
                    <span class="text-neutral-500 text-sm">{{ item.sub }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- When Dropdown -->
            <div
              *ngIf="activeTab === 'when'"
              class="absolute top-[80px] left-0 right-0 mx-auto w-[850px] bg-white rounded-[32px] shadow-[0_8px_28px_rgba(0,0,0,0.28)] p-8 z-50 cursor-default animate-fadeIn"
            >
              <div class="flex justify-center mb-8">
                <div class="flex bg-neutral-100 p-1 rounded-full">
                  <button class="px-6 py-1.5 bg-white rounded-full text-sm font-semibold shadow-sm">
                    Dates
                  </button>
                  <button
                    class="px-6 py-1.5 text-sm font-medium hover:bg-neutral-200 rounded-full transition"
                  >
                    Months
                  </button>
                  <button
                    class="px-6 py-1.5 text-sm font-medium hover:bg-neutral-200 rounded-full transition"
                  >
                    Flexible
                  </button>
                </div>
              </div>

              <div class="flex gap-12 justify-center relative">
                <!-- Left navigation arrow -->
                <button
                  (click)="handleMonthChange('prev')"
                  class="absolute left-0 top-3 p-2 rounded-full hover:bg-neutral-100 z-20"
                >
                  <span class="material-icons text-base">chevron_left</span>
                </button>

                <!-- Month 1 -->
                <ng-container
                  *ngTemplateOutlet="monthTemplate; context: { offset: 0 }"
                ></ng-container>

                <!-- Month 2 -->
                <ng-container
                  *ngTemplateOutlet="monthTemplate; context: { offset: 1 }"
                ></ng-container>

                <!-- Right navigation arrow -->
                <button
                  (click)="handleMonthChange('next')"
                  class="absolute right-0 top-3 p-2 rounded-full hover:bg-neutral-100 z-20"
                >
                  <span class="material-icons text-base">chevron_right</span>
                </button>
              </div>

              <div class="mt-8 flex gap-3 justify-start overflow-x-auto no-scrollbar pt-2">
                <button
                  class="whitespace-nowrap px-4 py-2 border-2 border-black rounded-full text-xs font-semibold"
                >
                  Exact dates
                </button>
                <button
                  class="whitespace-nowrap px-4 py-2 border border-gray-300 rounded-full text-xs hover:border-black transition"
                >
                  ± 1 day
                </button>
                <button
                  class="whitespace-nowrap px-4 py-2 border border-gray-300 rounded-full text-xs hover:border-black transition"
                >
                  ± 2 days
                </button>
                <button
                  class="whitespace-nowrap px-4 py-2 border border-gray-300 rounded-full text-xs hover:border-black transition"
                >
                  ± 3 days
                </button>
                <button
                  class="whitespace-nowrap px-4 py-2 border border-gray-300 rounded-full text-xs hover:border-black transition"
                >
                  ± 7 days
                </button>
                <button
                  class="whitespace-nowrap px-4 py-2 border border-gray-300 rounded-full text-xs hover:border-black transition"
                >
                  ± 14 days
                </button>
              </div>
            </div>

            <!-- Who Dropdown -->
            <div
              *ngIf="activeTab === 'who'"
              class="absolute top-[80px] right-0 w-[400px] bg-white rounded-[32px] shadow-[0_8px_28px_rgba(0,0,0,0.28)] p-8 z-50 animate-fadeIn cursor-default"
            >
              <ng-container
                *ngTemplateOutlet="
                  counterTemplate;
                  context: { label: 'Adults', subLabel: 'Ages 13 or above', type: 'adults' }
                "
              ></ng-container>
              <ng-container
                *ngTemplateOutlet="
                  counterTemplate;
                  context: { label: 'Children', subLabel: 'Ages 2 – 12', type: 'children' }
                "
              ></ng-container>
              <ng-container
                *ngTemplateOutlet="
                  counterTemplate;
                  context: { label: 'Infants', subLabel: 'Under 2', type: 'infants' }
                "
              ></ng-container>
              <ng-container
                *ngTemplateOutlet="
                  counterTemplate;
                  context: { label: 'Pets', subLabel: 'Bringing a service animal?', type: 'pets' }
                "
              ></ng-container>
              <div class="mt-2 text-xs text-gray-500 underline cursor-pointer">
                Bringing a service animal?
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Search -->
        <div class="md:hidden mt-4">
          <div
            class="border-[1px] w-full py-3 rounded-full shadow-sm hover:shadow-md active:scale-[0.97] transition-all duration-200 cursor-pointer flex items-center gap-4 px-4 bg-white"
          >
            <span class="material-icons text-neutral-800 text-xl">search</span>
            <div class="flex flex-col">
              <span class="text-sm font-semibold">Where to?</span>
              <div class="flex text-xs text-neutral-500 gap-1">
                <span>Anywhere</span>
                <span>·</span>
                <span>Any week</span>
                <span>·</span>
                <span>Add guests</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Overlay -->
      <div
        *ngIf="activeTab || isUserMenuOpen"
        class="fixed inset-0 z-30 animate-fadeIn"
        [ngClass]="activeTab ? 'bg-black/25' : 'bg-transparent'"
        (click)="activeTab = null; isUserMenuOpen = false"
      ></div>
    </header>

    <!-- Templates -->
    <ng-template #counterTemplate let-label="label" let-subLabel="subLabel" let-type="type">
      <div
        class="flex flex-row items-center justify-between py-4 border-b border-gray-100 last:border-0"
      >
        <div class="flex flex-col">
          <div class="font-semibold text-sm text-neutral-800">{{ label }}</div>
          <div class="font-light text-sm text-neutral-500">{{ subLabel }}</div>
        </div>
        <div class="flex flex-row items-center gap-3">
          <button
            (click)="updateGuests(type, 'dec')"
            class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition"
            [ngClass]="guestCounts[type] === 0 ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'"
            [disabled]="guestCounts[type] === 0"
          >
            <span class="material-icons text-xs">remove</span>
          </button>
          <span class="w-6 text-center text-sm text-neutral-800 tabular-nums">{{
            guestCounts[type]
          }}</span>
          <button
            (click)="updateGuests(type, 'inc')"
            class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition cursor-pointer"
          >
            <span class="material-icons text-xs">add</span>
          </button>
        </div>
      </div>
    </ng-template>

    <ng-template #monthTemplate let-offset="offset">
      <div class="w-[340px]">
        <div class="flex justify-center items-center mb-4 relative">
          <span class="font-semibold text-base"
            >{{ getMonthName(offset) }} {{ getYear(offset) }}</span
          >
        </div>
        <div class="grid grid-cols-7 text-xs text-neutral-500 font-medium text-center mb-2">
          <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span
          ><span>S</span>
        </div>
        <div class="grid grid-cols-7 gap-y-1 justify-items-center">
          <div *ngFor="let empty of getEmptyDays(offset)" class="w-10 h-10"></div>
          <div
            *ngFor="let day of getDaysInMonth(offset)"
            (click)="handleDateClick(day.date)"
            class="w-10 h-10 flex items-center justify-center text-sm font-semibold rounded-full cursor-pointer border border-transparent transition relative z-10"
            [ngClass]="getDayClasses(day.date)"
          >
            {{ day.day }}
          </div>
        </div>
      </div>
    </ng-template>
  `,
})
export class NavbarComponent {
  airbnbImageUrl = AIRBNB_IMAGE_URL;
  isScrolled = false;
  activeTab: 'where' | 'when' | 'who' | null = null;
  isUserMenuOpen = false;

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  guestCounts: any = {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  };

  currentMonth = new Date(2025, 10, 1); // Nov 2025
  startDate: Date | null = null;
  endDate: Date | null = null;

  suggestedDestinations = [
    { name: 'Paris, France', sub: 'Based on your interest in history' },
    { name: 'Rome, Italy', sub: 'Based on your interest in history' },
    { name: 'Barcelona, Spain', sub: 'Popular beach destination' },
    { name: 'London, United Kingdom', sub: 'Based on your interest in history' },
    { name: 'Athens, Greece', sub: 'Based on your interest in history' },
    { name: 'Lisbon, Portugal', sub: 'For sights like Praça do Comércio' },
    { name: 'Amsterdam, Netherlands', sub: 'Famous for its canals' },
    { name: 'Berlin, Germany', sub: 'Known for art scenes' },
    { name: 'Prague, Czechia', sub: 'City of a Hundred Spires' },
    { name: 'Vienna, Austria', sub: 'Artistic and intellectual legacy' },
    { name: 'Budapest, Hungary', sub: 'Bisected by the Danube River' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 0) {
      this.isScrolled = true;
      this.activeTab = null;
      this.isUserMenuOpen = false;
    } else {
      this.isScrolled = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateGuests(type: string, operation: 'inc' | 'dec') {
    if (operation === 'inc') {
      this.guestCounts[type]++;
    } else {
      this.guestCounts[type] = Math.max(0, this.guestCounts[type] - 1);
    }
  }

  getDateRangeText(): string {
    if (this.startDate) {
      if (this.endDate) {
        return `${this.formatDate(this.startDate)} - ${this.formatDate(this.endDate)}`;
      }
      return this.formatDate(this.startDate);
    }
    return 'Add dates';
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  getGuestsText(): string {
    const total =
      this.guestCounts.adults +
      this.guestCounts.children +
      this.guestCounts.infants +
      this.guestCounts.pets;
    if (total > 0) {
      const mainGuests = this.guestCounts.adults + this.guestCounts.children;
      return `${mainGuests} guests${
        this.guestCounts.infants ? `, ${this.guestCounts.infants} infants` : ''
      }`;
    }
    return 'Add guests';
  }

  handleMonthChange(direction: 'prev' | 'next') {
    const newDate = new Date(this.currentMonth);
    newDate.setMonth(this.currentMonth.getMonth() + (direction === 'next' ? 1 : -1));
    this.currentMonth = newDate;
  }

  handleDateClick(date: Date) {
    if (!this.startDate || (this.startDate && this.endDate)) {
      this.startDate = date;
      this.endDate = null;
    } else if (date < this.startDate) {
      this.endDate = this.startDate;
      this.startDate = date;
    } else {
      this.endDate = date;
    }
  }

  isSelected(date: Date): boolean {
    return (
      (!!this.startDate && date.getTime() === this.startDate.getTime()) ||
      (!!this.endDate && date.getTime() === this.endDate.getTime())
    );
  }

  isInRange(date: Date): boolean {
    if (!this.startDate || !this.endDate) return false;
    return date > this.startDate && date < this.endDate;
  }

  getMonthName(offset: number): string {
    const date = new Date(this.currentMonth);
    date.setMonth(this.currentMonth.getMonth() + offset);
    return date.toLocaleString('default', { month: 'long' });
  }

  getYear(offset: number): number {
    const date = new Date(this.currentMonth);
    date.setMonth(this.currentMonth.getMonth() + offset);
    return date.getFullYear();
  }

  getEmptyDays(offset: number): any[] {
    const date = new Date(this.currentMonth);
    date.setMonth(this.currentMonth.getMonth() + offset);
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    return new Array(firstDay);
  }

  getDaysInMonth(offset: number): { day: number; date: Date }[] {
    const date = new Date(this.currentMonth);
    date.setMonth(this.currentMonth.getMonth() + offset);
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let d = 1; d <= daysInMonth; d++) {
      days.push({ day: d, date: new Date(year, month, d) });
    }
    return days;
  }

  getDayClasses(date: Date): string {
    let classes = '';
    const selected = this.isSelected(date);
    const inRange = this.isInRange(date);

    if (selected) {
      classes += 'bg-black text-white hover:bg-neutral-800';
    } else if (inRange) {
      classes += 'bg-neutral-100 text-black hover:bg-neutral-200 rounded-none';
    } else {
      classes += 'hover:border-black text-neutral-800';
    }

    if (
      inRange &&
      this.startDate &&
      date.getTime() === new Date(this.startDate.getTime() + 86400000).getTime()
    ) {
      classes += ' rounded-l-none';
    }
    return classes;
  }
}
