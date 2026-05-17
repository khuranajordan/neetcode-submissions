class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const a = Array.from({ length: nums.length });
        const obj = {};

        for (let i = 0; i < nums.length; i++) {
            if (obj[nums[i]]) {
                obj[nums[i]] += 1;
            } else {
                obj[nums[i]] = 1;
            }
        }

        for (const k in obj) {
            const key = +k;
            const value = obj[key];
            const v = Array.isArray(a[value]) ? [...a[value], key] : [key];
            a[value] = v;
        }

        const res = [];
        for (let i = a.length - 1; i >= 0; i--) {
            if (a[i]) res.push(...a[i]);
        }

        return res.slice(0, k);
    }
}
