function orderFood(list) {
  let counts = {};
  for (let item of list) {
    const developerMeal = item['meal'];
    const developerLanguage = item['language'];


    //console.log(developerMeal);
    //console.log(developerLanguage);

// this function checks the count of the different meals
    if (counts[developerMeal]){
        counts[developerMeal]++;
    }else {
        counts[developerMeal] = 1;
    }

// this will count the developer languages 
    if (counts[developerLanguage]){
        counts[developerLanguage]++;
    }else {
        counts[developerLanguage] = 1;
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