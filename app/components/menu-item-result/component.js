import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  cart: Ember.inject.service(),

  actions: {
    // Add Items to Cart
  },
});
