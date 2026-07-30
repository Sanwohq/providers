import { describe, it, expect } from "vitest";
import { interswitchProvider } from "../src/provider.js";
import { providerConformanceTests } from "@sanwohq/testing";

providerConformanceTests({ provider: interswitchProvider });

describe("Interswitch Provider", () => {
  it("should use minor units", () => {
    expect(interswitchProvider.amountInMinorUnit).toBe(true);
  });

  it("should only support NGN", () => {
    expect(interswitchProvider.supportedCurrencies).toEqual(["NGN"]);
  });

  it("should load Interswitch inline checkout", () => {
    expect(interswitchProvider.template).toContain("interswitch");
  });
});
