# @sanwohq/flutterwave

Flutterwave provider for [Sanwo](https://sanwohq.com) — the universal payment SDK.

> Full documentation at [docs.sanwo.dev](https://docs.sanwo.dev)

## Install

```bash
npm install @sanwohq/core @sanwohq/flutterwave
```

## Usage

```js
import { createSanwo } from "@sanwohq/web";
import { flutterwaveProvider } from "@sanwohq/flutterwave";

const sanwo = createSanwo({
  provider: flutterwaveProvider,
  publicKey: "FLWPUBK_TEST-xxx",
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

NGN, GHS, KES, ZAR, USD, EUR, GBP, TZS, UGX, RWF, XAF, XOF

## Supported countries

NG, GH, KE, ZA, US, GB, TZ, UG, RW, CM, CI

## Supported payment methods

Card, bank transfer, USSD, mobile money, Apple Pay, QR

## Provider options

Pass provider-specific options via `sanwoProviderOptions`:

```js
await sanwo({
  amount: 500000,
  currency: "NGN",
  customer: { email: "customer@example.com" },
  sanwoProviderOptions: {
    paymentOptions: "card,banktransfer",
    redirectUrl: "https://example.com/callback",
    customizations: {
      title: "My Store",
      logo: "https://example.com/logo.png",
    },
  },
});
```

## Amount handling

Flutterwave expects amounts in major units (naira, dollars, etc.). Sanwo automatically converts from minor units to major units for this provider, so you always pass amounts in minor units (kobo, cents) to the Sanwo API.

## Links

- [Flutterwave website](https://flutterwave.com)
- [Flutterwave documentation](https://developer.flutterwave.com)

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md).

## License

Apache-2.0
