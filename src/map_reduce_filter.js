const authors = [
  {
    author_id: 1,
    first_name: "Basarat",
    last_name: "Ali",
    Age: 20,
  },
  {
    author_id: 2,
    first_name: "Mike",
    last_name: "Cantelon",
    Age: 30,
  },
  {
    author_id: 3,
    first_name: "Marc",
    last_name: "Harter",
    Age: 40,
  },
];

//map
const authorFullNames = authors.map(
  (author) => `${author.first_name} ${author.last_name}`
);
console.log(authorFullNames);

//filter
const ageUnder40 = authors.filter((author) => author.Age < 40);
console.log(ageUnder40);

//reduce
const sumAges = authors.reduce((sum, author) => sum + author.Age, 0);
console.log(sumAges);

//Reduce for All

//Reduce For Mapping
const authorFullNames_2 = authors.reduce((maps, author) => {
  maps.push(`${author.first_name} ${author.last_name}`);
  return maps;
}, []);
console.log(authorFullNames_2);

//Reduce For Filter
const ageUnder40_2 = authors.reduce((filters, author) => {
  if (author.Age < 40) filters.push(author);
  return filters;
}, []);
console.log(ageUnder40_2);
