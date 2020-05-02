const analyze = require('./array-analysis');

it('Get Length of an array', () => {
    expect(analyze([1,8,3,4,2,6]).length).toBe([1,8,3,4,2,6].length)
})

it('Get smallest number from array', () => {
    expect(analyze([1,8,3,4,2,6]).min).toBe(1)
});

it('Get the biggest number from the array', () => {
    expect(analyze([1,8,3,4,2,6]).max).toBe(8);
});

it('Get the average from the arary', () => {
    expect(analyze([1,8,3,4,2,6]).average()).toBe(4)
});