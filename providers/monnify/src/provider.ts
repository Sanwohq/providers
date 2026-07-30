import type { SanwoProviderDefinition } from "@sanwohq/types";
import { template } from "./template.js";

export const monnifyProvider: SanwoProviderDefinition = {
  id: "monnify",
  name: "monnify",
  displayName: "Monnify",
  template,
  website: "https://monnify.com",
  documentation: "https://docs.monnify.com",
  amountInMinorUnit: false,
  supportedCurrencies: ["NGN"],
  supportedCountries: ["NG"],
  paymentMethods: ["card", "bank_transfer", "ussd", "phone_number"],
};
