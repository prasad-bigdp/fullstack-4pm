let c = document.getElementById('count')
let count = 0;
function incr ()
{ 
    count+=2
    c.textContent = count;
}
function decr ()
{
    count-=2
    c.textContent = count;
}
function reset ()
{
    count = 0;
    c.textContent= count
}