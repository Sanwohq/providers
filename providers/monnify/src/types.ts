export interface MonnifyProviderOptions {
  contractCode?: string;
  redirectUrl?: string;
  paymentMethods?: Array<"CARD" | "ACCOUNT_TRANSFER" | "USSD" | "PHONE_NUMBER">;
  isTestMode?: boolean;
}
