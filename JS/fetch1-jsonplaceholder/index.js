function fetchData ()
{
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(function (r)
        {
            console.log(r)
           return r.json()
            
        })
        .then(function (d)
        {
        console.log(d)
    })
    /* a promise is a object which describes eventual completion of asynchronous function*/
}
fetchData()