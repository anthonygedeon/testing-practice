const caesar = require('./caeser-cipher');

it('Same Case', () => {
    expect(caesar('I wanted a BIGG ol\' booty boiii', 13)).toBe('V jnagrq n OVTT by\' obbgl obvvv');
})

it('Punctuation', () => {
    expect(caesar('Hello, Bob!', 2)).toBe('Jgnnq, Dqd!');
})

it('Wrapping', () => {
    expect(caesar('Anthony', 60)).toBe('Ivbpwvg');
})