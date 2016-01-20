import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addItem(formData) {
      // Get the current model
      let menuItem = this.store.createRecord('menu-item');

      // Set form data on model
      menuItem.setProperties(formData);

      // Save model then redirect
      menuItem.save().then(() => {
        this.transitionTo('admin.menu-items');
      });
    },
  },
});
