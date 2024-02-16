//example1

printMsg() //function call

//example2
function sum (a, b)
{
    console.log(a+b)
}
sum(3, 5)
//example3
console.log(printMsg)
var x = function()// function expression
{
    console.log("hello world")
}
console.log(x)
x()
// a function can be written without a name-- anonymous function
//write an anonymous function which returns square of a number
var square = function (num)
{
    return num*num
}
console.log(square(5))
var res = square(5)
console.log(res)
/*
Tas1: create a function expression with a variable number areaREct, which takes two parameters(l,b) and return l*b 
Task2: create a function which generates random 4 digits OTP and returns it, store it and print it)*/

function Area (l, b)
{
    return l * b;
}
console.log(Area(3,5))

function random ()
{
    return Math.round(Math.random()*10000)
}
console.log(random())

function Outer ()
{
    function Inner ()
    {
            var x = 20
          //scoping
        console.log("Inner function called",x)
    }
    Inner()
    console.log("outer function called",x)
}
Outer()
//Example 6
function printMsg() {
	//function declaration
	console.log("hello world") //function definition
}
function sum2 (a, b, fun)
{
    fun();
    console.log(a + b)
    return fun;
}
var z = sum2(5, 6, printMsg)
console.log(z)
 
function incr (count) { count++; console.log(count)}
function decr (count) { count--;console.log(count) }
/*Task3: write a HO fn which takes incr and decr as callbacks and use them*/
function Callback(fun1, fun2) {
    fun1(2); fun2(3);
}
Callback(incr, decr)
 
//closures
function Outer2 ()
{
    var c = 0;
    function Inner2 ()
    {
        c++;
        console.log(c)
    }
    return Inner2;
}
var p = Outer2()
console.log(p*5)
p()
p()
p()
p()
p()
/* Inner function can remember the outer function values even after outer function execution ended -closure*/
/*task4: take a callback function area into x and find the area by using radius inside x*/
function x (fun)
{
    var r = 5;
    fun(r)
}
function area (a)
{
   console.log(Math.PI*a*a)
}
x(area)

/* use internet find 3 examples of callbacks,closure ,normal functions and post it in Telegram */












