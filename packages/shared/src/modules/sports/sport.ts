import { SportType, AgeCategory, WeightCategory, Expertise } from '../../shared/enums.js';
import { CompetitionParticipation } from '../competitions/competition.js';

/**
 * User-owned sport profile, not a global sport catalog entry.
 *
 * The profile stores the user's personal characteristics and competition
 * history for this sport.
 * @uuid Is the stable identifier for cross-user sport relationships
 */
export interface Sport {
  name: string;
  uuid: string;
  sportType: SportType;
  ageCategory: AgeCategory;
  weightCategory?: WeightCategory;
  expertise: Expertise;
  participations?: CompetitionParticipation[];
  strengths?: string[];
  weaknesses?: string[];
}
