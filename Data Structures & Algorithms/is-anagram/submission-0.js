class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    sortString(s) {
        function compareFn(a, b) {
            if (a < b) {
                return -1;
            } else if (a > 0) {
                return 1;
            }
            return 0;
        }

        return s.split("").sort(compareFn).join("")
    }

    isAnagram(s, t) {
        const sortedS = this.sortString(s)
        const sortedT = this.sortString(t)
    
        return sortedS === sortedT
    }
}
