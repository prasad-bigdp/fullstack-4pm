//unary plus- used to convert any value into number
console.log(+1, +'', +true, +"prasad");
//increment and decrement
var a = 25;
console.log(a)
++a;
console.log(a)
a--;
console.log(a)
// there are two way increment or decrement happens, one is pre increment another is post increment
//++a is pre increment, a++ is post--> pre increment first update the value and returns, post increment first returns the value and updates

var b = 12;
var x = ++b + b++ - b++ + ++b; //13 + 13 - 14 + 16
//pre and post decrement also works similar but they decrease the value by 1
console.log(x, b)

var c = 14, d = 20;
var y = c++ + ++c + d-- + --d // 14 + 16 + 20 + 18
console.log(y, ++y)


var e = 15;
e += 5;
e -= 2;
e *= 2;
e /= 9;
e %= 3;
e = 25;
// e += 5 =>e=e+5;
console.log(e)

var x = (e > 20)  ? 25 : 20;
console.log(x)
var a = null,b=27
var x = a ?? b;
console.log(x)





