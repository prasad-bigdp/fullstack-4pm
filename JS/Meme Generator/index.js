let data;
document.getElementById("selectBox").addEventListener('input', function ()
{
    data = document.getElementById("selectBox").value;
    console.log(data)
    fetchData(data)
});
console.log(data)
async function fetchData (data)
{
    const res = await fetch(`https://api.sampleapis.com/movies/${data}`)
    const movies = await res.json();
    console.log(movies)
    displayData(movies)
}
const maindiv = document.querySelector(".movies");
function displayData (movies)
{
    maindiv.textContent=""
    movies.forEach(function (m)
    {
        const div = document.createElement('div')
        div.classList.add('movie')
         const image = document.createElement('img');
        image.src = m.posterURL;
        image.alt = m.title
        const title = document.createElement('h3')
        title.textContent = m.title;
        const anchor = document.createElement('a')
        anchor.href = `https://www.imdb.com/title/${m.imdbId}`
        anchor.appendChild(div)
        div.append(image, title);
        maindiv.appendChild(anchor)
    })
}
