import { describe, it, expect } from "vitest";
import { flutterwaveProvider } from "../src/provider.js";
import { providerConformanceTests } from "@sanwohq/testing";

providerConformanceTests({ provider: flutterwaveProvider });

describe("Flutterwave Provider", () => {
  it("should not use minor units", () => {
    expect(flutterwaveProvider.amountInMinorUnit).toBe(false);
  });

  it("should support NGN and USD", () => {
    expect(flutterwaveProvider.supportedCurrencies).toContain("NGN");
    expect(flutterwaveProvider.supportedCurrencies).toContain("USD");
  });

  it("should load Flutterwave inline script", () => {
    expect(flutterwaveProvider.template).toContain("checkout.flutterwave.com");
    expect(flutterwaveProvider.template).toContain("FlutterwaveCheckout");
  });
});
