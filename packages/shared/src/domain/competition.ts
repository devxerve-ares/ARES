import { AgeCategory, SportType, WeightCategory } from './enums.js';

export interface Competition {
  uuid: string;
  name: string;
  sportType: SportType;
  location?: string;
  startDate?: Date;
  endDate?: Date;
}

export interface CompetitionPreference {
  preferredSportType?: SportType;
  preferredAgeCategory?: AgeCategory;
  preferredWeightCategory?: WeightCategory;
  preferredDistanceKm?: number;
  preferredVenue?: string;
}
