import prasad from './script.js'//default import
import * as k from "./script.js"

//destructuring objects
const { isPositive, obj2 } = k;
let obj5 = {
    "salary": 50000,
    walk:()=>console.log("i'm walking")
}
const {salary}=obj5
const arr5 = [5, 6, 8, 7, 9]
let [a,c,,b] = arr5;
console.log(salary)
console.log(b)

//take two files and export a class and a function , both are not default and import them with import alias and destructure them and use them








console.log(prasad,k.isPositive)
// take a html and two js files and create a fn in one js and call it another js. in html connect second js
// const x = 20

// export default x
//try to export three values and import them
k.isPositive(25)
let obj = new k.Person("raj", 28)
obj.display()
console.log(obj2)
console.log(k.arr)
// take two js files , export any 5 files (fns,classes,arrays,objects) and import in main js file as one single object