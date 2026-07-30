import { describe, it, expect } from "vitest";
import { paystackProvider } from "../src/provider.js";
import { providerConformanceTests } from "@sanwohq/testing";

providerConformanceTests({ provider: paystackProvider });

describe("Paystack Provider", () => {
  it("should use minor units", () => {
    expect(paystackProvider.amountInMinorUnit).toBe(true);
  });

  it("should support NGN", () => {
    expect(paystackProvider.supportedCurrencies).toContain("NGN");
  });

  it("should load PaystackPop inline script", () => {
    expect(paystackProvider.template).toContain("js.paystack.co");
    expect(paystackProvider.template).toContain("PaystackPop");
  });
});
