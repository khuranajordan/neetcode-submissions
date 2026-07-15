class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    leftToRight(nums) {
        let lr = [];
        let x = 1;

        for (let i = 0; i < nums.length; i++) {
            lr.push(x);
            x *= nums[i];
        }

        return lr;
    }

    productExceptSelf(nums) {
        let output = this.leftToRight(nums);

        let rightProduct = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= rightProduct;
            rightProduct *= nums[i];
        }

        return output;
    }
}
