# @sanwohq/paystack

Paystack provider for [Sanwo](https://sanwohq.com) — the universal payment SDK.

> Full documentation at [docs.sanwo.dev](https://docs.sanwo.dev)

## Install

```bash
npm install @sanwohq/core @sanwohq/paystack
```

## Usage

```js
import { createSanwo } from "@sanwohq/web";
import { paystackProvider } from "@sanwohq/paystack";

const sanwo = createSanwo({
  provider: paystackProvider,
  publicKey: "pk_test_xxx",
});

const result = await sanwo({
  amount: 500000, // 5,000.00 NGN (amount in minor units — kobo)
  currency: "NGN",
  customer: { email: "customer@example.com" },
});

if (result.status === "successful") {
  console.log("Payment reference:", result.reference);
}
```

## Supported currencies

NGN, GHS, ZAR, USD, KES

## Supported payment methods

Card, bank transfer, USSD, QR, mobile money, EFT

## Provider options

Pass provider-specific options via `sanwoProviderOptions`:

```js
await sanwo({
  amount: 500000,
  currency: "NGN",
  customer: { email: "customer@example.com" },
  sanwoProviderOptions: {
    channels: ["card", "bank_transfer"],
    plan: "PLN_xxx",
    subaccount: "ACCT_xxx",
    splitCode: "SPL_xxx",
  },
});
```

## Amount handling

Paystack expects amounts in minor units (kobo, pesewas, cents). Sanwo passes amounts through directly since `amountInMinorUnit` is `true` for this provider.

## Links

- [Paystack website](https://paystack.com)
- [Paystack documentation](https://paystack.com/docs)

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md).

## License

Apache-2.0
