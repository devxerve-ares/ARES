import { TrainingType } from './enums.js';
import type { ExerciseType } from './types.js';

export interface Training {
  userId: string;
  sportUuid?: string;
  competitionUuid?: string;
  routineId?: string;

  type: TrainingType;
  date: Date;
  duration: number;
  exercises: TrainingExercise[];

  incidents?: string;
  satisfaction?: number;
  notes?: string;
}

export interface TrainingExerciseBase {
  uuid: string;
  exerciseUuid: string;
  type: ExerciseType;
  restTime: number;
}

export interface StrengthTrainingSet {
  aimedRepetitions: number;
  repetitions: number;
  liftedWeight?: number;
}

export interface EnduranceTrainingSet {
  aimedDuration: number;
  finalDuration: number;
  distance: number;
}

export interface MobilityTrainingSet {
  aimedDuration?: number;
  finalDuration?: number;
  rangeOfMotion?: number;
  repetitions?: number;
}

export interface SportTrainingSet {
  aimedDuration?: number;
  finalDuration?: number;
  distance?: number;
  speed?: number;
  intensity?: number;
}

export interface StrengthTrainingExercise extends TrainingExerciseBase {
  type: 'strength';
  sets: [StrengthTrainingSet, ...StrengthTrainingSet[]];
}

export interface EnduranceTrainingExercise extends TrainingExerciseBase {
  type: 'endurance';
  sets: [EnduranceTrainingSet, ...EnduranceTrainingSet[]];
}

export interface MobilityTrainingExercise extends TrainingExerciseBase {
  type: 'mobility';
  sets: [MobilityTrainingSet, ...MobilityTrainingSet[]];
}

export interface SportTrainingExercise extends TrainingExerciseBase {
  type: 'sport';
  sets: [SportTrainingSet, ...SportTrainingSet[]];
}

export type TrainingExercise =
  | StrengthTrainingExercise
  | EnduranceTrainingExercise
  | MobilityTrainingExercise
  | SportTrainingExercise;
