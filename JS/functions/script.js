var a = 20, b = 30;
function sum()
{
    var a = 10, b = 20; //local variables
    console.log(a+b)//30
}
sum()
function sum2 (a, b)
{
    console.log(a+b)
}
sum2(3, 5)
function sum3 (a, b)
{
    return a + b;
}
var result = sum3(5, 6);
console.log(result)



function task4 (str, num)
{
  return str.charAt(num-1)
}
var x=task4("PRASAD",4)
console.log(x)
function AREA (r)
{
    return Math.PI * r * r;
}
var x = AREA(7);
console.log(x);






