import {isPalindrome} from '../utils'

describe('isPalindrome', () => {
    it('gives double points for words reading the same forward and backwards (e.g racecar) and 1 point otherwise', () => {
        const palindrome = 'racecar';
        const points = isPalindrome(palindrome);
        expect(points).toBe(2);
    }),
    it('checks for case-sensitivity and alphanumeric characters', () => {
        const palindrome = 'A man, a plan, a canal, Panama';
        const points = isPalindrome(palindrome);
        expect(points).toBe(2);
    }),
    it('returns false for an empty string', () => {
        const palindrome = '';
        const points = isPalindrome(palindrome);
        expect(points).toBe(false);
    }),
    it('return true for words that are a combination of uppercase and lowercase letters', () => {
        const palindrome = 'MaDam';
        const points = isPalindrome(palindrome);
        expect(points).toBe(2);
    }),
    it('should throw an error if input has any non-alphabetic characters', () => {
        const palindrome = 'racer23';        
        expect(() => isPalindrome(palindrome)).toThrow("Input contains non-alphabetic characters");
    });
});