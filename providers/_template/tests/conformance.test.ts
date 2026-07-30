import { describe, it, expect } from "vitest";
import { myProvider } from "../src/provider.js";
import { providerConformanceTests } from "@sanwohq/testing";

// These tests verify your provider meets Sanwo's requirements.
// All providers must pass these.
providerConformanceTests({ provider: myProvider });

describe("My Provider", () => {
  it("should load provider SDK script", () => {
    expect(myProvider.template).toContain("cdn.myprovider.com");
  });

  // Add provider-specific tests here
});
