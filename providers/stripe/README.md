# @sanwohq/stripe

Stripe provider for [Sanwo](https://sanwohq.com) — the universal payment SDK.

> Full documentation at [docs.sanwo.dev](https://docs.sanwo.dev)

## Install

```bash
npm install @sanwohq/core @sanwohq/stripe
```

## Usage

Stripe requires a **client secret** from a server-side Payment Intent. You must create a Payment Intent on your server and pass the `clientSecret` to the frontend. No secret keys are ever used on the client side.

### 1. Create a Payment Intent on your server

```js
// server.js (Node.js example)
const stripe = require("stripe")("sk_test_xxx");

const paymentIntent = await stripe.paymentIntents.create({
  amount: 2000, // $20.00
  currency: "usd",
});

// Send paymentIntent.client_secret to your frontend
```

### 2. Complete the checkout on the frontend

```js
import { createSanwo } from "@sanwohq/web";
import { stripeProvider } from "@sanwohq/stripe";

const sanwo = createSanwo({
  provider: stripeProvider,
  publicKey: "pk_test_xxx", // Stripe publishable key
});

const result = await sanwo({
  amount: 2000, // $20.00 USD (amount in minor units — cents)
  currency: "USD",
  customer: { email: "customer@example.com" },
  sanwoProviderOptions: {
    clientSecret: "pi_xxx_secret_xxx", // from your server
  },
});

if (result.status === "successful") {
  console.log("Payment Intent ID:", result.reference);
}
```

> **Important:** The `clientSecret` is required. Without it, the checkout will return an error. Only the Stripe publishable key (`pk_`) is used on the frontend — never your secret key (`sk_`).

## Supported currencies

USD, EUR, GBP, CAD, AUD, JPY, CHF, HKD, SGD, SEK, DKK, NOK, NZD, MXN, BRL, INR, NGN, ZAR, KES, GHS, and 120+ more

## Supported countries

US, GB, CA, AU, DE, FR, JP, SG, HK, NL, IE, SE, DK, NO, NZ, MX, BR, IN, NG, ZA, KE, GH, and 40+ more

## Supported payment methods

Card, Apple Pay, Google Pay, bank transfer, SEPA debit, iDEAL, Klarna, Afterpay, Cash App, Link

## Provider options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `clientSecret` | `string` | Yes | Client secret from a server-side Payment Intent |
| `appearance` | `object` | No | Stripe Elements appearance theme (`"stripe"`, `"night"`, or `"flat"`) |
| `successUrl` | `string` | No | URL to redirect to after payment if redirect is required |

## Amount handling

Stripe expects amounts in minor units (cents, pence, etc.). Sanwo passes amounts through directly since `amountInMinorUnit` is `true` for this provider.

## Links

- [Stripe website](https://stripe.com)
- [Stripe documentation](https://docs.stripe.com)

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md).

## License

Apache-2.0
