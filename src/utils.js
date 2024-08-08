
export function isPalindrome(palindromeWord){
    
    //.replace() replaces all non-alphanumeric characters in the string with an empty string
    // /g flag tells the .replace() method to search for all matches in the string, not just the first one
    //clean up string
    const word = palindromeWord.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const reversedWord = word.split('').reverse().join('');

    if(word === '') return false;  

    if (/[^a-zA-Z\s]+$/.test(palindromeWord)) {
        throw new Error("Input contains non-alphabetic characters");
    }

    return word === reversedWord ? 2 : 1;       
}
