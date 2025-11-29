import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-booking-widget',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="sticky top-28 w-full md:w-[370px] ml-auto relative">
      <div
        class="bg-white rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] border border-gray-200 p-6 relative z-10"
      >
        <!-- Header (Price & Rating) -->
        <div class="flex justify-between items-start mb-6">
          <div class="flex flex-col">
            <span class="text-2xl font-semibold">€147</span>
            <span class="text-gray-500 text-sm">Total price for 5 nights</span>
          </div>
        </div>

        <!-- Date Picker Inputs -->
        <div class="border border-gray-400 rounded-lg overflow-hidden mb-4 relative">
          <div class="flex border-b border-gray-400">
            <div
              (click)="toggleCalendar()"
              class="flex-1 p-3 border-r border-gray-400 cursor-pointer hover:bg-gray-50"
            >
              <div class="text-[10px] font-bold uppercase tracking-wider text-gray-800">
                Check-in
              </div>
              <div class="text-sm text-gray-600">
                {{ startDate ? formatDate(startDate) : 'Add date' }}
              </div>
            </div>
            <div (click)="toggleCalendar()" class="flex-1 p-3 cursor-pointer hover:bg-gray-50">
              <div class="text-[10px] font-bold uppercase tracking-wider text-gray-800">
                Checkout
              </div>
              <div class="text-sm text-gray-600">
                {{ endDate ? formatDate(endDate) : 'Add date' }}
              </div>
            </div>
          </div>
          <div
            (click)="toggleGuestDropdown()"
            class="p-3 cursor-pointer hover:bg-gray-50 flex justify-between items-center"
          >
            <div>
              <div class="text-[10px] font-bold uppercase tracking-wider text-gray-800">Guests</div>
              <div class="text-sm text-gray-600">{{ getGuestSummary() }}</div>
            </div>
            <lucide-icon
              name="chevron-right"
              [class]="isGuestDropdownOpen ? '-rotate-90' : 'rotate-90'"
              [size]="16"
            ></lucide-icon>
          </div>
        </div>

        <!-- Reserve Button -->
        <button
          class="w-full bg-[#FF385C] hover:bg-[#D90B3E] text-white font-semibold py-3.5 rounded-lg text-lg transition duration-200 mb-4"
        >
          Reserve
        </button>

        <p class="text-center text-sm text-gray-500 mb-6">You won't be charged yet</p>

        <!-- Price Breakdown -->
        <div class="space-y-4 text-gray-600">
          <div class="flex justify-between">
            <span class="underline decoration-gray-400">€147 x 5 nights</span>
            <span>€735</span>
          </div>
          <div class="flex justify-between">
            <span class="underline decoration-gray-400">Cleaning fee</span>
            <span>€30</span>
          </div>
          <div class="flex justify-between">
            <span class="underline decoration-gray-400">Airbnb service fee</span>
            <span>€108</span>
          </div>
          <hr class="my-4 border-gray-200" />
          <div class="flex justify-between font-bold text-gray-900 text-lg">
            <span>Total before taxes</span>
            <span>€873</span>
          </div>
        </div>
      </div>

      <!-- Calendar Popup -->
      <div
        *ngIf="isCalendarOpen"
        class="absolute top-0 right-0 w-[660px] bg-white rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.28)] p-6 z-50 animate-fadeIn border border-gray-200"
        style="margin-top: 100px; margin-right: -20px;"
      >
        <!-- ... (Calendar content remains same) ... -->
        <!-- Header with Close/Clear -->
        <div class="flex justify-between items-center mb-6">
          <div>
            <h2 class="text-xl font-semibold">Select dates</h2>
            <p class="text-sm text-gray-500">Add your travel dates for exact pricing</p>
          </div>
          <div class="flex gap-4">
            <button
              (click)="clearDates()"
              class="text-sm font-semibold underline hover:bg-gray-100 px-3 py-2 rounded-lg"
            >
              Clear dates
            </button>
            <button
              (click)="closeCalendar()"
              class="bg-black text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>

        <!-- Calendar Controls -->
        <div class="flex gap-8 justify-center relative">
          <button
            (click)="handleMonthChange('prev')"
            class="absolute left-0 top-1 p-2 rounded-full hover:bg-gray-100 z-10"
          >
            <lucide-icon name="chevron-left" [size]="20"></lucide-icon>
          </button>

          <!-- Month 1 -->
          <ng-container *ngTemplateOutlet="monthTemplate; context: { offset: 0 }"></ng-container>

          <!-- Month 2 -->
          <ng-container *ngTemplateOutlet="monthTemplate; context: { offset: 1 }"></ng-container>

          <button
            (click)="handleMonthChange('next')"
            class="absolute right-0 top-1 p-2 rounded-full hover:bg-gray-100 z-10"
          >
            <lucide-icon name="chevron-right" [size]="20"></lucide-icon>
          </button>
        </div>
      </div>

      <!-- Guests Dropdown -->
      <div
        *ngIf="isGuestDropdownOpen"
        class="absolute top-0 right-0 w-[350px] bg-white rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.28)] p-6 z-50 animate-fadeIn border border-gray-200"
        style="margin-top: 230px; margin-right: -20px;"
      >
        <!-- Adults -->
        <div class="flex justify-between items-center py-4 border-b border-gray-100">
          <div>
            <div class="font-semibold text-gray-900">Adults</div>
            <div class="text-sm text-gray-500">Age 18+</div>
          </div>
          <div class="flex items-center gap-3">
            <button
              (click)="updateGuestCount('adults', -1)"
              [disabled]="adults <= 1"
              class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black disabled:opacity-20 disabled:hover:border-gray-300"
            >
              <span class="material-icons text-xs" style="font-size: 20px;">remove</span>
            </button>
            <span class="w-4 text-center">{{ adults }}</span>
            <button
              (click)="updateGuestCount('adults', 1)"
              class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black"
            >
              <span class="material-icons text-xs" style="font-size: 20px;">add</span>
            </button>
          </div>
        </div>

        <!-- Children -->
        <div class="flex justify-between items-center py-4 border-b border-gray-100">
          <div>
            <div class="font-semibold text-gray-900">Children</div>
            <div class="text-sm text-gray-500">Ages 2–17</div>
          </div>
          <div class="flex items-center gap-3">
            <button
              (click)="updateGuestCount('children', -1)"
              [disabled]="children <= 0"
              class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black disabled:opacity-20 disabled:hover:border-gray-300"
            >
              <span class="material-icons text-xs" style="font-size: 20px;">remove</span>
            </button>
            <span class="w-4 text-center">{{ children }}</span>
            <button
              (click)="updateGuestCount('children', 1)"
              class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black"
            >
              <span class="material-icons text-xs" style="font-size: 20px;">add</span>
            </button>
          </div>
        </div>

        <!-- Infants -->
        <div class="flex justify-between items-center py-4 border-b border-gray-100">
          <div>
            <div class="font-semibold text-gray-900">Infants</div>
            <div class="text-sm text-gray-500">Under 2</div>
          </div>
          <div class="flex items-center gap-3">
            <button
              (click)="updateGuestCount('infants', -1)"
              [disabled]="infants <= 0"
              class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black disabled:opacity-20 disabled:hover:border-gray-300"
            >
              <span class="material-icons text-xs" style="font-size: 20px;">remove</span>
            </button>
            <span class="w-4 text-center">{{ infants }}</span>
            <button
              (click)="updateGuestCount('infants', 1)"
              class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black"
            >
              <span class="material-icons text-xs" style="font-size: 20px;">add</span>
            </button>
          </div>
        </div>

        <!-- Pets -->
        <div class="flex justify-between items-center py-4 border-b border-gray-100">
          <div>
            <div class="font-semibold text-gray-900">Pets</div>
            <div class="text-sm font-semibold underline text-gray-900">
              Bringing a service animal?
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button
              (click)="updateGuestCount('pets', -1)"
              [disabled]="pets <= 0"
              class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black disabled:opacity-20 disabled:hover:border-gray-300"
            >
              <span class="material-icons text-xs" style="font-size: 20px;">remove</span>
            </button>
            <span class="w-4 text-center">{{ pets }}</span>
            <button
              (click)="updateGuestCount('pets', 1)"
              class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black"
            >
              <span class="material-icons text-xs" style="font-size: 20px;">add</span>
            </button>
          </div>
        </div>

        <p class="text-xs text-gray-500 mt-4 mb-4">
          This place has a maximum of 2 guests, not including infants. If you're bringing more than
          2 pets, please let your host know.
        </p>

        <div class="flex justify-end">
          <button
            (click)="closeGuestDropdown()"
            class="text-black font-semibold underline text-sm hover:bg-gray-100 px-3 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>

      <!-- Overlay to close calendar/dropdown -->
      <div
        *ngIf="isCalendarOpen || isGuestDropdownOpen"
        class="fixed inset-0 z-0"
        (click)="closeAll()"
      ></div>
    </div>

    <!-- Month Template -->
    <ng-template #monthTemplate let-offset="offset">
      <div class="w-[300px]">
        <div class="flex justify-center items-center mb-4 relative">
          <span class="font-semibold text-base"
            >{{ getMonthName(offset) }} {{ getYear(offset) }}</span
          >
        </div>
        <div class="grid grid-cols-7 text-xs text-gray-500 font-medium text-center mb-2">
          <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span
          ><span>Sa</span>
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
export class BookingWidgetComponent {
  @Input() startDate: Date | null = null;
  @Input() endDate: Date | null = null;
  @Output() datesChange = new EventEmitter<{ startDate: Date | null; endDate: Date | null }>();

