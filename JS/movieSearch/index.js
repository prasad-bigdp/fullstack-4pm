const searchText = document.getElementById('searchText');
const searchButton = document.getElementById('searchButton');
const mainDiv= document.getElementById('main')
searchText.addEventListener('input', fetchData)
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