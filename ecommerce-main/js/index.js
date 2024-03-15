const url = "https://dummyjson.com/products"
async function getData ()
{
    try
    {
        let res = await fetch(url);
        if (res.ok)
        {
            let products = await res.json()
			append(products.products)
            
        }
        else
        {
            console.log("Fetching cannot be done, some network probelm")
            }
            
    }
    catch (error)
    {
        console.log(error);
    }
    
}
getData();
const cont = document.getElementById('cont');
function append (data)
{
    console.log(data)
    data.forEach((el) =>
    {
        // indivial product links by passing whole product details in URL(encoded)
         let productLink = document.createElement("a")
        productLink.href = `pages/product.html?product=${encodeURIComponent(JSON.stringify(el))}`;
        productLink.style.textDecoration = 'none';
        productLink.classList.add("col-md-4")
        let div = document.createElement("div")
        let card = document.createElement('div')
        card.classList.add('card','mb-4','h-100')
        let img = document.createElement('img')
        img.src = el.thumbnail;
        img.alt = 'image';
        img.height=300
        img.classList.add('card-img-top','h-20',)
        let cardBody = document.createElement("div")
		cardBody.classList.add("card-body")
        let category = document.createElement('h2')
        category.innerText = el.category;
        category.classList.add('card-title')
        let title = document.createElement("h2")
        title.innerText = el.title;
        title.classList.add("card-title")
        let desc = document.createElement("p")
        desc.innerText = el.description;
        desc.classList.add("card-text")
        let price = document.createElement('p')
        price.innerText = '$'+ el.price;
                price.classList.add("card-text")

        let rating = document.createElement("p")
        rating.innerText = el.rating;
                        rating.classList.add("card-text")

        let cartButton = document.createElement('button');
        cartButton.textContent = 'Add to Cart';
        cartButton.classList.add("btn", "btn-primary")
        cartButton.setAttribute('data-product',JSON.stringify(el))

        cartButton.addEventListener('click', addCart);
        cardBody.appendChild(category)
         cardBody.appendChild(productLink)
          cardBody.appendChild(desc)
           cardBody.appendChild(price)
            cardBody.appendChild(rating)
        cardBody.appendChild(cartButton);
        card.appendChild(img)
        card.appendChild(cardBody)
        div.appendChild(card);
        productLink.appendChild(title)
        // cont.appendChild(div)
        cont.appendChild(div)
    });
}
let cart = [];
let cartBadge = document.getElementById('cart-badge')
function updateCartBadge ()
{

    cartBadge.textContent = cart.length;
}
function addCart ()
{
    const prodData = JSON.parse(event.target.getAttribute('data-product'));
    cart.push(prodData);
    updateCart();
    updateCartBadge();
    console.log("item added")
}
const cartValue = document.getElementById('cart-value')
function updateCart ()
{
    const cartTotal = cart.reduce((total, pro) => total + pro.price, 0)
    cartValue.textContent=`${cartTotal.toFixed(2)}`
}
const checkoutButton = document.getElementById('checkout');

checkoutButton.addEventListener('click', checkout)
function checkout ()
{
    const cartDetails = JSON.stringify(cart)
    localStorage.setItem('cart', cartDetails);
    window.location.href='./checkout.html'
}
document.getElementById("categories").addEventListener("change", filterSelect)
let filteredProducts = []
function filterSelect(e) {
	alert(e.target.value)
	filteredProducts = products.filter((pro) => pro.category == e.target.value)
	console.log(filteredProducts)
	displayData(filteredProducts)
}

document.getElementById("sorting").addEventListener("select", sortProducts)
function sortProducts(e) {
	if (e.target.value == 0) {
		displayData(products.map((pro) => sort()))
	} else if (e.target.value == 1) {
		displayData(products.map((pro) => pro.sort()))
	} else {
	}
}
document.getElementById("search").addEventListener("input", searchResults)
function searchResults(e) {
	if (filteredProducts) {
		displayData(
			filteredProducts.filter((pro) => {
				return (
					pro.title.toLowerCase() == e.target.value.toLowerCase() ||
					pro.category.toLowerCase() == e.target.value.toLowerCase()
				)
			}),
		)
	} else {
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