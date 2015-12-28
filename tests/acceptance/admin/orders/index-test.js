import { test } from 'qunit';
import moduleForAcceptance from 'restaurant-menu-20/tests/helpers/module-for-acceptance';

import page from 'restaurant-menu-20/tests/pages/admin/orders/index';

moduleForAcceptance('Acceptance | admin/orders/index');

test('visiting /admin/orders/index', function(assert) {
  visit('/admin/orders/index');

  andThen(function() {
    assert.equal(currentURL(), '/admin/orders/index');
  });
});
