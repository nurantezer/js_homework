const number = prompt("Please enter a 3-digist number")
const ones= number%10
const tens= Math.floor(number/10)%10
const hundreds = Math.trunc(number/100)
console.log(ones,tens,hundreds)
console.log(`Hundreds:${hundreds},Tens:${tens},Ones:${ones}`)
const num1=3
console.log(num1==3);
console.log(num1===3);
console.log(num1==="3");

const ad="Nuran"
console.log("Nuran", typeof "Nuran");
const num="1"
console.log("1", typeof"1");
console.log(typeof NaN)

let a = 20 + 30;
console.log(a);

let c= 5
let b= 2
console.log("c-b=", c-b);
{
   let c = 5;
   let b = 2;
   console.log("c-b=", c - b); 
}

const z=5
const d=2
console.log("z-d", z-d);

const k=5, l=2, m="Clarusway"
console.log(k==5)
console.log(l=="2");
console.log(m=="clarusway");
console.log(m=="Clarusway");












