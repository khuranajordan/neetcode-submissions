class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const arr = Array.from({ length: 26 }).fill(0);

        for (let i = 0; i < s.length; i++) {
            const index = s[i].charCodeAt() - "a".charCodeAt();
            arr[index]++;
        }

        for (let i = 0; i < t.length; i++) {
            const index = t[i].charCodeAt() - "a".charCodeAt();
            arr[index]--;
        }

        return arr.every((x) => x === 0);
    }
}
