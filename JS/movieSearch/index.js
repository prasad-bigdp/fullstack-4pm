const searchText = document.getElementById('searchText');
const searchButton = document.getElementById('searchButton');
const mainDiv= document.getElementById('main')
searchText.addEventListener('input', fetchData)
searchButton.addEventListener('click',fetchData2)

// function x ()
// {
//     const pro = new Promise(function(resolve, reject)
//     {
//         reject("it is rejected")
//         resolve(setTimeout(function(){console.log("success")},5000))
// 		}
//     )
//      return pro
// }

// x().then(function(){console.log("something")})
//promise chaining--> why we need promises? promises solve callback hell
//to make promises syntax simple and modern, we use async-await 
function fetchData ()
{
    console.log(searchText.value)
    fetch(`https://www.omdbapi.com/?s=${searchText.value}&apikey=4827adaa`)
        .then(function(res)
        {
            console.log(res);
            return res.json()
        })
        .then(function(data)
        {
            console.log(data.Search);
            displayData(data.Search)
        })
    .catch(function(err){console.log("Error: "+err)})
}
async function fetchData2 ()
{
    const res = await fetch(`https://www.omdbapi.com/?s=${searchText.value}&apikey=4827adaa`)
    const data = await res.json()
    console.log(data.Search)
}
function displayData (movies)
{
     mainDiv.textContent = ""
    movies.forEach(function (m)
    {
       
        const mv = document.createElement('div');
        mv.classList.add('movie')
        const im = document.createElement('img');
        im.src = m.Poster;
        im.alt=m.Title
        const title = document.createElement('h2');
        title.textContent=m.Title
        const year = document.createElement('p')
        year.textContent="YEAR:"+m.Year
        mv.append(im, title, year)
        mainDiv.appendChild(mv)
    })
}