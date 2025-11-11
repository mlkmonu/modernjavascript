const array = [1, 2, 3, 4];
// const array = ["monu", "kumar"]

array.forEach((index) => {
  console.log(`${index + 1}.number`);
});

console.log(array.map((num) => num * 2));

console.log(array.filter((num) => num >= 2));

console.log(array.reduce((sum, num) => sum + num, 0));

console.log(array.find((num) => num > 2));

console.log(array.every((num) => num > 1));
