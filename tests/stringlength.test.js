const stringLength = require('../jsmodules/stringlength');

test('counts string character', () => {
  expect(stringLength('hello')).toBe(5);
});