# @sanwohq/monnify

Monnify provider for [Sanwo](https://sanwohq.com) — the universal payment SDK.

> Full documentation at [docs.sanwo.dev](https://docs.sanwo.dev)

## Install

```bash
npm install @sanwohq/core @sanwohq/monnify
```

## Usage

```js
import { createSanwo } from "@sanwohq/web";
import { monnifyProvider } from "@sanwohq/monnify";

const sanwo = createSanwo({
  provider: monnifyProvider,
  publicKey: "MK_TEST_xxx",
});

const result = await sanwo({
  amount: 500000, // 5,000.00 NGN (amount in minor units — kobo)
  currency: "NGN",
  customer: { email: "customer@example.com" },
  sanwoProviderOptions: {
    contractCode: "your_contract_code",
  },
});

if (result.status === "successful") {
  console.log("Payment reference:", result.reference);
}
```

## Supported currencies

NGN

## Supported countries

Nigeria

## Supported payment methods

Card, bank transfer, USSD, phone number

## Provider options

Pass provider-specific options via `sanwoProviderOptions`:

```js
await sanwo({
  amount: 500000,
  currency: "NGN",
  customer: { email: "customer@example.com" },
  sanwoProviderOptions: {
    contractCode: "your_contract_code", // required by Monnify
    paymentMethods: ["CARD", "ACCOUNT_TRANSFER"],
    redirectUrl: "https://example.com/callback",
    incomeSplitConfig: [
      { subAccountCode: "MFY_SUB_xxx", splitPercentage: 20 },
    ],
  },
});
```

> **Note:** The `contractCode` is required by Monnify. You can find it in your Monnify dashboard.

## Amount handling

Monnify expects amounts in major units (naira). Sanwo automatically converts from minor units to major units for this provider, so you always pass amounts in minor units (kobo) to the Sanwo API.

## Links

- [Monnify website](https://monnify.com)
- [Monnify documentation](https://docs.monnify.com)

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md).

## License

Apache-2.0
