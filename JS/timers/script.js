// function display ()
// {
//     const data = document.createElement('p')
//     data.textContent = "haii"
//     document.getElementById('msg').appendChild(data)
// }
// setTimeout(display, 5000)
/*create a modal and display it after 6 seconds*/
function display ()
{
    document.getElementById('modal').style.display="block"
}
setTimeout(display, 6000)
setInterval(function ()
{
    const dt = new Date();
    document.getElementById
        ('time').textContent = dt.toTimeString().substring(0,8)
    
}, 1000)
console.log("hi")
/*date,set,map*/