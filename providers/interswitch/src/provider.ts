import type { SanwoProviderDefinition } from "@sanwohq/types";
import { template } from "./template.js";

export const interswitchProvider: SanwoProviderDefinition = {
  id: "interswitch",
  name: "interswitch",
  displayName: "Interswitch",
  template,
  website: "https://interswitchgroup.com",
  documentation: "https://developer.interswitchgroup.com",
  amountInMinorUnit: true,
  supportedCurrencies: ["NGN"],
  supportedCountries: ["NG"],
  paymentMethods: ["card", "bank_transfer", "ussd", "qr"],
};
