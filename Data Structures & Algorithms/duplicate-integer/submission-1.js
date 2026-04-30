class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const s = new Set();
        let ans = false;

        nums.forEach((num) => {
            if (s.has(num)) ans = true;
            s.add(num);
        });

        if (!ans) ans = false;

        return ans;
    }
}
