let a = 25
if (a >= 18)
{
    console.log("eligible")
}
else
{
    console.log("not eligible")
}
let b = 25;
if (b % 2 == 0)
    console.log("even")
else
    console.log("odd")
/* take a string check whether it starts with vowel or not*/

let str = "prasad".toLowerCase()
if ((str.startsWith('a')) || (str[0] == 'e') || (str[0] == 'i') || (str[0] == 'o') || (str[0] == 'u'))
    console.log("ur name starts with vowel")
else
    console.log("ur name is not starting with vowl")
let num=0
if (num > 0)
{
    console.log("positive")
}
else if(num<0)
{
    console.log("negitive")
}
else 
{
    console.log("neigher positive nor negitive")
}
//take 3 numbers a,b,c, iwant u to compare them and print largest and smallest number without using max/min
let day = 6;
if (day == 1) console.log("Monday")
else if (day == 2) console.log("tuesday")
else if (day == 3) console.log("wednesday")
else if (day == 4) console.log("thursday")
else if (day == 5) console.log("friday")
else if (day == 6) console.log("saturday")
else if (day == 7) console.log("sunday")
else console.log("wrong input")