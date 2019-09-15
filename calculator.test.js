const calculator = require('./calculator');

test('Add two values, 2 + 2 will be 4', () => {
    expect(calculator.add(2, 2)).toBe(4)
});

test('Subtract two values, 8 - 2 will be 6', () => {
    expect(calculator.subtract(8, 2)).toBe(6);
});

test('Dividing two values, 10 / 2 will be 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('Multipling two values, 10 * 10 will be 100', () => {
    expect(calculator.multiply(10, 10)).toBe(100);
});