import { describe, it, expect } from "vitest";
import { razorpayProvider } from "../src/provider.js";
import { providerConformanceTests } from "@sanwohq/testing";

providerConformanceTests({ provider: razorpayProvider });

describe("Razorpay Provider", () => {
  it("should use minor units (paise)", () => {
    expect(razorpayProvider.amountInMinorUnit).toBe(true);
  });

  it("should support INR", () => {
    expect(razorpayProvider.supportedCurrencies).toContain("INR");
  });

  it("should load Razorpay script", () => {
    expect(razorpayProvider.template).toContain("checkout.razorpay.com");
    expect(razorpayProvider.template).toContain("Razorpay");
  });
});
