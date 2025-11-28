import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CATEGORIES } from '../../../../shared/constants';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="pt-[140px] md:pt-[190px] pb-4 sticky top-[70px] md:top-[150px] bg-white z-40 shadow-sm md:shadow-none transition-all duration-300"
    >
      <div
        class="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 flex flex-row items-center justify-between"
      >
        <!-- Categories Bar -->
        <div
          class="flex-1 flex flex-row items-center justify-between overflow-x-auto no-scrollbar pt-4 gap-8"
        >
          <div
            *ngFor="let item of categories"
            (click)="selectedCategory = item.label"
            class="flex flex-col items-center justify-center gap-2 p-2 border-b-2 hover:text-neutral-800 transition cursor-pointer min-w-fit group"
            [ngClass]="
              selectedCategory === item.label
                ? 'border-neutral-800 text-neutral-800'
                : 'border-transparent text-neutral-500'
            "
          >
            <span
              class="material-icons text-2xl"
              [ngClass]="
                selectedCategory === item.label
                  ? 'text-black'
                  : 'text-gray-500 group-hover:text-black'
              "
              >{{ getIconName(item.iconName) }}</span
            >
            <div class="font-medium text-xs">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
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
export class CategoriesComponent {
  categories = CATEGORIES;
  selectedCategory = 'Amazing pools';

  getIconName(name: string): string {
    switch (name) {
      case 'Pool':
        return 'pool';
      case 'Castle':
        return 'castle';
      case 'Palmtree':
        return 'beach_access';
      case 'Umbrella':
        return 'beach_access';
      case 'Ufo':
        return 'star';
      case 'Pencil':
        return 'edit';
      case 'Snowflake':
        return 'ac_unit';
      case 'Home':
        return 'home';
      case 'Diamond':
        return 'diamond';
      case 'Tent':
        return 'terrain';
      case 'Trees':
        return 'forest';
      case 'Club':
        return 'local_activity';
      case 'Tractor':
        return 'agriculture';
      case 'Mountain':
        return 'landscape';
      case 'Grape':
        return 'wine_bar';
      default:
        return 'home';
    }
  }
}
