export interface Listing {
  id: string;
  title: string; // "Apartment in Arenal"
  location: string; // "Seville, Spain"
  category: string; // "Individual host" o "Business host"
  dates: string; // "Dec 12 - 14"
  price: number; // 195
  rating: number; // 4.98
  imageUrl: string; // URL de la foto
  isGuestFavorite: boolean; // Para el badge "Guest favorite"
  isAvailable?: boolean; // Para lógica futura
}
