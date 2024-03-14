let products = [];
function getData ()
{
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) =>
        {
            products = data.products;
            filtering();
            const swiper = new Swiper(".swiper", {
							// Optional parameters
							direction: "vertical",
							loop: false,

							// If we need pagination
							pagination: {
								el: ".swiper-pagination",
							},

							// Navigation arrows
							navigation: {
								nextEl: ".swiper-button-next",
								prevEl: ".swiper-button-prev",
							},

							// And if we need scrollbar
							scrollbar: {
								el: ".swiper-scrollbar",
							},
						})

      localStorage.setItem("products", JSON.stringify(products))
    })
}
getData()

function filtering ()
{
const Top_Products = products.filter((pro) => pro.rating > 4.8)
    console.log(Top_Products)
    Top_Products.forEach((p) =>
    {
        const imgDiv = document.createElement('div');
        console.log(p)
        const img = document.createElement('img');
        img.src = p.thumbnail
        img.alt = p.title
        console.log(imgDiv,img)
        imgDiv.appendChild(img)
        const ele = document.querySelector('.main-slider')
        ele.appendChild(imgDiv)
                imgDiv.classList.add("swiper-slide")

       console.log(ele)
    })
    
}


