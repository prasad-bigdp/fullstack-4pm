let isOpen=false
function myOpen ()
{
  
    const modal = document.getElementById("modal")
    if (isOpen)
    {
        modal.style.display = "none";
        isOpen=false
        }
       
    else
    {
        modal.style.display = "block";
        isOpen=true
        document.body.style.background="rgba(0,0,0,0.4)"
        }
      
        
}
function change ()
{
    document.body.classList.toggle('dark')
}