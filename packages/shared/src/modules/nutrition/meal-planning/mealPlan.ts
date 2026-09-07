import { MealType, PlanStatus, MealProcedence } from './enums.js';

export interface Food {
  uuid: string;
  name: string;
  macrosPer100g: {
    calories: number;
    proteinGrams: number;
    carbsGrams: number;
    fatGrams: number;
    fiberGrams: number;
    vitaminGrams: number;
  }
}
export interface MealIngredient {
  food: Food;
  quantityGrams: number;
}

/**
 * Meal plan created by a user and optionally shared with other users.
 */
export interface MealPlan{
  uuid: string;
  creatorId: string;

  targetDailyMacros?: {
    targetCalories?: number;
    minimumCalories?: number;
    proteinGrams?: number;
    carbsGrams?: number;
    fatGrams?: number;
    fiberGrams?: number;
    vitaminGrams?: number;
  }

  excludedFoods: Food[];
  preferredFoods: Food[];
  introducedFoods: Food[];
  dislikedFoods: Food[];

  allergens: string[];
  intolerances: string[];
  medicalRestrictions: string[];

  mealsPerDay?: number;
  snacksPerDay?: number;
  preferredMealTimes?: string[];
  maxPreparationTimeMinutes?: number;
  cookingSkillLevel?: string;
  availableIngredients: Food[];

  goal?: string;
  notes?: string;
  startsAt?: Date;
  endsAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface WeeklyMealPlan{
  uuid: string;
  userId: string;
  mealPlanUuid: string;
  createdAt: Date;
  updatedAt?: Date;
  weekStart: Date;
  weekEnd: Date;
  days: MealDay[];
  weeklyMacros?: {
    calories: number;
    proteinGrams?: number;
    carbsGrams?: number;
    fatGrams?: number;
    fiberGrams?: number;
    vitaminGrams?: number;
  }
  status: PlanStatus;
}

export interface MealDay{
  date: Date;
  meals: Meal[];
  dailyMacros?: {
    calories: number;
    proteinGrams?: number;
    carbsGrams?: number;
    fatGrams?: number;
    fiberGrams?: number;
    vitaminGrams?: number;
  }
}

export interface Meal{
  name: string;
  type: MealType;
  ingredients?: MealIngredient[];
  servings: number;
  procedence: MealProcedence;
  macros?: {
    calories: number;
    proteinGrams?: number;
    carbsGrams?: number;
    fatGrams?: number;
    fiberGrams?: number;
    vitaminGrams?: number;
  }
  preparationTimeMinutes?: number;
  notes?: string;
}
