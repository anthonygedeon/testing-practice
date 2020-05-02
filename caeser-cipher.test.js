const caesar = require('./caeser-cipher');

it('Same Case', () => {
    expect(caesar('Anthony', 7)).toBe('Huaovuf');
})

it('Punctuation', () => {
    expect(caesar('Hello, Bob!', 2)).toBe('Jgnnq, Dqd!');
})

it('Wrapping', () => {
    expect(caesar('Anthony', 60)).toBe('Ivbpwvg');
})