import { SportType, AgeCategory, WeightCategory } from '../../shared/enums.js';
import { Expertise } from './enums.js';
import { CompetitionParticipation } from '../competitions/competition.js';

/**
 * User-owned sport profile, not a global sport catalog entry.
 *
 * The profile stores the user's personal characteristics and competition
 * history for this sport.
 * @sportUuid Is the stable identifier for cross-user sport relationships
 * @userId
 */
export interface Sport {
  name: string;
  sportUuid: string;
  userId: string;
  id: number;
  sportType: SportType;
  ageCategory: AgeCategory;
  weightCategory?: WeightCategory;
  expertise: Expertise;
  participations: CompetitionParticipation[];
  strengths?: string[];
  weaknesses?: string[];
}
