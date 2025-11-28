export interface Listing {
  id: number;
  location: string;
  distance: string;
  dates: string;
  price: number;
  rating: number;
  isGuestFavorite: boolean;
  image: string;
  nights: number;
}

export interface Category {
  label: string;
  iconName: string;
}
