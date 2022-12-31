const salary = Number(prompt("Please enter your salary"));
const minumumWage = 5500;
const increasedSalary = salary >= minumumWage ? salary * 1.1 : salary * 1.5;
console.log("Salary:", salary,"Increased Salary:",Math.trunc(increasedSalary));
