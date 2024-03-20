"use strict";
var _a;
let b = 20;
console.log(b);
let a = 25; //this statement implies a is a number type. typescript provide static typing
/* this is called type annotation*/
//declare 5 values of different data types using type annotation
let c = "raj";
let d = true;
let e = undefined;
let f = null;
console.log(typeof (a), typeof (c), typeof (d), typeof (e), typeof (f));
let g = "shekhar";
g = 20;
let h = 25; // this is called type inference
let pa = document.getElementById('para');
console.log(pa.textContent);
/*as means assertion, when typescript inference is wrong,you have to asset ts that the element is sometype by "as" */
let pa2 = (_a = document.getElementById('para')) === null || _a === void 0 ? void 0 : _a.textContent;
console.log(pa2);
/* union*/
let i = 35;
console.log(i, typeof (i));
i = "raj";
console.log(i, typeof i);
/* declare a value which will take either boolean or number*/
/* arrays - collection of similar data type items */
let num = [2, 5, 7, 9];
num.forEach((n) => console.log(n));
let names = ["raj", "shekhar", "john"];
let random = ["raj", 25];
/*tuple*/
let tuple1 = ["raj", 25];
/*enum*/
/* enum data type is used for constant values*/
var days;
(function (days) {
    days[days["sunday"] = 111] = "sunday";
    days[days["monday"] = 112] = "monday";
    days[days["tuesday"] = 113] = "tuesday";
    days[days["wednesday"] = 114] = "wednesday";
    days[days["thurdsay"] = 115] = "thurdsay";
    days[days["friday"] = 116] = "friday";
    days[days["saturday"] = 117] = "saturday";
})(days || (days = {}));
console.log(days[111]);
/* functions */
function sum(a, b) {
    if (b)
        return a + b;
    else
        return a;
}
const sum2 = (a, b) => a + b;
sum(5);
let result = sum(2, 3);
console.log(result, typeof (result));
let obj1 = {
    name: "raj",
    email: "a@a.com"
};
let z = 25;
console.log(`value of z is ${z}`);
let ref1 = {
    name: "raj",
    email: "a@a.com",
    password: "raj12345"
};
