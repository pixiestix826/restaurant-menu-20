// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   cart: Ember.inject.service('cart'),
//
//   actions: {
//     // Add Items to Cart
//     addToIndex(orderItem) {
//       this.get('cart').addItem('orders');
//     },
//   },
// });




import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('orders');
  },
});
