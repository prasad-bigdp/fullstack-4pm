console.log("start")
//Global Execution Content or window or js can use a value before its initialization. this is called Hoisting
/* var is used in olden times till Es2015/Es6, then we started using let or const */
/* it will instantiate the vaiables in temporal dead zone*/
/* let and cost values cannot be accesses before initialization*/

console.log(a)
// console.log(b)
// console.log(c)
var a = 55;/* function scoped*/

var a = 56
debugger;
a = 68
/* let and const are block scoped*/
let b = 56;
b = 58
debugger;
const c = 57;

console.log(a);
function fun ()
{
    if(true)
    {  
        let k = 55;
    }
    console.log(k)
}
fun()

console.log("over")