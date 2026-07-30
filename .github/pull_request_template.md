## Provider

**Name:** `@sanwohq/<provider-name>`
**Website:** https://...
**Regions:** 

## What this PR does

<!-- Brief description of the provider and what it supports -->

## Checklist

- [ ] Provider folder name matches the provider ID (lowercase, kebab-case)
- [ ] `package.json` name is `@sanwohq/<provider-name>`
- [ ] SDK loaded dynamically (no static `<script>` tags)
- [ ] Template uses `{{sanwoBridge}}` and `{{params}}`
- [ ] Calls `sanwoCallback()` for `success`, `cancelled`, and `error`
- [ ] `amountInMinorUnit` set correctly
- [ ] `supportedCurrencies` and `supportedCountries` are accurate
- [ ] Conformance tests pass
- [ ] Provider-specific tests added
- [ ] No secret keys or credentials in the template
