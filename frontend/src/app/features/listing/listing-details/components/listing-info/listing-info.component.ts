import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { GuestFavoriteBadgeComponent } from '../guest-favorite-badge/guest-favorite-badge.component';

@Component({
  selector: 'app-listing-info',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, GuestFavoriteBadgeComponent],
  template: `
    <div class="pt-8 pb-12">
      <div class="flex justify-between items-start pb-6 border-b border-gray-200">
        <div>
          <h2 class="text-2xl font-semibold mb-1">Room in Paris, France</h2>
          <p class="text-gray-800">1 bed · Shared bathroom</p>
          <div class="mt-6 flex gap-2 items-center">
            <app-guest-favorite-badge></app-guest-favorite-badge>
          </div>
        </div>
      </div>

      <!-- Host Mini Profile -->
      <div class="py-6 border-b border-gray-200 flex items-center gap-4">
        <div class="relative">
          <img
            src="https://i.pravatar.cc/150?u=catalina"
            alt="Host"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div
            class="absolute bottom-0 right-0 bg-[#FF385C] rounded-full p-1 border-2 border-white"
          >
            <lucide-icon name="shield-check" [size]="10" color="white"></lucide-icon>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-900">Stay with Catalina</h3>
          <p class="text-gray-500 text-sm">Superhost · 9 years hosting</p>
        </div>
      </div>

      <!-- Highlights -->
      <div class="py-8 border-b border-gray-200 flex flex-col gap-6">
        <div class="flex gap-4">
          <lucide-icon name="award" [size]="24" class="text-gray-900 shrink-0"></lucide-icon>
          <div>
            <h3 class="font-semibold text-gray-900">Top 5% of homes</h3>
            <p class="text-gray-500 text-sm">
              This home is highly ranked based on ratings, reviews, and reliability.
            </p>
          </div>
        </div>
        <div class="flex gap-4">
          <lucide-icon name="key" [size]="24" class="text-gray-900 shrink-0"></lucide-icon>
          <div>
            <h3 class="font-semibold text-gray-900">Room in a rental unit</h3>
            <p class="text-gray-500 text-sm">
              Your own room in a home, plus access to shared spaces.
            </p>
          </div>
        </div>
        <div class="flex gap-4">
          <lucide-icon name="calendar" [size]="24" class="text-gray-900 shrink-0"></lucide-icon>
          <div>
            <h3 class="font-semibold text-gray-900">Free cancellation for 24 hours</h3>
            <p class="text-gray-500 text-sm">Get a full refund if you change your mind.</p>
          </div>
        </div>
      </div>

      <!-- Description -->
      <div class="py-8 border-b border-gray-200">
        <p class="text-gray-800 leading-relaxed mb-4">
          The flat is in the Saint-Germain-des-Prés area, close to the Notre-Dame cathedral, the
          Louvre museum and the Luxembourg park. The bedroom is 17 m2. You will appreciate the
          comfortable new queen size bed (160x200cm), the ceiling height, the wooden desk, the large
          closet and the flowered balcony. The place is perfect for business trips and solo
          travelers.<br />
          3 subway stations are across the street: "Saint-Germain-des-Prés", "Saint-Sulpice" and
          "Mabillon".
        </p>
        <button class="font-semibold underline flex items-center gap-1 text-gray-900">
          Show more <lucide-icon name="chevron-right" [size]="16"></lucide-icon>
        </button>
      </div>

      <!-- Amenities -->
      <div class="py-12 border-b border-gray-200">
        <h2 class="text-2xl font-semibold mb-6">What this place offers</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4">
          <div class="flex items-center gap-4 text-gray-700">
            <span class="text-gray-800"><lucide-icon name="key" [size]="24"></lucide-icon></span>
            <span>Lock on bedroom door</span>
          </div>
          <div class="flex items-center gap-4 text-gray-700">
            <span class="text-gray-800"><lucide-icon name="wifi" [size]="24"></lucide-icon></span>
            <span>Wifi</span>
          </div>
          <div class="flex items-center gap-4 text-gray-700">
            <span class="text-gray-800"
              ><lucide-icon name="monitor" [size]="24"></lucide-icon
            ></span>
            <span>Dedicated workspace</span>
          </div>
          <div class="flex items-center gap-4 text-gray-700">
            <span class="text-gray-800"
              ><div
                class="w-6 h-6 border-2 border-current rounded flex items-center justify-center text-[10px] font-bold"
              >
                E
              </div></span
            >
            <span>Elevator</span>
          </div>
          <div class="flex items-center gap-4 text-gray-700">
            <span class="text-gray-800"><lucide-icon name="user" [size]="24"></lucide-icon></span>
            <span>Washer</span>
          </div>
          <div class="flex items-center gap-4 text-gray-700">
            <span class="text-gray-800"
              ><div
                class="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center text-[8px]"
              >
                DRY
              </div></span
            >
            <span>Dryer</span>
          </div>
          <div class="flex items-center gap-4 text-gray-700">
            <span class="text-gray-800"
              ><lucide-icon name="shield-check" [size]="24"></lucide-icon
            ></span>
            <span>Luggage dropoff allowed</span>
          </div>
          <div class="flex items-center gap-4 text-gray-700">
            <span class="text-gray-800"><lucide-icon name="user" [size]="24"></lucide-icon></span>
            <span>Children's books and toys for ages 10+ years old</span>
          </div>
          <div class="flex items-center gap-4 text-gray-700">
            <span class="text-gray-800"
              ><div class="w-6 h-6 rotate-45 border-r-2 border-b-2 border-current"></div
            ></span>
            <span>Hair dryer</span>
          </div>
          <div class="flex items-center gap-4 text-gray-700">
            <span class="text-gray-800"><div class="w-6 h-6 border border-current"></div></span>
            <span>Refrigerator</span>
          </div>
        </div>
      </div>

      <!-- Calendar Preview -->
      <div class="py-12">
        <h2 class="text-2xl font-semibold mb-2">{{ getDateRangeText() }}</h2>
        <p class="text-gray-500 mb-6">{{ getDateRangeSubText() }}</p>

        <!-- Dynamic Calendar Visual -->
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Month 1 -->
          <div class="flex-1">
            <div class="flex justify-between items-center mb-4">
              <button
                (click)="handleMonthChange('prev')"
                class="p-2 hover:bg-gray-100 rounded-full"
              >
                <lucide-icon name="chevron-left" [size]="16"></lucide-icon>
              </button>
              <span class="font-semibold">{{ getMonthName(0) }} {{ getYear(0) }}</span>
              <div class="w-8"></div>
            </div>
            <div class="grid grid-cols-7 text-center text-xs text-gray-500 gap-y-4">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span
              ><span>S</span>
            </div>
            <div class="grid grid-cols-7 gap-y-1 justify-items-center mt-2">
              <div *ngFor="let empty of getEmptyDays(0)" class="w-10 h-10"></div>
              <div
                *ngFor="let day of getDaysInMonth(0)"
                (click)="handleDateClick(day.date)"
                class="w-10 h-10 flex items-center justify-center text-sm font-semibold rounded-full cursor-pointer border border-transparent transition relative z-10"
                [ngClass]="getDayClasses(day.date)"
              >
                {{ day.day }}
              </div>
            </div>
          </div>
          <!-- Month 2 -->
          <div class="flex-1 hidden md:block">
            <div class="flex justify-between items-center mb-4">
              <div class="w-8"></div>
              <span class="font-semibold">{{ getMonthName(1) }} {{ getYear(1) }}</span>
              <button
                (click)="handleMonthChange('next')"
                class="p-2 hover:bg-gray-100 rounded-full"
              >
                <lucide-icon name="chevron-right" [size]="16"></lucide-icon>
              </button>
            </div>
            <div class="grid grid-cols-7 text-center text-xs text-gray-500 gap-y-4">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span
              ><span>S</span>
            </div>
            <div class="grid grid-cols-7 gap-y-1 justify-items-center mt-2">
              <div *ngFor="let empty of getEmptyDays(1)" class="w-10 h-10"></div>
              <div
                *ngFor="let day of getDaysInMonth(1)"
                (click)="handleDateClick(day.date)"
                class="w-10 h-10 flex items-center justify-center text-sm font-semibold rounded-full cursor-pointer border border-transparent transition relative z-10"
                [ngClass]="getDayClasses(day.date)"
              >
                {{ day.day }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center mt-4 text-sm font-semibold underline">
          <lucide-icon name="calendar" class="w-6 h-6 mr-2 inline"></lucide-icon>
          <button (click)="clearDates()" class="text-gray-900 underline ml-auto">
            Clear dates
          </button>
        </div>
      </div>
    </div>
  `,
})
export class ListingInfoComponent {
  @Input() startDate: Date | null = null;
  @Input() endDate: Date | null = null;
  @Output() datesChange = new EventEmitter<{ startDate: Date | null; endDate: Date | null }>();

