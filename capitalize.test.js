const capitalize = require('./capitalize');

test('Capitalize the first letter of a string', () => {
    expect(capitalize('nigga')).toBe('Nigga');
});