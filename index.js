//forEach

module.exports = {
  forEach(arr, fn) {
    // for (let i = 0; i < arr.length; i++) {
    //   const value = arr[i];
    //   fn(value, i);
    // }
    for (let i in arr) {
      fn(arr[i], i);
    }
  },
  map(arr, fn) {
    const result = [];
    for (let i in arr) {
      result.push(fn(arr[i], i));
    }
    return result;
  },
};
