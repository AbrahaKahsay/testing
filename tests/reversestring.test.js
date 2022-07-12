const reverseString = require('../jsmodules/reversestring');

test('should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});