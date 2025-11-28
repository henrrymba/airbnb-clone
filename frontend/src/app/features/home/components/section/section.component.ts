import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Listing } from '../../../../shared/types';
import { ListingCardComponent } from '../../../../shared/components/listing-card/listing-card.component';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule, ListingCardComponent],
  template: `
    <section class="py-4 group">
      <!-- Header -->
      <div class="flex flex-row items-center justify-between mb-4 px-1">
        <h2
          class="text-lg md:text-xl font-bold text-neutral-800 flex items-center gap-2 cursor-pointer hover:text-neutral-600 transition"
        >
          {{ title }}
          <span class="material-icons text-xl">chevron_right</span>
        </h2>

        <div class="hidden md:flex flex-row gap-2">
          <button
            (click)="scroll('left')"
            class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-md hover:border-black transition disabled:opacity-50 disabled:cursor-not-allowed bg-white"
            [disabled]="isAtStart"
          >
            <span class="material-icons text-sm">chevron_left</span>
          </button>
          <button
            (click)="scroll('right')"
            class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-md hover:border-black transition bg-white"
          >
            <span class="material-icons text-sm">chevron_right</span>
          </button>
        </div>
      </div>

      <!-- Scroll Container -->
      <div
        #scrollContainer
        class="flex flex-row gap-6 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 scroll-smooth"
        (scroll)="checkScroll()"
      >
        <div
          *ngFor="let item of items"
          class="flex-shrink-0 w-[240px] md:w-[17%]"
          style="min-width: 150px"
        >
          <app-listing-card [data]="item"></app-listing-card>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `,
  ],
})
export class SectionComponent {
  @Input() title: string = '';
  @Input() items: Listing[] = [];

  @ViewChild('scrollContainer') scrollContainerRef!: ElementRef<HTMLDivElement>;
  isAtStart = true;

  scroll(direction: 'left' | 'right') {
    if (this.scrollContainerRef) {
      const container = this.scrollContainerRef.nativeElement;
      const scrollAmount = container.clientWidth / 2;

      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  }

  checkScroll() {
    if (this.scrollContainerRef) {
      this.isAtStart = this.scrollContainerRef.nativeElement.scrollLeft <= 0;
    }
  }
}
