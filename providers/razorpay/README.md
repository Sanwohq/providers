# @sanwohq/razorpay

Razorpay provider for [Sanwo](https://sanwohq.com) — the universal payment SDK.

> Full documentation at [docs.sanwo.dev](https://docs.sanwo.dev)

## Install

```bash
npm install @sanwohq/core @sanwohq/razorpay
```

## Usage

```js
import { createSanwo } from "@sanwohq/web";
import { razorpayProvider } from "@sanwohq/razorpay";

const sanwo = createSanwo({
  provider: razorpayProvider,
  publicKey: "rzp_test_xxx",
});

const result = await sanwo({
  amount: 50000, // 500.00 INR (amount in minor units — paise)
  currency: "INR",
  customer: { email: "customer@example.com" },
});

if (result.status === "successful") {
  console.log("Payment ID:", result.reference);
}
```

## Supported currencies

INR, USD, EUR, GBP, SGD, AED, MYR

## Supported countries

India (primarily)

## Supported payment methods

UPI, cards, net banking, wallets, EMI, bank transfer

## Provider options

Pass provider-specific options via `sanwoProviderOptions`:

```js
await sanwo({
  amount: 50000,
  currency: "INR",
  customer: { email: "customer@example.com" },
  sanwoProviderOptions: {
    orderId: "order_xxx", // from Razorpay Orders API
    description: "Purchase description",
    notes: { key: "value" },
    theme: { color: "#F37254" },
    image: "https://example.com/logo.png",
  },
});
```

## Amount handling

Razorpay expects amounts in minor units (paise). Sanwo passes amounts through directly since `amountInMinorUnit` is `true` for this provider.

## Links

- [Razorpay website](https://razorpay.com)
- [Razorpay documentation](https://razorpay.com/docs)

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md).

## License

Apache-2.0
