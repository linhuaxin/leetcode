var threeSum = function(nums) {
  let ans = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) { continue; }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let s = nums[i] + nums[l] + nums[r];

      if (s < 0) {
        l++;
      } else if (s > 0) {
        r--;
      } else {
        ans.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) { l++; }
        while (l < r && nums[r] === nums[r - 1]) { r--; }
        l++;
        r--;
      }
    }
  }

  return ans;
};
