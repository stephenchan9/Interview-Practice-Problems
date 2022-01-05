/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let result = [];
    
    // sort the array so that's it increasing. This adds o(nlogn) complexity.
    nums = nums.sort((a,b) => a-b)
    
    // loop through the sorted array.
    // Since we're using 2 poiunters there's no need for index i to check the last 2 numbers in the array.
    for(let i = 0; i < nums.length - 2; i++){
        // We add a if condition here to check for duplicates.
        // If index i is at 0 then we work with this value no matter what
        // If index is greater than 0, we then check if the previous number is the same as current number. Skip it if its duplicate
        if(i === 0 || (i > 0 && nums[i] !== nums[i-1])){
            // Now we know its not a duplicate
            let low = i+1;
            let high = nums.length - 1;
                        
            // We loop to handle moving our low and high pointers.
            // If our low pointer moves past the high pointer, then we stop the loop and move our index i.
            while (low < high){
                let sum = nums[i] + nums[low] + nums[high];

                if (sum === 0){
                    // Then we found  triplet
                    result.push([nums[i], nums[low], nums[high]]);
                    
                    // Check for duplicates. We keep moving our pointers until they aren't next to a duplicate.
                    while (nums[low] === nums[low+1]){
                        low++;
                    }
                    while (nums[high] === nums[high - 1]){
                        high--
                    }
                    
                    // Move our pointers.
                    low++;
                    high--;
                } else if (sum < 0){
                    // move our low pointer 
                    low++;
                } else {
                    // move our high pointer
                    high--;
                }
            }
        }
    }
    
    return result;
};