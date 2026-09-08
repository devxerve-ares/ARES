import { SubscriptionStatus, RefundStatus } from './types.js';
/**
 * User subscription used to determine access and meal-plan retention rules.
 *
 * The subscription lifecycle is defined by the user domain.
 */
 export interface Subscription {
   id: string;
   userId: string;
   status: SubscriptionStatus;
   planType: "MONTHLY";
   startedAt: Date;
   lastPaymentAt?: Date;
   nextBillingAt?: Date;
   expiresAt?: Date;
   cancelRequestedAt?: Date;
   cancelEffectiveAt?: Date;
   refundRequestedAt?: Date;
   refundApprovedAt?: Date;
   refundAmountCents?: number;
   refundStatus: RefundStatus;
   createdAt: Date;
   updatedAt: Date;
 }
