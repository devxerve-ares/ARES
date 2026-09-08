export enum MealType{
  BREAKFAST = 'breakfast',
  LUNCH = 'lunch',
  SNACK = 'snack',
  DINNER = 'dinner',
  SUPPLEMENT = 'supplement'
}

export enum PlanStatus{
  DRAFT = 'draft',
  ACTIVE = 'active',
  COMPLETED = 'completed',
  ARCHIVED = 'archived'
}

export enum MealProcedence{
  GENERATED = 'generated',
  REPLACEMENT = 'replacement',
  MANUALLYADDED = 'manuallyAdded'
}

export enum Allergy {
  PEANUT = "PEANUT",
  TREE_NUT = "TREE_NUT",
  MILK = "MILK",
  EGG = "EGG",
  SOY = "SOY",
  SESAME = "SESAME",
  FISH = "FISH",
  SHELLFISH = "SHELLFISH",
  MOLLUSK = "MOLLUSK",
  MUSTARD = "MUSTARD",
  CELERY = "CELERY",
  LUPIN = "LUPIN",
  SULFITE = "SULFITE",
}

export enum Intolerance {
  LACTOSE = "LACTOSE",
  GLUTEN = "GLUTEN",
  FRUCTOSE = "FRUCTOSE",
  HISTAMINE = "HISTAMINE",
  FODMAP = "FODMAP",
}
