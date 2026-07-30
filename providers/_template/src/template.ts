export const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sanwo Checkout</title>
</head>
<body style="background-color:#fff;height:100vh">
  <script>
    {{sanwoBridge}}

    var params = {{params}};

    function initPayment() {
      try {
        // Initialize your provider's SDK here using params.publicKey
        // Then trigger the checkout with params.amount, params.currency, params.email, etc.

        sanwoCallback('loaded', {});

        // On success:
        // sanwoCallback('success', { reference: '...', transaction_id: '...', raw: response });

        // On cancel:
        // sanwoCallback('cancelled', {});

        // On error:
        // sanwoCallback('error', { message: '...' });
      } catch(e) {
        sanwoCallback('error', { message: e.message });
      }
    }

    // Load your provider's SDK script dynamically
    var script = document.createElement('script');
    script.src = 'https://cdn.myprovider.com/sdk.js';
    script.onload = initPayment;
    script.onerror = function() {
      sanwoCallback('error', { message: 'Failed to load My Provider SDK' });
    };
    document.body.appendChild(script);
  <\\/script>
</body>
</html>`;
