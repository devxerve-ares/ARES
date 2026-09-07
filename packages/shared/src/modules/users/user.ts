import { Gender } from './enums.js';
import {Units} from '../../shared/enums.js'
import { Sport } from '../sports/sport.js';
import { BookingPreference, TravelPreference, CompetitionPreference } from './preferences.js';
import { Competition } from '../competitions/competition.js';
import { MealPlan, WeeklyMealPlan } from '../nutrition/meal-planning/mealPlan.js';
import { Subscription } from './subscription.js';

/**
 * Public user profile.
 *
 * Authentication data, including password hashes, is managed outside this
 * domain model.
 *
 * Each sport belongs to this user and stores sport-specific personal data.
 * The current meal plan is separate from retained historical plans, whose
 * retention is limited by the user's subscription rules.
 *
 * Competition history is represented by Sport.participations for each
 * user-owned sport.
 */
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
  subscription?: Subscription;
  desiredTrainingFrequency: number;
  bookingPreference?: BookingPreference;
  travelPreference?: TravelPreference;
  pronouns?: string;
  mealPlan?: MealPlan;
  weeklyMealPlan?: WeeklyMealPlan;
  mealPlanHistory: WeeklyMealPlan[];
  units: Units;
  currentCompetition?: Competition;
  competitionInterests: CompetitionPreference[];
  createdAt: Date;
  updatedAt: Date;
}
