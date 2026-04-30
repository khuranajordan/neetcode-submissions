class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }

    isPalindrome(s) {
        let temp = ""
        for (let i = 0; i < s.length; i++) {
            if (this.isAlphaNumeric(s[i])) {
                temp += s[i].toLowerCase();
            }
        }

        const reverseString = temp.split("").reverse().join("")
        console.log({ temp, reverseString })
        return temp === reverseString
    }
}
