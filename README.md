# Sanwo Providers

Community-maintained payment provider templates for [Sanwo](https://sanwohq.com) — the universal payment SDK.

## Available Providers

| Provider | Package | Status |
|----------|---------|--------|
| [Paystack](providers/paystack) | `@sanwohq/paystack` | Published |
| [Flutterwave](providers/flutterwave) | `@sanwohq/flutterwave` | Published |
| [Stripe](providers/stripe) | `@sanwohq/stripe` | Published |
| [Razorpay](providers/razorpay) | `@sanwohq/razorpay` | Published |
| [Monnify](providers/monnify) | `@sanwohq/monnify` | Published |
| [Interswitch](providers/interswitch) | `@sanwohq/interswitch` | Published |

## Add a Provider

Anyone can contribute a new provider! Each provider is a small package with an HTML template that loads the payment gateway's SDK and handles checkout.

**[Read the contributing guide →](CONTRIBUTING.md)**

### Quick start

```bash
# Fork and clone this repo
git clone https://github.com/<your-username>/providers.git
cd providers && pnpm install

# Copy the template
cp -r providers/_template providers/my-provider

# Edit the files, build, and test
pnpm build && pnpm test

# Submit a PR
```

When your PR is merged, it's automatically published to npm as `@sanwohq/<provider-name>`.

## How Providers Work

Each provider exports a `SanwoProviderDefinition` — a plain object with metadata and an HTML template. The template:

1. Loads the provider's JavaScript SDK from their CDN
2. Initializes the checkout with the merchant's public key and transaction details
3. Reports results back to Sanwo via `sanwoCallback()`

That's it. No server-side code, no secrets, no complex setup.

## Development

```bash
pnpm install     # install dependencies
pnpm build       # build all providers
pnpm test        # run conformance + unit tests
pnpm typecheck   # type check
```

## License

Apache-2.0
