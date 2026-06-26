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




function orderFood(list) {
  let counts = {};
  for (let item of list) {
    const developerMeal = item['meal'];
    console.log(developerMeal)
    if (counts[developerMeal]){
        counts[developerMeal]++;
    }else {
        counts[developerMeal] = 1;
    }

  }
  

  return counts;
}

const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', meal: 'vegetarian' },
];

const result = orderFood(list1);
console.log (result)







