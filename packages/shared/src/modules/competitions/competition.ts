import { SportType } from '../../shared/enums.js';
export interface Competition {
  uuid: string;
  name: string;
  sportType: SportType;
  location?: string;
  startDate?: Date;
  endDate?: Date;
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
