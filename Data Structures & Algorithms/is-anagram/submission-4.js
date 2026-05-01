class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = {};

        const longer_string = s.length > t.length ? s : t;
        const shorter_string = longer_string === s ? t : s;

        for (let i = 0; i < shorter_string.length; i++) {
            if (map[shorter_string[i]]) {
                map[shorter_string[i]] += 1;
            } else {
                map[shorter_string[i]] = 1;
            }
        }

        for (let i = 0; i < longer_string.length; i++) {
            if (map[longer_string[i]] && map[longer_string[i]] > 0) {
                map[longer_string[i]] -= 1;
            } else {
                return false;
            }
        }

        return true;
    }
}
