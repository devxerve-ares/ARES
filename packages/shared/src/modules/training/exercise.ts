import { ExerciseType } from './types.js';
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