  currentMonth = new Date();

  clearDates() {
    this.datesChange.emit({ startDate: null, endDate: null });
  }

  handleMonthChange(direction: 'prev' | 'next') {
    const newDate = new Date(this.currentMonth);
    newDate.setMonth(this.currentMonth.getMonth() + (direction === 'next' ? 1 : -1));
    this.currentMonth = newDate;
  }

  handleDateClick(date: Date) {
    let newStart = this.startDate;
    let newEnd = this.endDate;

    if (!newStart || (newStart && newEnd)) {
      newStart = date;
      newEnd = null;
    } else if (date < newStart) {
      newEnd = newStart;
      newStart = date;
    } else {
      newEnd = date;
    }

    this.datesChange.emit({ startDate: newStart, endDate: newEnd });
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
    date.setDate(1);
    return new Array(date.getDay());
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
      classes += 'hover:border-black text-neutral-800 hover:bg-gray-100';
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

  getDateRangeText(): string {
    if (this.startDate && this.endDate) {
      const nights = Math.ceil(
        (this.endDate.getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      return `${nights} nights in Paris`;
    }
    return 'Select dates';
  }

  getDateRangeSubText(): string {
    if (this.startDate && this.endDate) {
      return `${this.formatDate(this.startDate)} - ${this.formatDate(this.endDate)}`;
    }
    return 'Add your travel dates for exact pricing';
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
}
