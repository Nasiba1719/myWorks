// //CODE 1

// const employees = [
//     { name: 'John', age: 30, department: 'Marketing' },              // Işçilərin siyahısıdı bunlar: Ad, yaş,sahə
//     { name: 'Jane', age: 25, department: 'Finance' },
//     { name: 'Jim', age: 35, department: 'Sales' },
//     { name: 'Bob', age: 40, department: 'Marketing' },
//     { name: 'Sue', age: 28, department: 'Finance' }
//   ];

//   function filterEmployees(data, condition, callback) {             // Burada işçiləri filtirlədi(bilgilər, şərt, callback)
//     const filteredData = data.filter(function(item) {                 //Datalari filtirleyir
//       return condition(item);                                           //şərt yoxdur
//     });

//     callback(filteredData);
//   }

//   function isMarketing(employee) {                                                          //BUrada sahesi Marketing olanlari qaytarmalidir
//     return employee.department === 'Marketing';
//   }

//   filterEmployees(employees, isMarketing, function(result) {  // Deyirki employees.in icinde Marketing sahesinde isleyenlerin neticesini yazdir
//     console.log(result);
//   });




//CODE 2
const products = [
  { name: 'iPhone', price: 999 },
  { name: 'iPad', price: 799 },
  { name: 'MacBook', price: 1499 },
  { name: 'iMac', price: 1999 }
];

//products.sort((a, b) => a.price-b.price);    yenisini yazdim
//console.log(products);



function sortProducts(data, sortCriteria, callback) {
  const sortedData = data.sort(function(a, b) {
    return sortCriteria(a) - sortCriteria(b)                //sehvi duzeltdim
  });

  callback(sortedData);
}

function sortByPrice(product) {
  return product.price;
}

sortProducts(products, sortByPrice, function(result) {
  console.log(result);
});