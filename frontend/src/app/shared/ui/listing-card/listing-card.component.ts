import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Listing } from '../../../core/models/listing.model';

@Component({
  selector: 'app-listing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listing-card.component.html',
  styleUrl: './listing-card.component.scss',
})
export class ListingCardComponent {
  @Input() listing!: Listing;
}
