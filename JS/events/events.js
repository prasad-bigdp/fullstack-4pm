function display ()
{
    console.log("display id started")
    alert("button is clicked")
}
function display2 ()
{
    console.log("hellloooooo")
}
//event handler--> u will declare events in html and define them in js
const button = document.getElementsByTagName('button')[1]
button.addEventListener('click', display)
button.addEventListener("click", display2)
function changeBG(){
    document.body.style.backgroundColor="green"
}
function change() {
	document.body.style.backgroundColor = "white"
}
button.addEventListener('mouseover', changeBG)
button.addEventListener('mouseout', change)
const btnp = document.getElementById('btn2')
btnp.addEventListener('click', function ()
{
    alert("button is clicked")
})
gp.addEventListener('click', function ()
{
    alert("grand parent got clicked")
},true)
p.addEventListener("click", function () {
	alert("parent got clicked",true)
})
c.addEventListener("click", function () {
	alert("child got clicked",true)
},true)
gc.addEventListener("click", function () {
	alert("grand child got clicked")
}, true)
document.getElementById("buttons").addEventListener('click', function (e)
{
    console.log(e.target.textContent)
})
let count_values = document.getElementById("count")
let count = 0
incrw.addEventListener("click", function() {
	count++
	count_values.textContent = count
})
decr.addEventListener("click", function() {
	count--
	count_values.textContent = count
})
function reset() {
	count = 0
	count_values.textContent = 0
}
res.addEventListener("click", reset)