export interface Subscription {
  id: string;
  userId: string;
  active: boolean;
  startedAt: Date;
  endsAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
