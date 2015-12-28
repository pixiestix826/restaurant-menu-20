import { test } from 'qunit';
import moduleForAcceptance from 'restaurant-menu-20/tests/helpers/module-for-acceptance';

import page from 'restaurant-menu-20/tests/pages/admin/orders/index';

moduleForAcceptance('Acceptance | admin/orders/index');

test('a user can visit the order review page', function(assert) {
  page.visit();

  andThen(function() {
    assert.equal(currentURL(), '/admin/orders');
  });
});

test('A user can see a list of orders', function(assert) {
  page.visit();

  andThen(function() {
    assert.equal(page.orders().count(), 3, 'There should be 3 orders');

    let firstOrder = page.orders(1);

    // Collections with ember page object are base 1 arrays
    assert.equal(firstOrder.total(), '$10.00', 'The user can see the first order total');
    assert.equal(firstOrder.orderItems().count(), 2, 'The first order as two order items');
    assert.equal(firstOrder.orderItems(1).name(), 'Fries');
  });
});
