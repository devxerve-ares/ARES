import { SportType } from '../../shared/enums.js';
export interface Competition {
  uuid: string;
  name: string;
  sportType: SportType;
  location?: string;
  startDate?: Date;
  endDate?: Date;
}
