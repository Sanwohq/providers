import type { SanwoProviderDefinition } from "@sanwohq/types";
import { template } from "./template.js";

export const paystackProvider: SanwoProviderDefinition = {
  id: "paystack",
  name: "paystack",
  displayName: "Paystack",
  template,
  website: "https://paystack.com",
  documentation: "https://paystack.com/docs",
  amountInMinorUnit: true,
  supportedCurrencies: ["NGN", "GHS", "ZAR", "USD", "KES"],
  supportedCountries: ["NG", "GH", "ZA", "US", "KE"],
  paymentMethods: [
    "card",
    "bank",
    "ussd",
    "qr",
    "mobile_money",
    "bank_transfer",
    "eft",
  ],
};
