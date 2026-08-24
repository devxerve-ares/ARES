import { Gender, SportType, AgeCategory, WeightCategory, Expertise } from './enums';

/**
 * Data relevant to a specific sport
 * @name Sport's name
 * @uuid Sport's unique id
 * @sportType Sport's type, eg: Martial art, Aquatic, Outdoors...
 * @ageCategory User's age category, eg: Junior, Senior...
 * @weightCategory User's weight category, eg: Lightweight, Heavyweight...
 * @expertise User's current level, eg: Amateur, Professional...
 * @participations User's participations in this specific sport
 * @strengths User's strengths in this sport
 * @weaknesses User's weaknesses in this sport
 */
interface Sport {
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

interface CompetitionParticipation {
  competitionId: string;
  date: Date;
  result?: string;
  position?: number;
}
