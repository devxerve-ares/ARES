import { BookingProvider, FacilityType, AccommodationType, TravelProvider, TravelClass, TravelMode} from './enums.js';
import { AgeCategory, SportType, WeightCategory } from '../../shared/enums.js';

export interface BookingPreference {
  provider: BookingProvider;
  desiredPriceRange: [number, number];
  desiredFacilities: FacilityType[];
  desiredType: AccommodationType[];
  desiredDistanceKm: number;
}

export interface TravelPreference {
  provider: TravelProvider;
  desiredPriceRange: [number, number];
  desiredTier: TravelClass;
  desiredType: TravelMode[];
  desiredDistanceKm: number;
}

export interface CompetitionPreference {
  preferredSportType?: SportType;
  preferredAgeCategory?: AgeCategory;
  preferredWeightCategory?: WeightCategory;
  preferredDistanceKm?: number;
  preferredVenue?: string;
}
