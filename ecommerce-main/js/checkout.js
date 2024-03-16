const cartDetail = localStorage.getItem('cart')
const cart = JSON.parse(cartDetail)
console.log(cart);
function updateTotal ()
{
document.querySelector(".total").textContent = cart.reduce(
	(sum, p) => sum + p.price,
	0,
)
}
updateTotal()

const container = document.getElementById("cart-details")
updatCartDetails()
function updatCartDetails(){
  container.textContent=""
    cart.forEach((e,index) =>
    {
        const div = document.createElement('div')
        div.classList.add('row')
        const title = document.createElement('h3')  
        title.textContent = e.title;
        title.classList.add('col-4')
        const price = document.createElement('p')
        price.textContent = e.price;
        const deleteButton = document.createElement('button')
        deleteButton.textContent = "❎"
        deleteButton.addEventListener('click',()=>deleteItem(index))
        deleteButton.style.width = "20px";
        price.classList.add('col-4')
        deleteButton.classList.add("col-4")
        div.append(title,price,deleteButton)
       
        container.appendChild(div)
    });
}
function deleteItem (i)
{
    alert(i);
    cart.splice(i, 1);
    
    updatCartDetails();
    updateTotal()

}
document.getElementById("checkout")