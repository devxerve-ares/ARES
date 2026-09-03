interface Food {
  id: string
  name: string
  calories: number
  protein: number
  carbohydrates: number
  fat: number
}
export interface MealPlan{
  id: string;
  userId: string;

  targetCalories?: number;
  minimumCalories?: number;
  maximumCalories?: number;

  targetMacros?: {
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
  availableIngredients?: Food[];

  goal?: string;
  notes?: string;
  startsAt?: string;
  endsAt?: string;
  createdAt: string;
  updatedAt: string;
}
