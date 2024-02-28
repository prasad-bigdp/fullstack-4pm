function fetchData ()
{
    fetch("https://fakestoreapi.com/products")
        .then(function (res) { return res.json() })
        .then(function (data)
        {
        displayData(data)
    })
}
function displayData (data)
{
    data.forEach(function (pr)
    {

       
        const pro = document.createElement('div');
        pro.classList.add('product');
        const t = document.createElement('h3')
        t.textContent=pr.title
        const p = document.createElement('p')
        p.textContent= "price:$"+pr.price
        const im = document.createElement('img')
        im.src = pr.image;
        pro.append(im,t,p)
        document.getElementById('main').appendChild(pro)
  })
}
fetchData();
