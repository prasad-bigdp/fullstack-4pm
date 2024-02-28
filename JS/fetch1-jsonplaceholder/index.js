function fetchData() {
	fetch("https://jsonplaceholder.typicode.com/comments")
		.then(function (res) {
			console.log(res)
			return res.json()
		})
		.then(function (data) {
            console.log(data);
            displayData(data);
        })
        .catch(function (err)
        {
        console.log("error")
    })
	/* a promise is a object which describes eventual completion of asynchronous function*/
}
fetchData();
function displayData (d)
{
    d.forEach(function (d)
    {
        const comment = document.createElement("div")
        comment.classList.add('comment')
		const name = document.createElement("h3")
		name.textContent = d.name
		const comm = document.createElement("p")
		comm.textContent = d.body
		const email = document.createElement("p")
		email.textContent = d.email
		comment.append(name, comm, email)
		document.getElementById("data").appendChild(comment)    
    })
    
}
