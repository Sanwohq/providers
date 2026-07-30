import type { SanwoProviderDefinition } from "@sanwohq/types";
import { template } from "./template.js";

export const razorpayProvider: SanwoProviderDefinition = {
  id: "razorpay",
  name: "razorpay",
  displayName: "Razorpay",
  template,
  website: "https://razorpay.com",
  documentation: "https://razorpay.com/docs",
  amountInMinorUnit: true,
  supportedCurrencies: ["INR", "USD", "EUR", "GBP", "SGD", "AED", "MYR"],
  supportedCountries: ["IN"],
  paymentMethods: [
    "card",
    "netbanking",
    "wallet",
    "upi",
    "emi",
    "bank_transfer",
  ],
};
