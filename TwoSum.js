var twoSum = function(nums, target) {
    const map=new Map()
    for(let i=0;i<nums.length;i++){
        let remaining = target-nums[i]
        if(map.has(remaining)){
            return [map.get(remaining),i]
        }
        map.set(nums[i],i)
    }
    return []
};
const nums=[2,7,11,15]
const target=9
console.log(twoSum(nums,target))