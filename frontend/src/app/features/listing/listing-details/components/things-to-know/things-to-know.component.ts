import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-things-to-know',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="py-12 border-t border-gray-200">
      <h2 class="text-2xl font-semibold mb-6">Things to know</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="font-semibold mb-3">House rules</h3>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li>Check-in: 2:00 PM - 9:00 PM</li>
            <li>Checkout before 10:00 AM</li>
            <li>1 guest maximum</li>
          </ul>
          <button class="mt-4 font-semibold underline text-sm flex items-center gap-1">
            Show more
            <lucide-icon name="chevron-right" [size]="14"></lucide-icon>
          </button>
        </div>
        <div>
          <h3 class="font-semibold mb-3">Safety & property</h3>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li>Carbon monoxide alarm</li>
            <li>Smoke alarm</li>
            <li>Not suitable for infants (under 2 years)</li>
          </ul>
          <button class="mt-4 font-semibold underline text-sm flex items-center gap-1">
            Show more
            <lucide-icon name="chevron-right" [size]="14"></lucide-icon>
          </button>
        </div>
        <div>
          <h3 class="font-semibold mb-3">Cancellation policy</h3>
          <p class="text-gray-600 text-sm mb-3">
            Free cancellation for 24 hours. Cancel before December 12 for a partial refund.
          </p>
          <p class="text-gray-600 text-sm mb-3">Review this host's full policy for details.</p>
          <button class="mt-4 font-semibold underline text-sm flex items-center gap-1">
            Show more
            <lucide-icon name="chevron-right" [size]="14"></lucide-icon>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class ThingsToKnowComponent {}
