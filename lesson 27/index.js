const user = { name: "John", age: 30 };
console.log(user.hasOwnProperty("age"));

//////////////

sumOfSalaries = (obj) => {
  let totalSalary = 0;
  for (const salary of Object.values(obj)) {
    totalSalary = totalSalary + salary;
  }
  return totalSalary;
};

console.log(sumOfSalaries({ Ivan: 10, Mila: 40, Egor: 5, Alisher: 20 }));
let obj = { width: 100, height: 300, title: "menu" };

////////////////////////////

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
    console.log(key, obj[key]);
  }
}
multiplyNumeric({ width: 100, height: 300, title: "menu" });
/////////////////////////
