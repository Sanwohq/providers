import { describe, it, expect } from "vitest";
import { monnifyProvider } from "../src/provider.js";
import { providerConformanceTests } from "@sanwohq/testing";

providerConformanceTests({ provider: monnifyProvider });

describe("Monnify Provider", () => {
  it("should not use minor units", () => {
    expect(monnifyProvider.amountInMinorUnit).toBe(false);
  });

  it("should only support NGN", () => {
    expect(monnifyProvider.supportedCurrencies).toEqual(["NGN"]);
  });

  it("should load Monnify SDK", () => {
    expect(monnifyProvider.template).toContain("sdk.monnify.com");
    expect(monnifyProvider.template).toContain("MonnifySDK");
  });
});
