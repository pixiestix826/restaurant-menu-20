import Ember from 'ember';

export default Ember.Component.extend({
  categoryGroups: [],

  didReceiveAttrs() {
    let menuItems = this.getAttr('items');

    let grouped = menuItems.reduce((carry, curr) => {
      let categoryName = curr.get('category');
      let alreadyExisiting = carry.find((categoryGroup) => {
        return categoryGroup.name === categoryName;
      });

      if (alreadyExisiting) {
        alreadyExisiting.items.push(curr);
      } else {
        carry.push({
          name: categoryName,
          items: [curr],
        });
      }

      return carry;
    }, []);

    this.set('categoryGroups', grouped);
  },
});
