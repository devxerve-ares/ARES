import { TrainingType } from '../../shared/enums.js'
import { Exercise } from './exercise.js'
import { Sport } from '../sports/sport.js';

/**
 * Interface for an specific training Session
 * @duration is measured in minutes
 * @totalWeight weight lifted during the session
 * @routineId optional routine for this session
 */
export interface Training{
  userId: string;
  sportId?: string;
  competitionId?: string;
  routineId?: string;

  type: TrainingType;
  date: Date;
  duration: number;
  exercises: TrainingExercise[];
  totalWeight?: number;

  incidents?: string;
  satisfaction?: number;
  notes?: string;
}

export interface TrainingExercise{
  exerciseId: string;
  sets: TrainingSet[];
}

export interface TrainingSet{
  aimedRepetitions: number;
  repetitions: number;
  liftedWeight?: number;
}
