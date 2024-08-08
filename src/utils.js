
export function isPalindrome(palindromeWord){
    const points = palindromeWord === palindromeWord.split('').reverse().join('')? 2 : 1;
    
    return points;
}
