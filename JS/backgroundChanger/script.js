let colors=['red','blue','yellow','green','violet','pink']
function change ()
{
    // let randomIndex = Math.floor(Math.random() * 6)
    // console.log(colors[randomIndex])
    // document.body.style.backgroundColor=colors[randomIndex]
    const randomColor = '#' + Math.round(Math.random() * 10000000).toString(16)
    console.log(randomColor)
    document.body.style.backgroundColor = randomColor
}
function changeB()
{
    const ele = document.getElementById('b');
    console.log(ele)
    ele.style.backgroundColor =
			"#" + Math.round(Math.random() * 10000000).toString(16)
}
/* i want it to generate any color-->HINT: every color will hex code like #c89c60*/

function changeA() {
	const ele = document.getElementById("a")
	console.log(ele)
	ele.style.backgroundColor =
		"#" + Math.round(Math.random() * 10000000).toString(16)
}