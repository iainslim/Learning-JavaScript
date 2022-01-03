const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



// // forEach (loops through array without 'for' loop)

//   for (let i = 0; i < companies.length; i++){
//       console.log(companies[i]);
//   }

// companies.forEach(function(company){
//     console.log(company.name)
// })



// // filter (Search for values matching a specific condition) 

// let legalAge = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 18) {
//         legalAge.push(ages[i]);
//     } 
// }
// console.log(legalAge);

// const legalAge = ages.filter(function(age){
//     if(age >= 18) {
//         return true;
//     }
// });

// const legalAge = ages.filter(age => age >= 18);
// console.log(legalAge);

// // get all Retail companies
// const retailCompanies = companies.filter(company => company.category == "Retail");
// console.log(retailCompanies);

// // get all companies from the 80s
// const companies80 = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(companies80);

// // get all companies that lasted at least 10 years
// const lasted10years = companies.filter(company => (company.end - company.start >= 10));
// console.log(lasted10years);


// // map (create new arrays from a current array)
// const companyNames = companies.map(function(company) {
//     return company.name;
// });

// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
// console.log(testMap);

// const sqrt = ages.map(age => Math.sqrt(age));
// console.log(sqrt);


// //sort
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if (c1.start > c2.start) {
//         return 1
//     } else {
//         return -1
//     }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies)

// const sortedAges = ages.sort((a, b) => a - b)
// console.log(sortedAges);


// // reduce
// let ageSum = 0;
// for (let i = 0; i<ages.length; i++) {
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Get total years for all companies
const totalYears = companies.reduce((total, company) => (total + (company.end - company.start)), 0);
console.log(totalYears);
