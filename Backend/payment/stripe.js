// curl https://api.stripe.com/v1/charges \-u sk_test_4eC39HqLyjWDarjtT1zdp7dc:
// npm install --save stripe

const Stripe = require('stripe');
const stripe = Stripe('sk_test_your_key');
var charge = await stripe.charges.retrieve(
    'ch_3LncF32eZvKYlo2C0K5nWh1I',
    {
      apiKey: 'sk_test_your_key'
    }
  );
  stripe.charges.retrieve('ch_3LncF32eZvKYlo2C0K5nWh1I', {
    stripeAccount: 'acct_1032D82eZvKYlo2C'
  });

  // Note: Node.js API does not throw exceptions, and instead prefers the
// asynchronous style of error handling described below.
//
// An error from the Stripe API or an otherwise asynchronous error
// will be available as the first argument of any Stripe method's callback:
// E.g. stripe.customers.create({...}, function(err, result) {});
//
// Or in the form of a rejected promise.
// E.g. stripe.customers.create({...}).then(
//        function(result) {},
//        function(err) {}
//      );

switch (err.type) {
    case 'StripeCardError':
      // A declined card error
      err.message; // => e.g. "Your card's expiration year is invalid."
      break;
    case 'StripeRateLimitError':
      // Too many requests made to the API too quickly
      break;
    case 'StripeInvalidRequestError':
      // Invalid parameters were supplied to Stripe's API
      break;
    case 'StripeAPIError':
      // An error occurred internally with Stripe's API
      break;
    case 'StripeConnectionError':
      // Some kind of error occurred during the HTTPS communication
      break;
    case 'StripeAuthenticationError':
      // You probably used an incorrect API key
      break;
    default:
      // Handle any other types of unexpected errors
      break;
  }


// stripe.charges.retrieve('ch_3LncF32eZvKYlo2C0K5nWh1I', {
//   expand: ['customer', 'invoice.subscription'],
// });


stripe.charges.create({
  amount: 2000,
  currency: "usd",
  source: "tok_mastercard", // obtained with Stripe.js
  description: "My First Test Charge (created for API docs at https://www.stripe.com/docs/api)"
}, {
  idempotencyKey: "fS20EqEUSdPDS7zj"
}, function(err, charge) {
  // asynchronously called
});


stripe.charges.create({
  amount: 2000,
  currency: "usd",
  source: "tok_mastercard", // obtained with Stripe.js
  metadata: {'order_id': '6735'}
});