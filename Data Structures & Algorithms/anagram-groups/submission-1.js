class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let i = 0; i < strs.length; i++) {
            const a = Array.from({ length: 26 }).fill(0);
            const t = strs[i];
            for (let j = 0; j < t.length; j++) {
                const index = t[j].charCodeAt() - "a".charCodeAt();
                a[index]++;
            }
            map.set(a, t);
        }

        const fixedMap = new Map();

        for (const [arr, word] of map) {
            const hashString = arr.join("#");

            if (!fixedMap.has(hashString)) {
                fixedMap.set(hashString, []);
            }

            fixedMap.set(hashString, [...fixedMap.get(hashString), word]);
        }

        return [...fixedMap.values()];
    }
}
