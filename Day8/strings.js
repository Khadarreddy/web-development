// Reverse a String
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello")); // Output: "olleh"


//Check for Palindrome
function isPalindrome(str) {
    let reversed = reverseString(str);
    return str === reversed;
}
console.log(isPalindrome("racecar")); // Output: true



//Count Vowels and Consonants
function countVowelsConsonants(str) {
    let vowels = 0;
    let consonants = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char >= 'a' && char <= 'z') {
            if ('aeiou'.includes(char)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }
    return { vowels, consonants };
}
console.log(countVowelsConsonants("hello world")); // Output: { vowels: 3, consonants: 7 }



//Convert to Uppercase / Lowercase
function convertCase(str) {
    return {
        upper: str.toUpperCase(),
        lower: str.toLowerCase()
    };
}
console.log(convertCase("hello")); // Output: { upper: "HELLO", lower: "hello" }


//Check if Two Strings are Anagrams
function areAnagrams(str1, str2) {
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("listen", "silent")); // Output: true



//Count Words in a Sentence
function countWords(sentence) {
    return sentence.split(' ').length;
}
console.log(countWords("Hello world! How are you?")); // Output: 6



//Remove All White Spaces
function removeWhiteSpaces(str) {
    return str.replace(/\s+/g, '');
}
console.log(removeWhiteSpaces("Hello   world!")); // Output: "Helloworld!"


//Find the First Non-Repeating Character
function firstNonRepeating(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        charCount[str[i]] = (charCount[str[i]] || 0) + 1;
    }
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }
    return null; // No non-repeating character found
}
console.log(firstNonRepeating("swiss")); // Output: "w"


//Replace All Occurrences of a Character
function replaceAll(str, target, replacement) {
    return str.split(target).join(replacement);
}
console.log(replaceAll("hello world", "o", "a")); // Output: "hella warld"


//Check if String Contains Only Digits
function isDigi(str) {
    for(i of str){
        if(i.isDigit()){
            return true;
        }
    }
}
console.log(isDigi("12345")); // Output: true 


//Check if Two Strings are Rotations of Each Other
function areRotations(str1, str2) {
    if (str1.length !== str2.length) return false;
    let combined = str1 + str1;
    return combined.includes(str2);
}
console.log(areRotations("abcde", "cdeab")); // Output: true



//Find the Most Repeated Character
function mostRepeated(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        charCount[str[i]] = (charCount[str[i]] || 0) + 1;
    }
    let maxChar = null;
    let maxCount = 0;
    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }
    return maxChar;
}
console.log(mostRepeated("hello world")); // Output: "l"


//Check if String is a Substring of Another String
function isSubstring(str1, str2) {
    return str1.includes(str2);
}
console.log(isSubstring("hello world", "world")); // Output: true   



