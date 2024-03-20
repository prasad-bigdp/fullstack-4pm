let b = 20;
console.log(b)
let a: number = 25;//this statement implies a is a number type. typescript provide static typing
/* this is called type annotation*/
//declare 5 values of different data types using type annotation
let c: string = "raj";
let d: boolean = true;
let e: undefined = undefined;
let f: null = null;
console.log(typeof (a), typeof (c), typeof (d), typeof (e), typeof (f));
let g: any = "shekhar";
g = 20;
let h = 25;// this is called type inference
let pa = document.getElementById('para') as HTMLParagraphElement
console.log(pa.textContent);
/*as means assertion, when typescript inference is wrong,you have to asset ts that the element is sometype by "as" */
let pa2 = document.getElementById('para')?.textContent
console.log(pa2);

/* union*/
let i: number | string = 35;
console.log(i, typeof (i))
i = "raj";
console.log(i, typeof i)
/* declare a value which will take either boolean or number*/
/* arrays - collection of similar data type items */
let num: number[] = [ 2, 5, 7, 9 ]
num.forEach((n) => console.log(n))
let names: string[] = [ "raj", "shekhar", "john" ];
let random: (string | number)[] = [ "raj", 25 ];
/*tuple*/
let tuple1: [ string, number ] = [ "raj", 25 ];

/*enum*/
/* enum data type is used for constant values*/
enum days{
    sunday=111,
    monday,
    tuesday,
    wednesday,
    thurdsay,
    friday,
    saturday
}
console.log(days[ 111 ]);
/* functions */
function sum(a: number, b?: number): number {
    if (b)
        return a + b;
    else
        return a;
}
const sum2 = (a: number, b: number): number =>a + b;
sum(5)
let result = sum(2, 3);
console.log(result, typeof (result));
//objects
/* interfaces or type alias*/
interface myObj{
    name: string,
    age?: number,
    email: string,
}
let obj1:myObj = {
    name:"raj",
    email:"a@a.com"
}
/* make an interface for registration page where email and password are mandatory and name and salary are optional*/
interface refForm{
    name?: string,
    salary?: string,
    email: string,
    password:string|number
}
let z = 25;
console.log(`value of z is ${z}`)
let ref1:refForm = {
    name: "raj",
   email:"a@a.com",
    password:"raj12345"
}