  isCalendarOpen = false;
  isGuestDropdownOpen = false;
  currentMonth = new Date();

  adults = 1;
  children = 0;
  infants = 0;
  pets = 0;

  toggleCalendar() {
    this.isCalendarOpen = !this.isCalendarOpen;
    this.isGuestDropdownOpen = false;
  }

  toggleGuestDropdown() {
    this.isGuestDropdownOpen = !this.isGuestDropdownOpen;
    this.isCalendarOpen = false;
  }

  closeCalendar() {
    this.isCalendarOpen = false;
  }

  closeGuestDropdown() {
    this.isGuestDropdownOpen = false;
  }

  closeAll() {
    this.isCalendarOpen = false;
    this.isGuestDropdownOpen = false;
  }

  updateGuestCount(type: 'adults' | 'children' | 'infants' | 'pets', change: number) {
    if (type === 'adults') {
      this.adults = Math.max(1, this.adults + change);
    } else if (type === 'children') {
      this.children = Math.max(0, this.children + change);
    } else if (type === 'infants') {
      this.infants = Math.max(0, this.infants + change);
    } else if (type === 'pets') {
      this.pets = Math.max(0, this.pets + change);
    }
  }

  getGuestSummary(): string {
    const totalGuests = this.adults + this.children;
    let summary = `${totalGuests} guest${totalGuests !== 1 ? 's' : ''}`;

    if (this.infants > 0) {
      summary += `, ${this.infants} infant${this.infants !== 1 ? 's' : ''}`;
    }
    if (this.pets > 0) {
      summary += `, ${this.pets} pet${this.pets !== 1 ? 's' : ''}`;
    }
    return summary;
  }

  clearDates() {
    this.datesChange.emit({ startDate: null, endDate: null });
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
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
}
