import {isPalindrome} from '../utils'

describe('isPalindrome', () => {
    it('gives double points for words reading the same forward and backwards (e.g racecar) and 1 point otherwise', () => {
        const palindrome = 'car';
        const points = isPalindrome(palindrome);

        expect(points).toBe(1);
    })
})