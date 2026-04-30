class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {}


        for (let i = 0; i < nums.length; i++) {
            obj[nums[i]] = i
        }

        for (let i = 0; i < nums.length; i++) {
            const diff = (target - nums[i])

            if (obj[diff] && obj[diff] !==i) {
                return [i, obj[diff]]
            }
        }

        return []
    }
}

