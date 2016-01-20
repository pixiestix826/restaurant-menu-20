import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveItem(formData) {
      // Get current model
      let menuItem = this.modelFor('admin.menu-items.edit');

      // Set form data on model
      menuItem.setProperties(formData);

      // Save model then redirect
      menuItem.save().then(() => {
        this.transitionTo('admin.menu-items');
      });
    },
  },
});
