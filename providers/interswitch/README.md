# @sanwohq/interswitch

Interswitch provider for [Sanwo](https://sanwohq.com) — the universal payment SDK.

> Full documentation at [docs.sanwo.dev](https://docs.sanwo.dev)

## Install

```bash
npm install @sanwohq/core @sanwohq/interswitch
```

## Usage

```js
import { createSanwo } from "@sanwohq/web";
import { interswitchProvider } from "@sanwohq/interswitch";

const sanwo = createSanwo({
  provider: interswitchProvider,
  publicKey: "your_merchant_code",
});

const result = await sanwo({
  amount: 500000, // 5,000.00 NGN (amount in minor units — kobo)
  currency: "NGN",
  customer: { email: "customer@example.com" },
});

if (result.status === "successful") {
  console.log("Transaction reference:", result.reference);
}
```

## Supported currencies

NGN

## Supported countries

Nigeria

## Supported payment methods

Card (including Verve), bank transfer, USSD, QR

## Provider options

Pass provider-specific options via `sanwoProviderOptions`:

```js
await sanwo({
  amount: 500000,
  currency: "NGN",
  customer: { email: "customer@example.com" },
  sanwoProviderOptions: {
    payItemId: "Default_Payable_MX_xxx",
    payItemName: "Product Name",
    siteRedirectUrl: "https://example.com/callback",
  },
});
```

## Amount handling

Interswitch expects amounts in minor units (kobo). Sanwo passes amounts through directly since `amountInMinorUnit` is `true` for this provider.

## Links

- [Interswitch website](https://interswitchgroup.com)
- [Interswitch documentation](https://developer.interswitchgroup.com)

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md).

## License

Apache-2.0
