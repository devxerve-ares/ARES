import { SportType, AgeCategory, WeightCategory, Expertise } from '../../shared/enums.js';

/**
 * User-owned sport profile, not a global sport catalog entry.
 *
 * The profile stores the user's personal characteristics and competition
 * history for this sport.
 */
export interface Sport {
  name: string;
  uuid: string;
  sportType: SportType;
  ageCategory: AgeCategory;
  weightCategory?: WeightCategory;
  expertise: Expertise;
  participations: CompetitionParticipation[];
  strengths: string[];
  weaknesses: string[];
}

/**
 * Competition participation history scoped to a user-owned sport profile.
 */
export interface CompetitionParticipation {
  competitionId: string;
  date: Date;
  result?: string;
  position?: number;
}
