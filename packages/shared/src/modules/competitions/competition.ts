export interface Competition {
  uuid: string;
  name: string;
  sportUuid: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
}

/**
 * Competition participation history scoped to a user-owned sport profile.
 */
export interface CompetitionParticipation {
  competitionUuid: string;
  userId: string;
  date: Date;
  position?: number;
  notes?: string;
}
