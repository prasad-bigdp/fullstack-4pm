//compare primitve and non-primitive

var a = "raj";
var b = "raj";
console.log(a.toUpperCase())
console.log(a === b)
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4];
console.log(arr1 == arr2)
//
var arr = [1, 5, 8, 6, 7, 5]
console.log(arr.length)
arr[2] = 10;
console.log(arr)
/* array methods */
/* insert value into array */
arr.push(9, 12, 8, 9, 7, 5)
arr.unshift(2,3,4,5)
/* deleting*/
arr.pop()
arr.pop()
arr.shift()

console.log(arr)
arr.splice(2,0,11,12,15,25)
console.log(arr)

/*Task1: take an array of 5 even numbers numbers and apply push,pop,shift,unshift and splice and print them after every operation */
console.log(arr.indexOf(12))
console.log(arr.lastIndexOf(12))
console.log(arr.concat(arr2))
console.log(arr)
// console.log(arr.copyWithin(0, 3, 8))
console.log(arr.fill(2, 3, 8))
/* this find returns element which is greater than 10 ,it returns only first element */
/* if u want index , use findIndex*/
console.log(arr.find(function (p)
{
 return p%2==0
}))
/* in my array i want values only between  10 -20 */
var arr5 = [11, 12, 13, 15,5]
console.log(arr5.every(function (num)
{
    return (num>10) && (num<20)
}))

console.log(arr.includes(4, 5))
console.log(arr.reverse())
console.log(arr)
console.log(arr.forEach(function (num)
{
    console.log(num)
    return num*2
}))
console.log(
	arr.map(function (num) {
		console.log(num)
		return num*2
	}),
)
console.log(
	arr.filter(function (num) {
		console.log(num)
		return num%2==0
	}),
)
var arr=[1,2,3,4]
console.log(
    arr.reduce(function (p, sum)
    {
       return p+sum
    },0),
)
var arr = [6, 7, 8, 9, 10]
console.log(arr.reduce(function (prev,cur)
{
    console.log(prev,cur)
    return prev+cur
},10))


console.log(arr)


/*another way of creating*/
var arr3 = new Array(8)
console.log(arr3)

