var str = "pra  sad"
var str1 = 'This is the simple sentense'
var msg= "the kalam said ,\"dream Big\""
console.log(msg, typeof str)
console.log("prasad \t shekhar");
var count = 20;
console.log("the value is " + count) //string concatenation
console.log(
	` Lorem ipsum dolor ${count}  sit amet consectetur, adipisicing ${count} elit. Praesentium, itaque ${count} molestias. Culpa ipsum dicta rerum harum optio reprehenderit cum aut. `,
)
//String methods
console.log(str.length)// length return no.of characters including spaces
console.log(str.split(''))//split is used to split the string based on given character.if no charcter given it divides each character. it always returns an array
//javascriapt
console.log(str.indexOf('a'), str.lastIndexOf('a'))// indexOf and lastIndeOf returns the index value of first and last ocuurences of that character in given string respectively

console.log(str.charAt(2))
//reverse a string can be acheived by two string methods and one array method
console.log(str.split('').reverse().join(''));
console.log(str.replaceAll(' ', 'k'))//replace will take two values , first one will be replaced by second , but only one time, to replace all values, use replaceAll
var str2= "kamalhasan"
console.log(str2.toUpperCase(), str.toLowerCase(), str.trim(), str.concat("hsghsg"), str.endsWith('pr'), str2.substring(3, 4),
    str2.slice())
    console.log(str2)
// strings in JS are immutable--> you cannot change them
str2 = str2 + "x"
str2="raj"
console.log(str2)
//boolean is used for true or false
//boolean, Boolean is a constructor to convert any data type into boolean
var x = Boolean(undefined)
var y= 1<0<5
console.log(x, typeof x,y,typeof y)
console.log(3 + x);
//undefined and null
// undefined is acidental absence of a value;
//null means desired abscence of a value;
var h;
var t = null;
console.log(h, t, typeof h, typeof t)
// operators
//k=a + b ==> a and b are called operands, + is called operator, a+b is called operation/expression;
var a = 30, b = 20;
console.log(`Addition is  ${(a + b)}`)
console.log(`subtraction is `+(a-b))
console.log("multiplication is" + (a * b))
console.log("division is " + (a / b))
console.log("remainder is " + a % b)
console.log("power is "+ 2^3)

