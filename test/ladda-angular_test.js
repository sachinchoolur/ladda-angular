(function ($) {
  module('jQuery#', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.(), this.elems, 'should be chainable');
  });

  test('is ', function () {
    expect(1);
    strictEqual(this.elems.().text(), '012', 'should be ');
  });

  module('jQuery.');

  test('is ', function () {
    expect(2);
    strictEqual($.(), '.', 'should be ');
    strictEqual($.({punctuation: '!'}), '!', 'should be thoroughly ');
  });

  module(': selector', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is ', function () {
    expect(1);
    deepEqual(this.elems.filter(':').get(), this.elems.last().get());
  });
}(jQuery));
