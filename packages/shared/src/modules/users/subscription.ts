/**
 * User subscription used to determine access and meal-plan retention rules.
 *
 * The subscription lifecycle is defined by the user domain.
 */
export interface Subscription {
  id: string;
  userId: string;
  active: boolean;
  startedAt: Date;
  endsAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
