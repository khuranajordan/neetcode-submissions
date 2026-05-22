class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let finalString = "";
        for (let i = 0; i < strs.length; i++) {
            const s = strs[i];
            const n = s.length;
            finalString += `${n}#${s}`;
        }
        return finalString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log({str})
        let res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }
}
