const { add, sub, mul, div } = require('./calculator');

it('Add', () => {
    expect(add(2, 2)).toBe(4);
});

it('Sub', () => {
    expect(sub(5, 10)).toBe(-5);
});

it('Multiply', () => {
    expect(mul(10, 10)).toBe(100);
});

it('Divide', () => {
    expect(div(8, 8)).toBe(1);
});