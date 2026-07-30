export interface FlutterwaveProviderOptions {
  paymentOptions?: string;
  redirectUrl?: string;
  paymentPlan?: number;
  subaccounts?: Array<{ id: string; transaction_split_ratio?: number }>;
  customizations?: {
    title?: string;
    description?: string;
    logo?: string;
  };
}
