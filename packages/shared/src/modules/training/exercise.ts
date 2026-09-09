export interface Exercise {
  uuid: string;
  name: string;
  type: ExerciseType;
  description?: string;
  targetMuscles: string[];
  secondaryMuscles?: string[];
  equipment?: string[];
  instructions?: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export interface StrengthExercise extends Exercise {
  type: 'strength';
}

export interface EnduranceExercise extends Exercise {
  type: 'endurance';
}

export interface MobilityExercise extends Exercise {
  type: 'mobility';
}

export interface SportExercise extends Exercise {
  type: 'sport';
}

export type SpecificExercise =
  | StrengthExercise
  | EnduranceExercise
  | MobilityExercise
  | SportExercise;

export type ExerciseType =
  | 'strength'
  | 'endurance'
  | 'mobility'
  | 'sport';
