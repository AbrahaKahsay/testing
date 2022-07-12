const stringLength = require('./stringLength');

test('counts string character', () => {
  expect(stringLength('hello')).toBe(5);
});