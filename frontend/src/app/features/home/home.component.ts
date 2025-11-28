import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { MobileNavComponent } from '../../layout/mobile-nav/mobile-nav.component';
import { SectionComponent } from './components/section/section.component';

import {
  LISTINGS_SEVILLE,
  LISTINGS_PARIS,
  LISTINGS_LONDON,
  LISTINGS_ROME,
} from '../../shared/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, MobileNavComponent, SectionComponent],
  template: `
    <div class="min-h-screen bg-white pb-20 md:pb-0 font-sans text-neutral-800 relative">
      <!-- Navbar -->
      <app-navbar></app-navbar>

      <!-- Main Content -->

      <main class="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 pt-[220px]">
        <app-section title="Popular homes in Seville" [items]="listingsSeville"></app-section>
        <app-section title="Available next month in Paris" [items]="listingsParis"></app-section>
        <app-section title="Stay in London" [items]="listingsLondon"></app-section>
        <app-section title="Available next month in Rome" [items]="listingsRome"></app-section>
      </main>

      <!-- Footer & Mobile Nav -->
      <app-footer></app-footer>
      <app-mobile-nav></app-mobile-nav>
    </div>
  `,
})
export class HomeComponent {
  listingsSeville = LISTINGS_SEVILLE;
  listingsParis = LISTINGS_PARIS;
  listingsLondon = LISTINGS_LONDON;
  listingsRome = LISTINGS_ROME;
}
