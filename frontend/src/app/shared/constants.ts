import { Listing, Category } from './types';

export const AIRBNB_IMAGE_URL =
  'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1656&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const CATEGORIES: Category[] = [
  { label: 'Amazing pools', iconName: 'Pool' },
  { label: 'Castles', iconName: 'Castle' },
  { label: 'Tropical', iconName: 'Palmtree' },
  { label: 'Beach', iconName: 'Umbrella' },
  { label: 'Luxe', iconName: 'Diamond' },
  { label: 'Arctic', iconName: 'Snowflake' },
  { label: 'Design', iconName: 'Pencil' },
  { label: 'Cabins', iconName: 'Home' },
  { label: 'Camping', iconName: 'Tent' },
  { label: 'Countryside', iconName: 'Tractor' },
  { label: 'National parks', iconName: 'Mountain' },
  { label: 'Vineyards', iconName: 'Grape' },
];

export const LISTINGS_SEVILLE: Listing[] = [
  {
    id: 1,
    location: 'Place to stay in Seville',
    distance: 'Individual host',
    dates: 'Feb 2 - 7',
    price: 128,
    rating: 4.98,
    isGuestFavorite: true,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 2,
    location: 'Apartment in Seville',
    distance: 'Professional host',
    dates: 'Feb 5 - 10',
    price: 245,
    rating: 4.85,
    isGuestFavorite: false,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 3,
    location: 'Loft in Seville',
    distance: 'Individual host',
    dates: 'Feb 12 - 17',
    price: 180,
    rating: 5.0,
    isGuestFavorite: true,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 4,
    location: 'Room in Seville',
    distance: 'Individual host',
    dates: 'Feb 15 - 20',
    price: 95,
    rating: 4.75,
    isGuestFavorite: false,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 5,
    location: 'Place to stay in Seville',
    distance: 'Individual host',
    dates: 'Feb 20 - 25',
    price: 310,
    rating: 4.92,
    isGuestFavorite: true,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 6,
    location: 'Apartment in Seville',
    distance: 'Professional host',
    dates: 'Feb 22 - 27',
    price: 150,
    rating: 4.88,
    isGuestFavorite: false,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
];

export const LISTINGS_PARIS: Listing[] = [
  {
    id: 101,
    location: 'Place to stay in Paris',
    distance: 'Individual host',
    dates: 'Mar 10 - 15',
    price: 450,
    rating: 4.95,
    isGuestFavorite: true,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 102,
    location: 'Apartment in Paris',
    distance: 'Professional host',
    dates: 'Mar 12 - 17',
    price: 320,
    rating: 4.8,
    isGuestFavorite: false,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 103,
    location: 'Room in Paris',
    distance: 'Individual host',
    dates: 'Mar 15 - 20',
    price: 210,
    rating: 4.7,
    isGuestFavorite: false,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 104,
    location: 'Loft in Paris',
    distance: 'Individual host',
    dates: 'Mar 18 - 23',
    price: 550,
    rating: 5.0,
    isGuestFavorite: true,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 105,
    location: 'Place to stay in Paris',
    distance: 'Professional host',
    dates: 'Mar 20 - 25',
    price: 400,
    rating: 4.85,
    isGuestFavorite: true,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 106,
    location: 'Apartment in Paris',
    distance: 'Individual host',
    dates: 'Mar 22 - 27',
    price: 280,
    rating: 4.9,
    isGuestFavorite: false,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
];

export const LISTINGS_LONDON: Listing[] = [
  {
    id: 201,
    location: 'Place to stay in London',
    distance: 'Individual host',
    dates: 'Apr 5 - 10',
    price: 380,
    rating: 4.88,
    isGuestFavorite: true,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 202,
    location: 'Apartment in London',
    distance: 'Professional host',
    dates: 'Apr 8 - 13',
    price: 290,
    rating: 4.75,
    isGuestFavorite: false,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 203,
    location: 'Room in London',
    distance: 'Individual host',
    dates: 'Apr 10 - 15',
    price: 150,
    rating: 4.6,
    isGuestFavorite: false,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 204,
    location: 'Loft in London',
    distance: 'Individual host',
    dates: 'Apr 12 - 17',
    price: 420,
    rating: 4.95,
    isGuestFavorite: true,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 205,
    location: 'Place to stay in London',
    distance: 'Professional host',
    dates: 'Apr 15 - 20',
    price: 350,
    rating: 4.82,
    isGuestFavorite: true,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 206,
    location: 'Apartment in London',
    distance: 'Individual host',
    dates: 'Apr 18 - 23',
    price: 260,
    rating: 4.78,
    isGuestFavorite: false,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
];

export const LISTINGS_ROME: Listing[] = [
  {
    id: 301,
    location: 'Place to stay in Rome',
    distance: 'Individual host',
    dates: 'May 1 - 6',
    price: 300,
    rating: 4.9,
    isGuestFavorite: true,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 302,
    location: 'Apartment in Rome',
    distance: 'Professional host',
    dates: 'May 3 - 8',
    price: 250,
    rating: 4.8,
    isGuestFavorite: false,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 303,
    location: 'Room in Rome',
    distance: 'Individual host',
    dates: 'May 5 - 10',
    price: 180,
    rating: 4.7,
    isGuestFavorite: false,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 304,
    location: 'Loft in Rome',
    distance: 'Individual host',
    dates: 'May 8 - 13',
    price: 320,
    rating: 4.92,
    isGuestFavorite: true,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 305,
    location: 'Place to stay in Rome',
    distance: 'Professional host',
    dates: 'May 10 - 15',
    price: 280,
    rating: 4.85,
    isGuestFavorite: true,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
  {
    id: 306,
    location: 'Apartment in Rome',
    distance: 'Individual host',
    dates: 'May 12 - 17',
    price: 220,
    rating: 4.78,
    isGuestFavorite: false,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nights: 2,
  },
];
