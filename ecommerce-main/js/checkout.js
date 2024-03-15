const cartDetail = localStorage.getItem('cart')
const cart = JSON.parse(cartDetail)
console.log(cart);
const container = document.getElementById("cart-details")
updatCartDetails()
function updatCartDetails(){
    const CartDetails = JSON.stringify(cart);
    cart.forEach(e =>
    {
        const div = document.createElement('div')
        div.classList.add('row')
        const title = document.createElement('h3')  
        title.textContent = e.title;
        title.classList.add('col')
        const price = document.createElement('p')
        price.textContent = e.price;
        price.classList.add('col')
        div.appendChild(title)
        div.appendChild(price)
        container.appendChild(div)
    });
}
