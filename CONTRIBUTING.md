# Contributing a Provider to Sanwo

Thanks for helping make payments easier for everyone! This guide walks you through adding a new payment provider to Sanwo.

## How it works

Sanwo is a universal payment SDK. Each provider is a small package that contains an HTML template. The template loads the provider's JavaScript SDK, triggers a checkout, and reports the result back to Sanwo using callback functions.

When your PR is merged, the provider is automatically published to npm as `@sanwohq/<provider-name>` and becomes available to every Sanwo user.

## Before you start

1. **Check existing providers** — make sure the provider you want to add doesn't already exist in `providers/`.
2. **Check open PRs** — someone else may already be working on it.
3. **Open an issue first** — describe which provider you'd like to add. This avoids duplicate work and lets maintainers give early feedback.

## Step-by-step guide

### 1. Fork and clone

```bash
git clone https://github.com/<your-username>/providers.git
cd providers
pnpm install
```

### 2. Copy the template

```bash
cp -r providers/_template providers/<your-provider>
```

### 3. Update `package.json`

Edit `providers/<your-provider>/package.json`:

- Set `"name"` to `"@sanwohq/<your-provider>"`
- Set `"version"` to `"0.1.0"`
- Update the `"description"`

### 4. Define the provider

Edit `providers/<your-provider>/src/provider.ts`:

```ts
import type { SanwoProviderDefinition } from "@sanwohq/types";
import { template } from "./template.js";

export const myProvider: SanwoProviderDefinition = {
  id: "my-provider",           // lowercase, kebab-case
  name: "my-provider",         // same as id
  displayName: "My Provider",  // human-readable
  template,
  website: "https://myprovider.com",
  documentation: "https://docs.myprovider.com",
  amountInMinorUnit: true,     // true if the provider expects cents/kobo
  supportedCurrencies: ["USD", "EUR"],
  supportedCountries: ["US", "GB"],
  paymentMethods: ["card", "bank_transfer"],
};
```

### 5. Write the template

This is the core of your provider. Edit `providers/<your-provider>/src/template.ts`.

Your template must:

- **Load the provider's SDK dynamically** using `document.createElement('script')` — never use static `<script src>` tags
- **Call `sanwoCallback()`** to report results back to Sanwo
- **Use `{{sanwoBridge}}`** — this placeholder is replaced at runtime with the bridge code
- **Use `{{params}}`** — this placeholder is replaced with checkout parameters (publicKey, amount, currency, email, etc.)

#### Available `params` fields

| Field | Type | Description |
|-------|------|-------------|
| `params.publicKey` | string | The merchant's public/publishable key |
| `params.amount` | number | Amount (in minor or major units depending on your provider config) |
| `params.currency` | string | ISO 4217 currency code |
| `params.email` | string | Customer email |
| `params.reference` | string | Unique transaction reference |
| `params.firstName` | string? | Customer first name |
| `params.lastName` | string? | Customer last name |
| `params.phone` | string? | Customer phone |
| `params.metadata` | object? | Custom metadata |
| `params.description` | string? | Transaction description |
| `params.*` | any | Any provider-specific options from `sanwoProviderOptions` |

#### Callback events

| Event | When to call | Data |
|-------|-------------|------|
| `sanwoCallback('loaded', {})` | Provider SDK loaded and ready | Empty object |
| `sanwoCallback('success', { reference, transaction_id, raw })` | Payment succeeded | Transaction details |
| `sanwoCallback('cancelled', {})` | User closed/cancelled | Empty object |
| `sanwoCallback('error', { message })` | Something went wrong | Error message |

### 6. Add provider-specific options (optional)

If your provider accepts extra options (like payment method filters, split payments, etc.), define them in `types.ts`:

```ts
export interface MyProviderOptions {
  paymentMethods?: string[];
  theme?: "light" | "dark";
}
```

### 7. Update exports

Edit `providers/<your-provider>/src/index.ts` to export everything:

```ts
export { myProvider } from "./provider.js";
export { template } from "./template.js";
export type { MyProviderOptions } from "./types.js";
```

### 8. Write tests

Edit `providers/<your-provider>/tests/conformance.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { myProvider } from "../src/provider.js";
import { providerConformanceTests } from "@sanwohq/testing";

providerConformanceTests({ provider: myProvider });

describe("My Provider", () => {
  it("should load the provider SDK", () => {
    expect(myProvider.template).toContain("cdn.myprovider.com");
  });
});
```

The `providerConformanceTests()` function automatically verifies:
- Provider has valid id, name, and displayName
- Template contains `{{sanwoBridge}}` and `{{params}}` placeholders
- Template calls `sanwoCallback()`
- Template has an `initPayment` function
- Template is valid HTML

### 9. Build and test

```bash
pnpm build
pnpm test
```

All conformance tests must pass.

### 10. Submit your PR

```bash
git checkout -b add-<your-provider>
git add .
git commit -m "Add <your-provider> provider"
git push origin add-<your-provider>
```

Then open a PR against `main`. CI will run automatically. A maintainer will review your PR.

## PR checklist

- [ ] Provider folder matches the provider name (lowercase, kebab-case)
- [ ] `package.json` name is `@sanwohq/<provider-name>`
- [ ] Provider loads its SDK dynamically (no static `<script>` tags)
- [ ] Template uses `{{sanwoBridge}}` and `{{params}}`
- [ ] Template calls `sanwoCallback()` for success, cancel, and error
- [ ] All conformance tests pass
- [ ] Provider-specific tests exist
- [ ] `amountInMinorUnit` is set correctly
- [ ] `supportedCurrencies` and `supportedCountries` are accurate

## Security

Provider templates run inside an iframe with access to payment data (public keys, amounts, emails). Please:

- Only load scripts from the official provider CDN
- Never log or transmit sensitive data to third parties
- Never include secret/private keys in templates

## Questions?

Open an issue or start a discussion. We're happy to help!
