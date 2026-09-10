import { StrengthRoutineSet, EnduranceRoutineSet, MobilityRoutineSet, SportRoutineSet } from './routine.js';

export type ExerciseType =
  | 'strength'
  | 'endurance'
  | 'mobility'
  | 'sport';

export type RoutineSet =
  | StrengthRoutineSet
  | EnduranceRoutineSet
  | MobilityRoutineSet
  | SportRoutineSet;
