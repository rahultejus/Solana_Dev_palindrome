const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter potential palindrome: ', checkForPalindrome);

function checkForPalindrome(s) {
    if (s == s.split("").reverse().join("")) {
        console.log(s, "is a Palindrome");
    } else {
        console.log(s, "Not a Palindrome");
    }
}