// console.log("bye bye everyone")
// var a = Number(prompt("Enter a value"));
// var b = Number(prompt("enter another value"));
// alert(a + b)
// alert(a - b)
// alert(a * b)
// alert(a / b)
// confirm("Are you sure?")





/*
2^2 2^1 2^0

0-00
1-01
2-10
3-11
4-100
5-101
6-110
7-111
8-1000

*/
var a = 23;
var c = 25252552525;
console.log(a, typeof a);

//Default Number Methods
var b=23.689
console.log(b.toFixed(1))
console.log(b.toPrecision(3))
console.log(c.toString(16))
var d = 16;
//23 number
//numbers also have default methods called Math methods.
console.log(Math.sqrt(d), Math.cbrt(d), Math.abs(-10), Math.pow(d, 2), d * d, d ** 2, Math.max(a, b), Math.min(a, b));

var k = -3.4;
console.log(Math.round(k), Math.floor(k), Math.ceil(k))
//get a random value,Math.random will give random values between 0.0 to 1.0
console.log(Math.round(Math.random()*10000))













