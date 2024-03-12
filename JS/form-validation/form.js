console.log(document.getElementById('signup'))

document.getElementById("signup").addEventListener('submit', signup)

function signup(e)
{
    e.preventDefault();
    let userDetails = {
        username: e.target[0].value,
        email: e.target[1].value,
        password:e.target[2].value
    }
    console.log(userDetails)
    localStorage.clear()
    localStorage.setItem('user', JSON.stringify(userDetails))
    window.location.href="./form.html"
}
