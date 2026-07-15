class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    leftToRight(nums) {
        let lr = [];
        let x = 1;
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                x = 1;
            } else {
                x = x * nums[i - 1];
            }
            lr.push(x);
        }

        return lr;
    }
    rightToLeft(nums) {
        let rl = [];
        let x = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                x = 1;
            } else {
                x = x * nums[i + 1];
            }
            rl.push(x);
        }

        return rl.reverse();
    }

    productExceptSelf(nums) {
        let lr = this.leftToRight(nums);
        let rl = this.rightToLeft(nums);

        return lr.map((x, i) => {
            return x * rl[i];
        });
    }
}
