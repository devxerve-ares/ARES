import { SportType, AgeCategory, WeightCategory, Expertise } from '../../shared/enums.js';

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

export interface CompetitionParticipation {
  competitionId: string;
  date: Date;
  result?: string;
  position?: number;
}
