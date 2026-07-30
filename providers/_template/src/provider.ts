import type { SanwoProviderDefinition } from "@sanwohq/types";
import { template } from "./template.js";

export const myProvider: SanwoProviderDefinition = {
  id: "my-provider",
  name: "my-provider",
  displayName: "My Provider",
  template,
  website: "https://myprovider.com",
  documentation: "https://docs.myprovider.com",
  amountInMinorUnit: true,
  supportedCurrencies: ["USD"],
  supportedCountries: ["US"],
  paymentMethods: ["card"],
};
