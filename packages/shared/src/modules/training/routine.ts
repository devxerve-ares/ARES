import { RoutineSet } from './types.js';

export interface Routine{
  // Metadata
  uuid: string;
  creatorId: string;
  ownerId: string;
  name: string;
  sportUuid?: string;

  // Training data
  routineExercises: [RoutineExercise, ...RoutineExercise[]];

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  archivedAt?: Date;
}

/**
 * @exerciseUuid must match with exercise.ts/Exercise.uuid
 */
export interface RoutineExercise {
  exerciseUuid: string;
  targetSets: [RoutineSet, ...RoutineSet[]];
}



export interface StrengthRoutineSet {
  type: 'strength';

  aimedRepetitions: number;
  aimedWeight: number;
  restTime: number;
}

export interface EnduranceRoutineSet {
  type: 'endurance';

  aimedDuration: number;
  aimedDistance: number;
  restTime: number;
}

export interface MobilityRoutineSet {
  type: 'mobility';

  aimedDuration: number;
  aimedRepetitions: number;
  restTime: number;
}

export interface SportRoutineSet {
  type: 'sport';

  aimedDuration?: number;
  aimedDistance?: number;
  aimedSpeed?: number;
  aimedIntensity?: number;
  restTime?: number;
}
