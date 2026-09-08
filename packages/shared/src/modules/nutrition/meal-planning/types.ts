import { Allergy, Intolerance } from './enums.js';

export type AllergyEntry = {
  value: Allergy | string;
  manualOverride: boolean;
};

export type IntoleranceEntry = {
  value: Intolerance | string;
  manualOverride: boolean;
};
