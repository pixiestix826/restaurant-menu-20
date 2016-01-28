import DS from 'ember-data';

export default DS.Model.extend({
  orders: DS.belongsTo('order'),
  // menuItem: DS.belongsTo('menu-item'),
  total: DS.attr(),
});
