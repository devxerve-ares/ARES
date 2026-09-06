export interface Exercise{
  uuid: string;
  name: string;
  description?: string;
  targetMuscles: string[];
  secondaryMuscles?: string[];
  equipment?: string[];
  instructions?: string[];
  imageUrl?: string;
  videoUrl?: string;
}
