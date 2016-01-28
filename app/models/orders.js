import DS from 'ember-data';

export default DS.Model.extend({
  orders: DS.belongsTo('order'),
  orderItem: DS.belongsTo('order-item'),
  total: DS.attr(),
});
