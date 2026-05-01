class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()

        for(let i=0;i<nums.length;i++){
            map.set(target-nums[i], i)
        }

        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i]) && map.get(nums[i])!==i){
                return [i, map.get(nums[i])]
            }
        }
    }
}
