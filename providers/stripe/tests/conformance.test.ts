import { describe, it, expect } from "vitest";
import { stripeProvider } from "../src/provider.js";
import { providerConformanceTests } from "@sanwohq/testing";

providerConformanceTests({ provider: stripeProvider });

describe("Stripe Provider", () => {
  it("should use minor units", () => {
    expect(stripeProvider.amountInMinorUnit).toBe(true);
  });

  it("should support USD", () => {
    expect(stripeProvider.supportedCurrencies).toContain("USD");
  });

  it("should support NGN", () => {
    expect(stripeProvider.supportedCurrencies).toContain("NGN");
  });

  it("should load Stripe.js inline script", () => {
    expect(stripeProvider.template).toContain("js.stripe.com");
    expect(stripeProvider.template).toContain("Stripe(");
  });

  it("should require clientSecret", () => {
    expect(stripeProvider.template).toContain("clientSecret");
    expect(stripeProvider.template).toContain("confirmPayment");
  });

  it("should render Payment Element", () => {
    expect(stripeProvider.template).toContain("elements.create('payment')");
    expect(stripeProvider.template).toContain("sanwo-stripe-element");
  });
});
