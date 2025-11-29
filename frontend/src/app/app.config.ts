import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import {
  LucideAngularModule,
  Search,
  Menu,
  Globe,
  User,
  Share,
  Heart,
  ChevronRight,
  ShieldCheck,
  Key,
  Wifi,
  Monitor,
  Award,
  Calendar,
  ChevronLeft,
  Star,
  MapPin,
  MessageSquare,
  Maximize2,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(), // ← necesario para PrimeNG
    importProvidersFrom(
      LucideAngularModule.pick({
        Search,
        Menu,
        Globe,
        User,
        Share,
        Heart,
        ChevronRight,
        ShieldCheck,
        Key,
        Wifi,
        Monitor,
        Award,
        Calendar,
        ChevronLeft,
        Star,
        MapPin,
        MessageSquare,
        Maximize2,
      })
    ),
  ],
};
