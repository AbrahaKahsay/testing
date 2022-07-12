const capitalize = require('../jsmodules/capitalize');

test('should capitalize', () => {
  expect(capitalize('microverse')).toBe('Microverse');
});