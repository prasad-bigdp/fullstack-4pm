const x = 20;
let obj2 = {
    name: "shekhar",
    age:"55"
}
let arr=[5,8,9,12]
const  isPositive =(a)=>//named export
{
    if (a > 0)
    {
        console.log(` ${a} is positive`);
    }
    else console.log(` ${a} is negitive`)
}
class Person
{
    name; age;
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    display = () =>
    {
        console.log(this,this.name,this.age)
    }
}
export default x;//default export 
export { Person, isPositive,obj2,arr }//named export

