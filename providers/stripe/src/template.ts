export const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sanwo Checkout</title>
  <style>
    #sanwo-stripe-form { max-width: 400px; margin: 40px auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    #sanwo-stripe-element { padding: 12px; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 16px; }
    #sanwo-stripe-submit { width: 100%; padding: 12px; background: #635bff; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }
    #sanwo-stripe-submit:disabled { opacity: 0.6; cursor: not-allowed; }
    #sanwo-stripe-error { color: #df1b41; font-size: 14px; margin-top: 8px; }
  </style>
</head>
<body style="background-color:#fff;height:100vh">
  <div id="sanwo-stripe-form">
    <form id="stripe-payment-form">
      <div id="sanwo-stripe-element"></div>
      <button id="sanwo-stripe-submit" type="submit">Pay</button>
      <div id="sanwo-stripe-error"></div>
    </form>
  </div>

  <script>
    {{sanwoBridge}}

    var params = {{params}};

    function initPayment() {
      try {
        if (!params.clientSecret) {
          sanwoCallback('error', { message: 'Stripe requires a clientSecret in sanwoProviderOptions. Create a Payment Intent on your server and pass the client_secret.' });
          return;
        }

        var stripe = Stripe(params.publicKey);
        var appearance = params.appearance || { theme: 'stripe' };
        var elements = stripe.elements({ clientSecret: params.clientSecret, appearance: appearance });
        var paymentElement = elements.create('payment');
        paymentElement.mount('#sanwo-stripe-element');

        paymentElement.on('ready', function() {
          sanwoCallback('loaded', {});
        });

        var form = document.getElementById('stripe-payment-form');
        var submitBtn = document.getElementById('sanwo-stripe-submit');
        var errorDiv = document.getElementById('sanwo-stripe-error');

        form.addEventListener('submit', function(e) {
          e.preventDefault();
          submitBtn.disabled = true;
          errorDiv.textContent = '';

          stripe.confirmPayment({
            elements: elements,
            confirmParams: {
              return_url: params.successUrl || window.location.href
            },
            redirect: 'if_required'
          }).then(function(result) {
            if (result.error) {
              errorDiv.textContent = result.error.message;
              submitBtn.disabled = false;
              sanwoCallback('error', { message: result.error.message, code: result.error.code, raw: result.error });
            } else if (result.paymentIntent) {
              var pi = result.paymentIntent;
              if (pi.status === 'succeeded') {
                sanwoCallback('success', {
                  reference: pi.id,
                  transaction_id: pi.id,
                  raw: pi
                });
              } else {
                sanwoCallback('pending', { reference: pi.id, status: pi.status, raw: pi });
              }
            }
          });
        });
      } catch(e) {
        sanwoCallback('error', { message: e.message });
      }
    }

    var stripeScript = document.createElement('script');
    stripeScript.src = 'https://js.stripe.com/v3/';
    stripeScript.onload = initPayment;
    stripeScript.onerror = function() {
      sanwoCallback('error', { message: 'Failed to load Stripe SDK' });
    };
    document.body.appendChild(stripeScript);
  <\/script>
</body>
</html>`;
