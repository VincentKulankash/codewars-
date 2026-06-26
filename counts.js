function mostFrequentItemCount(collection) {
  //checks if the array has any values
  if (collection.length === 0){
    return 0
  }  
  
  let counts = {};
  let maxCounts = 0; 
  
  console.log(maxCounts)
  
  for (let item of collection){
    if (counts[item]){
      counts[item]++;
    }else {
      counts[item] = 1;
    }
    
    if (counts[item] > maxCounts) {
      maxCounts =counts[item];
    }
  }
  
  return maxCounts
  console.log(maxCounts)

}

console.log(mostFrequentItemCount([3, -1, -1, 2]));

console.log (typeof 42) 



function filter_list(l) {
  // Return a new array with the strings filtered out
  for (let num of l){
    if (num < 0){
      return 'Can only take non-negative integers(Numbers)';
    }
  }
  
  const onlyNumbers = l.filter(item => {
    return typeof item === 'number';
  });

  return onlyNumbers
  console.log (onlyNumbers)
  console.log (filter_list([1, 'a', 2, 'b', 3]))
  console.log (onlyNumbers)

}





