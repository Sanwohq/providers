export interface PaystackProviderOptions {
  method?: "checkout" | "newTransaction";
  channels?: Array<
    "card" | "bank" | "ussd" | "qr" | "mobile_money" | "bank_transfer" | "eft"
  >;
  label?: string;
  plan?: string;
  quantity?: number;
  subaccount?: string;
  splitCode?: string;
  split?: {
    type: string;
    bearer_type: string;
    subaccounts: Array<{
      subaccount: string;
      share: number;
    }>;
  };
  transactionCharge?: number;
  invoiceLimit?: number;
}
