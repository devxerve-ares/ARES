import { Gender, Units } from '../../shared/enums.js';
import { Sport } from '../sports/sport.js';
import { BookingPreference, TravelPreference, CompetitionPreference } from './preferences.js';
import { Competition } from '../competitions/competition.js';
import { MealPlan } from '../nutrition/meal-planning/diet.js';
import { Subscription } from './subscription.js';

/** Does not include password hash. */
export interface User {
  name: string;
  middleName?: string;
  surname: string;
  username: string;
  uuid: string;
  gender: Gender;
  weight: number;
  height: number;
  birthDate: Date;
  sports: Sport[];
  subscription: Subscription;
  desiredTrainingFrequency: number;
  bookingPreference: BookingPreference;
  travelPreference: TravelPreference;
  pronouns: string;
  mealPlan: MealPlan;
  units: Units;
  currentCompetition?: Competition;
  competitionInterests: CompetitionPreference[];
}
