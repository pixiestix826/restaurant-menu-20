import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  cart: Ember.inject.service('cart'),

  actions: {
    // Add Items to Cart
    addToIndex(orders) {
      this.get('cart').addItem(orders);
    },
  },
});
