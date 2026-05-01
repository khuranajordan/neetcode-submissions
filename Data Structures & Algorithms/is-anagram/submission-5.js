class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const mapTable = Array.from({ length: 26 }).fill(0);

        for (let i = 0; i < s.length; i++) {
            mapTable[s.charCodeAt(i) - "a".charCodeAt(0)]++;
            mapTable[t.charCodeAt(i) - "a".charCodeAt(0)]--;
        }

        return mapTable.every((i) => i === 0);
    }
}
