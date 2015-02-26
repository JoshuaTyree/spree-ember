// Generated by EmberScript 0.0.14
var CheckoutRoute;
var get$ = Ember.get;
var set$ = Ember.set;
CheckoutRoute = Ember.Route.extend({
  showCheckoutSteps: true,
  model: function () {
    return get$(get$(this, 'spree'), 'currentOrder');
  },
  redirect: function (model, transition) {
    if (!model)
      this.transitionTo('index');
    if (get$(model, 'state') === 'cart') {
      return this.transitionTo('cart');
    } else if (get$(model, 'hasEmail')) {
      return this.transitionTo('checkout.' + get$(model, 'state'));
    } else {
      return this.transitionTo('checkout.registration');
    }
  }
});
export default CheckoutRoute;