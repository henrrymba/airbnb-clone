import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingShelf } from './listing-shelf';

describe('ListingShelf', () => {
  let component: ListingShelf;
  let fixture: ComponentFixture<ListingShelf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingShelf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingShelf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
