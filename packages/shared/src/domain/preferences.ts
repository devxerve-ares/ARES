import {
  BookingProvider,
  FacilityType,
  AccommodationType,
  TravelProvider,
  TravelClass,
  TravelMode,
} from './enums.js';

/**
 * Booking preferences for accommodation near a competition or training venue.
 */
export interface BookingPreference {
  provider: BookingProvider;
  desiredPriceRange: [number, number];
  desiredFacilities: FacilityType[];
  desiredType: AccommodationType[];
  desiredDistanceKm: number;
}

/**
 * Travel preferences for reaching the venue.
 */
export interface TravelPreference {
  provider: TravelProvider;
  desiredPriceRange: [number, number];
  desiredTier: TravelClass;
  desiredType: TravelMode[];
  desiredDistanceKm: number;
}
