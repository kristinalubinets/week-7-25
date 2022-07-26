const twoSum = require('./testSumOfTwo');

describe('twoSum', () => {
    test('test case 1: ', () => {
        const nums = [2, 3, 4, 5, 8];
        const target = 9;
        const output = [2,3];

        expect(twoSum(nums, target)).toEqual(output);
    });
    test('test 2: repeated values', () => {
        const nums = [2, 3, 3, 3, 3, 3];
        const target = 6;
        const output = [1,2];

        expect(twoSum(nums, target)).toEqual(output);
    });
    test('test 3: empty array', () => {
        const nums = [];
        const target = 6;
        const output = 'Array cannot be empty!!!';

        expect(twoSum(nums, target)).toEqual(output);
    })
})