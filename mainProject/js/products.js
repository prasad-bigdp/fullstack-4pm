const products = JSON.parse(localStorage.getItem('products'))
console.log(products)
const mainDiv = document.getElementById('products');
displayData(products)

function displayData (data)
{
    mainDiv.textContent=""
    data.map((pro) =>
    {
        const div = document.createElement('div')
        const image = document.createElement('img')
        image.src = pro.thumbnail;
        image.alt = pro.title;
        image.height = "200";
        image.width = "100";
        image.classList.add('card-img')
        const link = document.createElement('a')
        link.href = ` pro.html/?id=${pro.id} `
        link.target="_blank"
        const title = document.createElement('h3');
        title.textContent = pro.title;
        title.classList.add('card-title')
        link.appendChild(title)
        div.classList.add('card')
        div.append(image,link);
        mainDiv.appendChild(div)
    })
}
document.getElementById("categories").addEventListener("change", filterSelect)
let filteredProducts=[]
function filterSelect(e)
{
    alert(e.target.value)
    filteredProducts = products.filter((pro) => pro.category == e.target.value);
    console.log(filteredProducts)
    displayData(filteredProducts)
}

document.getElementById('sorting').addEventListener('select', sortProducts)
function sortProducts (e)
{
    if (e.target.value == 0)
    {
         displayData(products.map((pro) =>sort())) 
    }
    else if (e.target.value == 1)
    {
       displayData(products.map((pro)=>pro.sort())) 
    }
    else{}
}
document.getElementById('search').addEventListener('input', searchResults)
function searchResults (e)
{
    if (filteredProducts)
    {
        displayData(filteredProducts.filter((pro) =>
        {
            return (
                pro.title.toLowerCase() == e.target.value.toLowerCase() ||
                pro.category.toLowerCase() == e.target.value.toLowerCase()
            )
        }))
    }
    else
    {
        displayData(
					products.filter((pro) => {
						return (
							pro.title.toLowerCase() == e.target.value.toLowerCase() ||
							pro.category.toLowerCase() == e.target.value.toLowerCase()
						)
					}),
				)
    }
}
