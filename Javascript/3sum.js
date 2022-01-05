// 3sum
// The idea is to first sort the array from small to large values.
// We will use two pointers to move in our array to find the 3 sum combination while trying to minmize run time. we also need to make sure there are no duplicates.
// Since we 
let threesum = function (arr) {
  let result = [];

  // sort the array first
  arr = arr.sort((a, b) => a - b);

  // Loop through the array. We do - 2 because we use 2 pointers so there's no need to check the whole array.
  for (let i = 0; i < arr.length - 2; i++) {
    // we check i here to verify its not a duplicate value. 
    // 1. If the index is at 0 then we check this number.
    // 2. If the index is not 0, we check if the number at the index is the same as the number before it. If it is then we skip it since its a duplicate.
    if (i === 0 || (i > 0 && arr[i] !== arr[i - 1])) {
      // Now we don't have to hit duplicates.
      let low = i + 1;
      let high = arr.length - 1;

      let sum = arr[i] + arr[low] + arr[high];

      while (low < high) {
        if (sum === 0) {
          result.push([arr[i], arr[low], arr[high]]);
          // we want to avoid duplicates so move our pointers until they're different numbers
          while (low < high && arr[low] == arr[low + 1]) {
            low++;
          }
          while (low < high && arr[high] == arr[high - 1]) {
            high--;
          }
          low++;
          high--;
        } else if (sum < 0) {
          low++;
        } else {
          high--;
        }
      }
    }
  }
  console.log(result);
  return result;
};


threesum([-1,0,1,2,-1,-4]);