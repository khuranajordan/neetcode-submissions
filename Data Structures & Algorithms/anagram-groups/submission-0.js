class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        strs.forEach((str) => {
            const n = str.length;
            const a = Array.from({ length: 26 }).fill(0);
            for (let i = 0; i < n; i++) {
                const index = str[i].charCodeAt() - "a".charCodeAt();
                a[index] += 1;
            }

            map.set(a, str);
        });

        const fixedMap = new Map();

        for (const [arr, word] of map) {
            const key = arr.join("#");

            if (!fixedMap.has(key)) {
                fixedMap.set(key, []);
            }
            fixedMap.get(key).push(word);
        }

        return [...fixedMap.values()]
    }
}
