import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="py-12 border-t border-gray-200">
      <h2 class="text-2xl font-semibold mb-8 text-center sm:text-left">Guest favorite</h2>
      <div class="text-center sm:text-left mb-10">
        <div class="text-6xl font-bold mb-2">4.94</div>
        <div class="flex justify-center sm:justify-start flex-col items-center sm:items-start">
          <div class="text-lg font-semibold text-gray-800">
            One of the most loved homes on Airbnb
          </div>
          <div class="text-sm text-gray-500">Based on ratings, reviews, and reliability</div>
        </div>
      </div>

      <!-- Rating Categories Grid (Desktop) / Carousel (Mobile - simplified here) -->
      <div class="grid grid-cols-2 md:grid-cols-6 gap-4 mb-10 overflow-x-auto pb-4">
        <div class="border-r border-gray-200 last:border-0 px-2 min-w-[100px]">
          <div class="text-sm font-medium mb-1">Cleanliness</div>
          <div class="text-lg font-bold">5.0</div>
          <div class="w-8 h-8 mt-2 text-gray-800">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path
                d="M27 21v-4a2 2 0 0 0-2-2h-3a9 9 0 0 0-9-9 9 9 0 0 0-9 9v14h18v-8zM7 29v-6M12 29v-6M17 29v-6"
              />
            </svg>
          </div>
        </div>
        <div class="border-r border-gray-200 last:border-0 px-2 min-w-[100px]">
          <div class="text-sm font-medium mb-1">Accuracy</div>
          <div class="text-lg font-bold">5.0</div>
          <div class="w-8 h-8 mt-2 text-gray-800">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="16" cy="16" r="14" />
              <path d="M16 8v8l6 4" />
            </svg>
          </div>
        </div>
        <div class="border-r border-gray-200 last:border-0 px-2 min-w-[100px]">
          <div class="text-sm font-medium mb-1">Check-in</div>
          <div class="text-lg font-bold">5.0</div>
          <div class="w-8 h-8 mt-2 text-gray-800">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 2a10 10 0 1 0 10 10A10 10 0 0 0 16 2zm4 11h-4V8" />
            </svg>
          </div>
        </div>
        <div class="border-r border-gray-200 last:border-0 px-2 min-w-[100px]">
          <div class="text-sm font-medium mb-1">Communication</div>
          <div class="text-lg font-bold">5.0</div>
          <div class="w-8 h-8 mt-2 text-gray-800">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path
                d="M2 16c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10c-1.3 0-2.6-.2-3.8-.7L3 28l2.3-5.5C3.3 20.6 2 18.4 2 16z"
              />
            </svg>
          </div>
        </div>
        <div class="border-r border-gray-200 last:border-0 px-2 min-w-[100px]">
          <div class="text-sm font-medium mb-1">Location</div>
          <div class="text-lg font-bold">5.0</div>
          <div class="w-8 h-8 mt-2 text-gray-800">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 2C10 2 6 6 6 12c0 6 10 18 10 18s10-12 10-18c0-6-4-10-10-10z" />
              <circle cx="16" cy="12" r="3" />
            </svg>
          </div>
        </div>
        <div class="border-r border-gray-200 last:border-0 px-2 min-w-[100px]">
          <div class="text-sm font-medium mb-1">Value</div>
          <div class="text-lg font-bold">4.9</div>
          <div class="w-8 h-8 mt-2 text-gray-800">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M28 14l-12 12c-1 1-3 1-4 0L3 17l11-14h8a4 4 0 0 1 4 4v7z" />
              <circle cx="21" cy="9" r="2" />
            </svg>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        <div *ngFor="let review of mockReviews" class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <img
              [src]="review.avatarUrl"
              [alt]="review.author"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 class="font-semibold text-gray-900">{{ review.author }}</h4>
              <p class="text-sm text-gray-500">{{ review.location }}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 text-xs text-gray-800 font-medium">
            <div class="flex gap-0.5">
              <svg
                *ngFor="let i of [1, 2, 3, 4, 5]"
                viewBox="0 0 32 32"
                width="10"
                height="10"
                fill="currentColor"
              >
                <path
                  d="M15.094 1.579l-4.124 8.885-9.86 1.189a1 1 0 0 0-.563 1.751l7.365 6.711-2.008 9.643a1 1 0 0 0 1.487 1.053L16 25.967l8.61 4.844a1 1 0 0 0 1.487-1.053l-2.008-9.643 7.365-6.711a1 1 0 0 0-.563-1.751l-9.86-1.189-4.124-8.885a1 1 0 0 0-1.814 0z"
                ></path>
              </svg>
            </div>
            <span>•</span>
            <span class="text-gray-500">{{ review.date }} • Stayed a few nights</span>
          </div>
          <div>
            <p class="text-gray-800 text-sm leading-relaxed line-clamp-3">
              {{ review.comment }}
            </p>
            <button class="text-black font-semibold underline mt-2 text-sm">Show more</button>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <button
          class="border border-gray-900 rounded-lg px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition"
        >
          Show all 181 reviews
        </button>
      </div>
    </div>
  `,
})
export class ReviewsComponent {
  mockReviews = [
    {
      id: '1',
      author: 'Hassan',
      location: 'Bethlehem, Pennsylvania',
      date: '3 weeks ago',
      rating: 5,
      comment:
        'Catalina is a great host and always ready to help. Her apartment is in a wonderful area in Paris where you are at literally a few steps from one the most iconic restaurants...',
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    },
    {
      id: '2',
      author: 'Grace S Kim',
      location: '12 years on Airbnb',
      date: '1 week ago',
      rating: 5,
      comment:
        'If you want to feel the vibe of a traditional Parisian home, I totally recommend this place! When I checked in and opened the door, the beautiful interior...',
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    {
      id: '3',
      author: 'Hazuki',
      location: 'Kobe, Japan',
      date: '4 weeks ago',
      rating: 5,
      comment:
        'Mrs. Catalina was a really nice host. She prepared a warm, welcoming place for a guest with helpful and kind instructions...',
      avatarUrl: 'https://i.pravatar.cc/150?u=a04258114e29026704d',
    },
    {
      id: '4',
      author: 'Madeline',
      location: '10 years on Airbnb',
      date: 'October 2025',
      rating: 5,
      comment:
        "I loved staying at Catalina's home. It's in a great neighborhood, walking distance to shops, public transportation and restaurants...",
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026702d',
    },
    {
      id: '5',
      author: 'John',
      location: 'Toronto, Canada',
      date: 'October 2025',
      rating: 5,
      comment:
        "I loved staying at Catalina's place. It was clean, beautiful and right in the middle of Saint Germain des Pres, the best part of the city. The apartment is close...",
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026701d',
    },
    {
      id: '6',
      author: 'Anna',
      location: '2 months on Airbnb',
      date: 'October 2025',
      rating: 4,
      comment:
        "I stayed at Catalina's place for three days. The location is perfect — a beautiful and convenient area of Paris. The room was clean and comfortable...",
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026709d',
    },
  ];
}
