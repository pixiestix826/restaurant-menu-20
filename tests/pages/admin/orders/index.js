import PageObject from 'restaurant-menu-20/tests/page-object';

// Destructuring
// let visitable = PageObject.visitable
// let collection = PageObject.collection

let {visitable, collection, text} = PageObject;

export default PageObject.create({
  visit: visitable('/admin/orders'),

  // adminNav: Edit Menu Button and View Orders Button
  // topNav: Edit Menu Button and View Orders Button

  orders: collection({
    ItemScope: '.order-detail',

    item: {
      orderItems: collection({
        ItemScope: '.order-detail-order-item',

        item: {
          name: text('.order-detail-order-item__name'),
          quantity: text('.order-detail-order-item__quantity'),
          price: text('.order-detail-order-item__price'),
        },
      }),
      total: PageObject.text('.order-detail__total'),
    },
  }),
});
