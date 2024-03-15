document.addEventListener('DOMContentLoaded', () =>
{
    const params = new URLSearchParams(window.location.search);
    const productdata = params.get('product')
    console.log(productdata);
    if (productdata)
    {
        const product = JSON.parse(decodeURIComponent(productdata))
        const productDetailDiv = document.getElementById("product-details")
        const title = document.createElement('h2')
        title.textContent = product.title;
        const image = document.createElement("img")
        image.src = product.image;
        image.height = "200";
        image.width = "300";
        image.alt = product.title;
        const price = document.createElement('p')
        price.textContent = '$' + product.price;
        productDetailDiv.appendChild(title);
        productDetailDiv.appendChild(image)
                productDetailDiv.appendChild(price)


    }
})