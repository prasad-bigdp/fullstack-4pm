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
        t.textContent = pr.title
        const modal = document.createElement('div')
        modal.classList.add('modal')
        const close_button = document.createElement("button")
        close_button.textContent = "❌"
       close_button.onclick = function () {
					modal.style.display = "none"
				}
        const modal_content= document.createElement('p')
        modal_content.textContent = pr.title
        modal.append(close_button,modal_content)
        const p = document.createElement('p')
        p.textContent= "price:$"+pr.price
        const im = document.createElement('img')
        im.src = pr.image;
        const button = document.createElement('button')
        button.textContent = "More Details"
        button.onclick = function ()
        {
            modal.style.display="block"
        }
        pro.append(im,t,modal,button)
        document.getElementById('main').appendChild(pro)
  })
}
function fun ()
{
}
fetchData();
