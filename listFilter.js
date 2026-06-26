function filter_list(l) {
  // Return a new array with the strings filtered out
  if (l.length === 0){
    return 'cannot take empty arrays'
  }

  for (let num of l){
    if (num < 0){
      return 'Can only take non-negative integers(Numbers)';
    }
  }
  
  const onlyNumbers = l.filter(item => {
    return typeof item === 'number';
  });

    console.log (onlyNumbers)

  return onlyNumbers

}

console.log (filter_list([1, 'a', 2, 'b', 3]))
console.log(filter_list([1, 'hello', 2, 'world']));
console.log(filter_list(['a', 'b', 'c']));
console.log(filter_list([1, 2, 3, 4, 5]));
console.log(filter_list([-1, 2, 'a', 3]));
console.log(filter_list([]));


