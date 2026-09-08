export type SubscriptionStatus =
  | "ACTIVE"
  | "CANCELLED"
  | "EXPIRED"
  | "PENDING_PAYMENT"
  | "REFUNDED";

export type RefundStatus =
  | "NONE"
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "COMPLETED";
