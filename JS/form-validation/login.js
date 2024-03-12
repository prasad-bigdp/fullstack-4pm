console.log(document.getElementById("loginform"))
document.getElementById("loginform").addEventListener("submit", signIn)
function signIn (e)
{
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
    const userDetails = JSON.parse(localStorage.getItem('user'))
    console.log(userDetails)
    if ((userDetails.email == email) && (userDetails.password == password))
    {
        alert("login successful")
        location.href="./dashboard.html"
    }
    else
    {
        alert("username or password is not matched")
        }
}
function passwordReveal ()
{
    alert("clicked")
    const pwd= document.getElementById('pwd')
    if (pwd.type=="password")
    {
        pwd.type="text"
    }
    else
    {
        pwd.type="password"
    }
}