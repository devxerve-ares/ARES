import { BookingProvider, FacilityType, AccommodationType, TravelProvider, TravelClass, TravelMode} from './enums.js';
import { AgeCategory, WeightCategory } from '../../shared/enums.js';
import { User } from './user.js';
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
}

export interface CompetitionPreference {
  preferredSport: string;
  preferredAgeCategory?: AgeCategory;
  preferredWeightCategory?: WeightCategory;
  preferredLocation?: string;
}
