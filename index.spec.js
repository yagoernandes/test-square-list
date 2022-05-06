const { describe } = require('yargs');
const squareRootMap = require('./index');


test('Test Case 1', () => {
    expect(squareRootMap([1, 2, 3, 5, 6, 8, 9])).toStrictEqual([1, 4, 9, 25, 36, 64, 81]);
});

test('Test Case 2', () => {
    expect(squareRootMap([-2, -1])).toStrictEqual([1, 4]);
});

test('Test Case 3', () => {
    expect(squareRootMap([-10, -5, 0, 5, 10])).toStrictEqual( [0, 25, 25, 100, 100]);
});