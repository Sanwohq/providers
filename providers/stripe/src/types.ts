export interface StripeProviderOptions {
  clientSecret: string;
  appearance?: {
    theme?: "stripe" | "night" | "flat";
    variables?: Record<string, string>;
  };
  successUrl?: string;
}
